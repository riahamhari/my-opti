#!/usr/bin/env node

const config = require('./config');

const fs = require('fs'); // Node built in package for interacting with the filesystem
const inquirer = require('inquirer'); // Package for the command line interaction
const clear = require('clear'); // Clears the terminal
const chalk = require('chalk');

clear();
console.log('---- Opti Framework setup ----');
console.log('');

/**
 * return an array of directories in a folder
 * @param {string} source - the source folder
 */
function getDirectories(source) {
	return fs
		.readdirSync(source, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);
}

/**
 * initial function to begin program
 */
function init() {
	// Get current week, month and year
	// Copy date so don't modify original
	let d = new Date();
	d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
	// Set to nearest Thursday: current date + 4 - current day number
	// Make Sunday's day number 7
	d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
	// Get first day of year
	const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
	// Calculate full weeks to nearest Thursday
	const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);

	const weekNum = ('0' + weekNo).slice(-2);
	const monthNum = ('0' + (d.getUTCMonth() + 1)).slice(-2);

	const folderName = `${weekNum}_${monthNum}_${d.getUTCFullYear()}`;

	// Empty object to be populated with the folder structure
	const folderData = {};

	// Get the folders in the base directory
	getDirectories(`./`)
		// Filter out any that aren't 4 digits which would be the year folders
		.filter((folder) => folder.match(/\d{4}/gi))
		// Add years to folderData object
		.map((yearFolder) => {
			if (!folderData[yearFolder]) {
				folderData[yearFolder] = [];
			}
		});

	const folders = [];

	// Get the sub folders of each entry on the folderData object
	Object.keys(folderData).map((folder) => {
		getDirectories(`./${folder}`)
			// Filter out any that aren't a sprint folder
			.filter((subFolder) => {
				if (subFolder.match(/(\d{2}(_|\s)){2}\d{4}/gi)) {
					folders.push(subFolder);
				}
			});
	});

	const folderExists = folders.includes(folderName);

	showPrompts(folderName, folderExists);
}

/**
 * ask terminal questions based on the folder structure
 * @param {object} data - object containing the folder structure
 */
function showPrompts(currentFolder, folderExists) {
	// Get the year folder
	inquirer
		.prompt([
			{
				type: 'list',
				name: 'newFolder',
				message: `Current folder is ${currentFolder}, use this or create new?`,
				choices: ['Use current', 'Create new'],
			},
			{
				type: 'input',
				name: 'folderName',
				message: 'Folder name: ',
				validate: function (value) {
					if (value.length) {
						return true;
					} else {
						return `Please enter the folder name.`;
					}
				},

				// Replace spaces with underscores
				filter: function (value) {
					return value
						.replace(/\s-\s/gi, '_')
						.replace(/[^a-zA-Z\s\d_:]/gi, '')
						.replace(/\s+/gi, '_')
						.trim();
				},

				// Only ask if the previous answer is for a new folder
				when: function (answers) {
					return answers.newFolder.match(/Create new/gi);
				},
			},
			{
				type: 'input',
				name: 'testName',
				message: 'Test name: ',
				validate: function (value) {
					if (value.length) {
						return true;
					} else {
						return `Please enter the name of test.`;
					}
				},
			},
		])
		.then((answers) => {
			const folderToUse = answers.folderName ? answers.folderName : currentFolder;

			let folderNeedsCreating = answers.folderName ? true : false;

			createFolderStructure({ folderToUse, testName: answers.testName, folderNeedsCreating });
		});
}

/**
 * create a folder structure based from an object
 * @param {object} data - object to define folder structure
 */
function createFolderStructure(data) {
	const testName = data.testName
		.replace(/\s-\s/gi, '_')
		.replace(/[^a-zA-Z\s\d_:]/gi, '')
		.replace(/\s+/gi, '_')
		.trim();

	const currentYear = new Date().getUTCFullYear();

	let folderNeedsCreating = false;

	// See if the folder exists
	try {
		fs.readdirSync(`./${currentYear}/${data.folderToUse}`, { withFileTypes: true });
	} catch (err) {
		if ((err.code = 'ENOENT')) {
			folderNeedsCreating = true;
		}
	}

	// If a new folder is needed, create it
	if (folderNeedsCreating) {
		fs.mkdirSync(`${currentYear}/${data.folderToUse}`);
	}

	const targetFolder = `${currentYear}/${data.folderToUse}/${testName}`;

	// Create target folder
	makeDirectory(targetFolder);

	const appHeader = `/**
Developed by: ${config.name}
Test name: ${data.testName}
**/

// Global store and utag declaration
declare global {
	interface Window {
		store?: any;
		utag?: any;
	}
}`;

	const tsconfig = `{
	"extends": "../../../tsconfig.json",
	"compilerOptions": {
		"rootDir": "./src/",
		"outDir": "./format"
	}
}`;

	// Files to create as an array.  location: where to create file; content: file content to include
	const filesData = [
		{ location: `${targetFolder}/src/app.ts`, content: appHeader },
		{ location: `${targetFolder}/src/scss/styles.scss`, content: "@use 'sass/base' as *;" },
		{ location: `${targetFolder}/format/app.js`, content: '' },
		{ location: `${targetFolder}/format/importapp.js`, content: '' },
		{ location: `${targetFolder}/format/editedapp.js`, content: '' },
		{ location: `${targetFolder}/format/transpiledapp.js`, content: '' },
		{ location: `${targetFolder}/format/styles.css`, content: '' },
		{ location: `${targetFolder}/dist/dev.app.js`, content: '' },
		{ location: `${targetFolder}/dist/prod.app.html`, content: '' },
		{ location: `${targetFolder}/tsconfig.json`, content: tsconfig },
	];

	// Make directories inside the new test folder
	fs.mkdirSync(`${targetFolder}/src`);
	fs.mkdirSync(`${targetFolder}/dist`);
	fs.mkdirSync(`${targetFolder}/format`);
	fs.mkdirSync(`${targetFolder}/src/scss`);

	// Create files from filesData
	filesData.map((data) => {
		createFile(data.location, data.content);
	});

	if (!config.name) {
		console.log(chalk.bgRed('Please create a config.json file and add your name'));
	}

	console.log(`New folder structure ${targetFolder} created`);
	console.log('');
	console.log('Running Grunt');
	console.log('To start Grunt without going through this process use "npm run start"');
}

/**
 * create a file in a defined location with content
 * @param {string} location - location to create the file
 * @param {string} content - content to insert in the newly created file
 */
function createFile(location, content) {
	fs.appendFile(location, content, (err) => {
		if (err) throw err;
	});
}

/**
 *	Creates a directory on the suplied path
 * @param {string} path - the path to create the directory
 */
function makeDirectory(path) {
	try {
		fs.mkdirSync(path);
	} catch (err) {
		if (err.code === 'EEXIST') {
			console.log('');
			console.log(chalk.bgRed('That folder already exists, please choose another name'));
			console.log('');
		}
	}
}

init();

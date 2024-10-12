const { watch } = require("fs");
var path = require("path");

module.exports = function (grunt) {
  // Loads grunt NPM tasks
  require("load-grunt-tasks")(grunt);

  // Project configuration.
  grunt.initConfig({
    watch: {
      scripts: {
        // Change to '['21*/*print*/**/src/app.js'] on 1st Jan 2100
        files: ["20*/**/**/src/app.ts"],
        tasks: ["newer"],
        options: {
          spawn: false,
        },
      },
      "dart-sass": {
        files: "20*/**/**/src/scss/*.scss",
        tasks: ["newer"],
        options: {
          spawn: false,
        },
      },
    },

    newer: {
      ...getDataNewer(),
    },

    ts: {
      ...getDataJS(),
    },

    opti_import: {
      ...getDataImport(),
    },

    opti_literals: {
      ...getFileForLiterals(),
    },

    opti_remove_export: {
      ...getFileForRemoveExport(),
    },

    "dart-sass": {
      ...getDataCSS(),
      options: {
        style: "expanded",
        sourcemap: "none",
        outputStyle: "expanded",
      },
    },

    file_append: {
      ...getDataAppend(),
    },

    concat: {
      options: {
        seperator: "\n",
      },
      ...getDataConcat(),
    },

    clean: {
      ...getDataClean(),
    },
  });

  grunt.registerMultiTask(
    "opti_literals",
    "Format template literals to work with Adobe Target",
    function () {
      // Path to source file
      const filepath = path.resolve(this.data.src);
      // Source file contents
      const contents = grunt.file.read(filepath);
      // Get the template literal
      const regex = /\${/gi;

      const replacedLiterals = contents.replace(regex, "$$$${!1}{");

      grunt.file.write(this.data.dest, replacedLiterals);
    }
  );

  grunt.registerMultiTask(
    "opti_remove_export",
    "Remove export text from complied Typescript files",
    function () {
      // Path to source file
      const filepath = path.resolve(this.data.src);
      // Source file contents
      const contents = grunt.file.read(filepath);
      // Get the template literal
      const regex = /export \{\}\;/gi;

      const removedExport = contents.replace(regex, "");

      grunt.file.write(this.data.dest, removedExport);
    }
  );

  grunt.registerMultiTask(
    "opti_import",
    "Add imported functions to code",
    function () {
      // Path to source file
      const filepath = path.resolve(this.data.src);
      // Source file contents
      const contents = grunt.file.read(filepath);
      // Get the import statement
      const regexImport = /import\s{?(.*)}?\s*from\s*(?:"|')(.*\.\w+)(?:"|')/gi;
      // const match = regexImport.exec(contents);
      const match = contents.match(regexImport);

      if (!match) {
        grunt.file.write(this.data.dest, contents);
        return;
      }

      // Empty object to store content data
      let contentsObj = {};

      // Loop through import lines to get the import file name and function name(s)
      match.map((line) => {
        // Replace single quotes with doubles
        const nLine = line.replace(/\'/gi, '"');
        // Get function name(s) and import file as groups
        const lineMatch = /import\s({?.*}?)\sfrom\s"(.*)"/gi.exec(nLine);
        const importFileName = lineMatch[2];
        const funcNames = lineMatch[1]
          .replace(/\{\s?|\s?\}/gi, "")
          .split(",")
          .map((nm) => nm.trim());
        // Add to contents object
        contentsObj[importFileName] = funcNames;
      });

      // Create code to add as an empty string
      let codeToAdd = "";

      // Loop through the the contentObj
      Object.keys(contentsObj).map((data) => {
        // Get file path of the import file
        const filePath = path.resolve(data);
        // Read the import file and create an array off all the functions
        const importContents = grunt.file.read(filePath);

        const importContentsArr = importContents.split("/*");
        // Loop through the function names and if it matches an imported function name add it to the codeToAdd string
        contentsObj[data].map((funcName) => {
          const regex = new RegExp("\\s" + funcName + "\\s", "gi");
          if (!regex.test(importContents)) {
            // grunt.log.error(`${funcName} not found in ${data}`);
            grunt.log.error(
              grunt.log.wordlist([`${funcName} not found in ${data}`], {
                separator: "",
                color: "red",
              })
            );
            return;
          }
          const funcCode = matchFunction(funcName, importContentsArr, data);
          codeToAdd += funcCode + "\n";
        });
      });

      // Remove the import lines from the source file
      const newContents = contents.replace(regexImport, "");

      // Write file data plus the imported functions to the destination file
      grunt.file.write(this.data.dest, codeToAdd + newContents);

      // Match the function name to text in import file location
      function matchFunction(functionName, importContents, fileName) {
        var funcBody;
        // Create regex based on function name
        var regex = new RegExp("\\s" + functionName + "\\s", "gi");
        importContents.map((func) => {
          // If there is a function then add it
          if (regex.test(func)) {
            let funcCopy = "/*" + func.replace(/export\s/gi, "");
            funcBody = funcCopy;
            grunt.log.writeln(
              grunt.log.wordlist([`${functionName} added from ${fileName}`], {
                separator: "",
                color: "green",
              })
            );
          }
        });
        return funcBody;
      }
    }
  );

  function getFolderData() {
    var folderData = {};
    grunt.file
      .expand({}, ["*"])
      .filter((folder) => folder.match(/20\d{2}/gi))
      .map((year) => {
        if (!folderData[year]) {
          folderData[year] = {};
        }
        grunt.file
          .expand({ cwd: year }, ["*"])
          .filter((folder) => folder.match(/(\d{2}(_|\s)){2}\d{4}/gi))
          .map((sf) => {
            grunt.file.expand({ cwd: `${year}/${sf}` }, ["*"]).map((file) => {
              if (!folderData[year][sf]) {
                folderData[year][sf] = [file];
              } else {
                folderData[year][sf].push(file);
              }
            });
          });
      });

    return folderData;
  }

  function getDataJS() {
    var folderData = getFolderData();
    var jsObj = {};
    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          jsObj[`${key}${val}`] = {
            tsconfig: {
              tsconfig: `${folder}/${key}/${val}/tsconfig.json`,
              passThrough: true,
            },
            options: {
              rootDir: `${folder}/${key}/${val}`,
              outDir: `format`,
            },
          };
        });
      });
    });
    return jsObj;
  }

  function getDataImport() {
    var folderData = getFolderData();
    var importObj = {};
    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          importObj[`${key}${val}`] = {
            src: `${folder}/${key}/${val}/format/app.js`,
            dest: `${folder}/${key}/${val}/format/importapp.js`,
          };
        });
      });
    });
    return importObj;
  }

  function getFileForLiterals() {
    var folderData = getFolderData();
    var importObj = {};
    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          importObj[`${key}${val}`] = {
            src: `${folder}/${key}/${val}/format/editedapp.js`,
            dest: `${folder}/${key}/${val}/format/transpiledapp.js`,
          };
        });
      });
    });
    return importObj;
  }

  function getFileForRemoveExport() {
    var folderData = getFolderData();
    var importObj = {};
    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          importObj[`${key}${val}`] = {
            src: `${folder}/${key}/${val}/format/importapp.js`,
            dest: `${folder}/${key}/${val}/format/editedapp.js`,
          };
        });
      });
    });
    return importObj;
  }

  function getDataCSS() {
    var folderData = getFolderData();
    var cssObj = {};
    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          cssObj[`${key}${val}`] = {
            src: `${folder}/${key}/${val}/src/scss/styles.scss`,
            dest: `${folder}/${key}/${val}/format/styles.css`,
          };
        });
      });
    });
    return cssObj;
  }

  function getDataAppend() {
    var folderData = getFolderData();
    var appendObj = {};

    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          appendObj[`${key}${val}`] = { files: [] };
          appendObj[`${key}${val}`].files.push(
            {
              append: "",
              prepend: "",
              input: `${folder}/${key}/${val}/format/editedapp.js`,
              output: `${folder}/${key}/${val}/format/dev.app.js`,
            },
            {
              append: "</style>`)",
              prepend:
                "document.body.insertAdjacentHTML('afterbegin', `\n<style>\n",
              input: `${folder}/${key}/${val}/format/styles.css`,
              output: `${folder}/${key}/${val}/format/dev.styles.js`,
            },
            // Production build
            {
              append: "</script>",
              prepend: "<script>\n",
              input: `${folder}/${key}/${val}/format/transpiledapp.js`,
              output: `${folder}/${key}/${val}/format/prod.app.html`,
            },
            {
              append: "</style>",
              prepend: "<style>\n",
              input: `${folder}/${key}/${val}/format/styles.css`,
              output: `${folder}/${key}/${val}/format/prod.styles.html`,
            }
          );
        });
      });
    });
    return appendObj;
  }

  function getDataConcat() {
    var folderData = getFolderData();
    var concatObj = {};
    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          concatObj[`${key}${val}Dev`] = {
            dest: `${folder}/${key}/${val}/dist/dev.app.js`,
            src: [
              `${folder}/${key}/${val}/format/dev.app.js`,
              `${folder}/${key}/${val}/format/dev.styles.js`,
            ],
          };
          concatObj[`${key}${val}Prod`] = {
            dest: `${folder}/${key}/${val}/dist/prod.app.html`,
            src: [
              `${folder}/${key}/${val}/format/prod.app.html`,
              `${folder}/${key}/${val}/format/prod.styles.html`,
            ],
          };
        });
      });
    });
    return concatObj;
  }

  function getDataNewer() {
    var folderData = getFolderData();
    var newerObj = {};

    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          newerObj[`${key}${val}newerSass`] = {
            src: [`${folder}/${key}/${val}/src/scss/styles.scss`],
            dest: `${folder}/${key}/${val}/format/styles.css`,
            options: {
              tasks: [
                `dart-sass:${key}${val}`,
                `file_append:${key}${val}`,
                `concat:${key}${val}Dev`,
                `concat:${key}${val}Prod`,
                `clean:${key}${val}`,
              ],
            },
          };
          newerObj[`${key}${val}newerJs`] = {
            src: [`${folder}/${key}/${val}/src/*.ts`],
            dest: `${folder}/${key}/${val}/format/importapp.js`,
            options: {
              tasks: [
                `ts:${key}${val}`,
                `opti_import:${key}${val}`,
                `opti_remove_export:${key}${val}`,
                `opti_literals:${key}${val}`,
                `file_append:${key}${val}`,
                `concat:${key}${val}Dev`,
                `concat:${key}${val}Prod`,
                `clean:${key}${val}`,
              ],
            },
          };
        });
      });
    });
    return newerObj;
  }

  function getDataClean() {
    var folderData = getFolderData();
    var cleanObj = {};
    Object.keys(folderData).map((folder) => {
      Object.keys(folderData[folder]).map((key) => {
        folderData[folder][key].map((val) => {
          cleanObj[`${key}${val}`] = [
            `${folder}/${key}/${val}/format/*`,
            `!${folder}/${key}/${val}/format/app.js`,
            `!${folder}/${key}/${val}/format/styles.css`,
            `!${folder}/${key}/${val}/format/importapp.js`,
            `!${folder}/${key}/${val}/format/transpiledapp.js`,
            `!${folder}/${key}/${val}/format/editedapp.js`,
          ];
        });
      });
    });
    return cleanObj;
  }

  grunt.registerTask("default", ["newer", "watch"]);
};

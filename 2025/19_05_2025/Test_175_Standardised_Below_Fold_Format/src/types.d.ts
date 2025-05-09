export type Course = {
	courseName: string;
	courseUrl: string;
	introduction: {
		heading: string;
		text: string;
	};
	courseDescription: string;
	topics: string[];
	audienceTypes: string[];
	result: string;
};

export type CoursesContent = Course[];

export type Instructor = {
	name: string;
	image: string;
	role: string;
};

export type FAQ = {
	heading: string;
	answer: string;
};

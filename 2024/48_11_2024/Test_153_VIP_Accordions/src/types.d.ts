type Course = {
	title: string;
	oldPrice: string;
	lessons: string;
	moreInfoLink: string;
	studentsEnrolled: string;
};

type CourseCategory = {
	courseName: string;
	courseImgSrc: string;
	courses: Course[];
};

type CoursesData = {
	[key: string]: CourseCategory;
};

export { CoursesData };

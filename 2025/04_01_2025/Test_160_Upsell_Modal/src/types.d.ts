export interface VideoContent {
	href: string;
	vimeoTitle: string;
	vimeoId: string;
	imageSrc: string;
}
export interface Course {
	packageToLinkTo: string;
	courseLandingPages: string[];
	packageIncludes: string[];
	saving: string;
	price: string;
	totalValue: string;
	videoInfo: VideoContent;
}

export interface CoursesData {
	[key: string]: Course;
}

export interface WebLink {
	name?: string;
	url: string;
	icon: string;
}

export interface Course {
	institution: string;
	name: string;
	description: string;
	duration: string;
	link: WebLink;
	degree?: string
}

export interface CV {
	profile: string;
	experience: {
		position: string;
		company: string;
		start: string;
		end: string;
		country: string;
		description: string;
	}[];
	education: {
		institution: string;
		degree: string;
		description: string;
		duration: string;
	}[];
	skills: string[];
	personalProjects: ({
		name: string;
		description: string;
		duration: string;
		repo: {
			name: string;
			url: string;
			icon: string;
		};
		web: {
			name?: string;
			url: string;
			icon: string;
		} | null ;
	})[];
	links: {
		name: string;
		url: string;
		icon: string;
	}[];
	interests: {
		name: string;
	}[];

	languages: {
		name: string;
		level: string;
	}[];

	courses: Course[];

	wsapLnk: string,
	phone: string
}
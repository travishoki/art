export type ImgType = {
	img: string;
};

export type ProjectType = {
	description: string;
	id: string;
	title: string;
	images: ImgType[];
	thumbnail: string;
};

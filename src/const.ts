import ImgEevee from './images/eevee.jpg';
import ImgEeveeCard from './images/eevee-card.jpg';
import ImgEeveeThumbnail from './images/eevee-thumbnail.jpg';
import ImgFlygon from './images/flygon.jpg';
import ImgFlygonCard from './images/flygon-card.jpg';
import ImgFlygonThumbnail from './images/flygon-thumbnail.jpg';
import ImgPikachu from './images/pikachu.jpg';
import ImgPikachuCard from './images/pikachu-card.jpg';
import ImgPikachuThumbnail from './images/pikachu-thumbnail.jpg';
import { ProjectType } from './pages/Gallery/types';

export const IMAGES: ProjectType[] = [
	{
		id: '1',
		images: [
			{
				img: ImgEevee,
			},
			{
				img: ImgEeveeCard,
			},
		],
		thumbnail: ImgEeveeThumbnail,
		title: 'Eevee',
	},
	{
		id: '2',
		images: [
			{
				img: ImgFlygon,
			},
			{
				img: ImgFlygonCard,
			},
		],
		thumbnail: ImgFlygonThumbnail,
		title: 'Flygon',
	},
	{
		id: '3',
		images: [
			{
				img: ImgPikachu,
			},
			{
				img: ImgPikachuCard,
			},
		],
		thumbnail: ImgPikachuThumbnail,
		title: 'Pikachu',
	},
];

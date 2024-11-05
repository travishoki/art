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
		description:
			'Eevee is ready for the exciting journey ahead. Though there are dark clouds ahead, a rainbow shines brightly overhead representing each of the colors and elements of Eevee&apos;s potential evolutions.',
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
		description:
			'The majestic Flygon glides through the iconic Delicate Arch (Arches National Park in Utah, USA). Vibrava and Trapinch follow behind. The hot desert landscape is filled with natural rock formations.',
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
		description:
			'Pikachu looking stylish, standing at Tokyo&apos;s Olympic street skatepark. Each of the Kanto starter Pokémon are putting together epic runs on the legendary skateboard course.',
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

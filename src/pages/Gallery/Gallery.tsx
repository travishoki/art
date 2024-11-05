import React from 'react';
import { GalleryItem } from './GalleryItem';
import { ImageType } from './types';
import './Gallery.css';

const images: ImageType[] = [
	{
		id: '1',
		title: 'one',
	},
	{
		id: '2',
		title: 'two',
	},
	{
		id: '3',
		title: 'three',
	},
];

export const Gallery = () => {
	return (
		<div className="gallery">
			<h1>Gallery</h1>
			<ul>
				{images.map((image, index) => (
					<GalleryItem key={index} {...image}></GalleryItem>
				))}
			</ul>
		</div>
	);
};

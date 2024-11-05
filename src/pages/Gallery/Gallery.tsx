import React from 'react';
import { IMAGES } from '../../const';
import { GalleryItem } from './GalleryItem';
import './Gallery.css';

export const Gallery = () => {
	return (
		<div className="gallery">
			<h1>Art by Travis Hoki</h1>
			<ul>
				{IMAGES.map((image, index) => (
					<GalleryItem key={index} {...image}></GalleryItem>
				))}
			</ul>
		</div>
	);
};

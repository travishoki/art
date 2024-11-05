import React from 'react';
import { ImageType } from './types';
import { Link } from 'react-router-dom';

export const GalleryItem = ({ id, title }: GalleryItemProps) => {
	return (
		<li>
			<Link to={`/gallery/${id}`}>{title}</Link>
		</li>
	);
};

type GalleryItemProps = ImageType;

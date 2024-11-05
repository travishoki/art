import React from 'react';
import { ImageType } from './types';

export const GalleryItem = ({ title }: GalleryItemProps) => {
	return <li>{title}</li>;
};

type GalleryItemProps = ImageType;

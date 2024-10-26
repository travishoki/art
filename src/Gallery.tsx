import React from 'react';
import "./Gallery.css";

const images:ImageType[] = [
    {
        id:"1",
        title:"one",
    },{
        id:"2",
        title:"two"
    }
]
type ImageType = {
    id:string,
    title:string,
}

export const Gallery = () => {
    return (
        <div className="gallery">
        <h1>Gallery</h1>
        <ul>
        {images.map((image)=>(
           <li>{image.title}</li>     
        ))}
        </ul>
        </div>
    )
}
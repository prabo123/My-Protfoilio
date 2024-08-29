
import React from 'react';
import './Gallery.css';

import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';

function Gallery() {
    const images = [image1, image2, image3];

    return (
        <div className="gallery-container">
            
            <h1 className="gallery-title">Gallery</h1>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;


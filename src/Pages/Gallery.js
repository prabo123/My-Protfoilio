import React from 'react';
import './Gallery.css';

import image1 from '../images/image1.jpeg';
import image2 from '../images/image2.jpeg';
import image3 from '../images/image3.jpeg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import image7 from '../images/image7.jpeg';
import image8 from '../images/image8.jpeg';
import image9 from '../images/image9.jpeg';
import image10 from '../images/image10.jpeg';
import image11 from '../images/image11.jpeg';
import image12 from '../images/image12.jpeg';
import image13 from '../images/image13.jpeg';
import image14 from '../images/image14.jpeg';
import image15 from '../images/image15.jpeg';
import image16 from '../images/image16.jpeg';
import image17 from '../images/image17.jpeg';
import image18 from '../images/image18.jpeg';
import image19 from '../images/image19.jpeg';
import image20 from '../images/image20.jpeg';
import image21 from '../images/image21.jpeg';
import image22 from '../images/image22.jpeg';
import image23 from '../images/image23.jpeg';
import image24 from '../images/image24.jpeg';
import image25 from '../images/image25.jpeg';
import image26 from '../images/image26.jpeg';
import image27 from '../images/image27.jpeg';
import image28 from '../images/image28.jpeg';
import image29 from '../images/image29.jpeg';
import image30 from '../images/image30.jpeg';

function Gallery() {
  const images = [
    image1, image7, image5,image20,
    image10, image19, image14, image15,
     image4, image8,image9,image6,
     image22,image23, image24,image18, 
    image27,image2,image17,image26,
    image13,image28,image30,image25,
    image12,image11,image29,image16,
    image21,image3,
  ];

  return (
    <div>
      <div className="header">
        
      </div>

      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="column">
            <img src={image} alt={`Gallery ${index + 1}`} style={{ width: '100%' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

import React from 'react';
import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/3.jpg'
import img4 from '../../../assets/banner/4.jpg'
import img5 from '../../../assets/banner/5.jpg'
import img6 from '../../../assets/banner/6.jpg'
import Carousel from './Carousel';

const Gallery = () => {
    return (
        <div>
            <h1 className='text-center text-5xl font-bold my-10'>Our Gallery</h1>
            <div className="carousel w-4/5 mx-auto">
            <Carousel id='1' img={img1}></Carousel>
        <Carousel id='2' img={img2}></Carousel>
        <Carousel id='3' img={img3}></Carousel>
        <Carousel id='4' img={img4}></Carousel>
        <Carousel id='5' img={img5}></Carousel>
        <Carousel id='6' img={img6}></Carousel>
        
      </div>
            
        </div>
    );
};

export default Gallery;
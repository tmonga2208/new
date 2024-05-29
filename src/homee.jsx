import React from "react";
import { Link } from "react-router-dom";
import str from "./css/homee.module.css";
import image0 from "./img/pj1.webp";
import image1 from "./img/pj2.jpg";
import image2 from "./img/pj3.jpg";
import image3 from "./img/pj4.jpg";
import image4 from "./img/pj5.jpg";
import image5 from "./img/h1.jpg"
import image6 from "./img/h2.jpg"
import image7 from "./img/h3.jpg"
import image8 from "./img/h4.jpg"
import image9 from "./img/h5.jpg"
import image10 from "./img/t1.jpg"
import image11 from "./img/t2.jpg"
import image12 from "./img/t3.jpg"
import image13 from "./img/t4.jpg"
import image14 from "./img/t5.jpg"

const images = [image0, image1, image2, image3, image4];
const images2 = [image5, image6, image7, image8, image9];
const images3 = [image10, image11, image12, image13, image14]

function Homee() {
    return (
        <div>
            <div className={str.top}>
                <h2 className={str.head}>Top Books</h2>
                <Link className={str.but} to ="/browse1">See all</Link>
                <div className={str.carousel}>
                    <div className={str.carouselTrack}>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index}`} className={str.carouselImage} />
                        ))}
                        {images.map((image, index) => (
                            <img key={index + images.length} src={image} alt={`Slide ${index + images.length}`} className={str.carouselImage} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={str.top}>
                <h2 className={str.head}>Recommended Books</h2>
                <Link className={str.but} to="/browse2" >See all</Link>
                <div className={str.carousel}>
                    <div className={str.carouselTrack}>
                        {images2.map((image, index) => (
                            <img key={index} src={image} alt={`Slide ${index}`} className={str.carouselImage} />
                        ))}
                        {images2.map((image, index) => (
                            <img key={index + images2.length} src={image} alt={`Slide ${index + images2.length}`} className={str.carouselImage} />
                        ))}
                    </div>
                </div>
            </div>
            <div className={str.righti}>
                <h2 className={str.head}>Your BookMarks</h2>
            </div>
        </div>
    );
}

export default Homee;

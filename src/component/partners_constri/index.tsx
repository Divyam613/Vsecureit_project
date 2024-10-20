import React from "react";
import './style.css';
import ImageCard from '../image_card/image_card'


function Partners(){
    const data = [
        {
            image: './assets/slider-item-img1.png'
        },
        {
            image: './assets/slider-item-img2.png'
        },
        {
            image: './assets/slider-item-img3.png'
        },
        {
            image: './assets/slider-item-img4.png'
        },
        {
            image: './assets/slider-item-img5.png'
        },
        {
            image: './assets/slider-item-img6.png'
        }
    ]
    return (
        <div className="up_partners">
            <div className="constri">
                <h5 className="headi">PARTNERS</h5>
                <h2 className="working_block">We're Working With</h2>
            </div>
            <div className="image_row">
                {
                    data.map( (datas) => {
                        return <ImageCard {...datas} />
                    })
                }
            </div>

        </div>

    )
};

export default Partners;
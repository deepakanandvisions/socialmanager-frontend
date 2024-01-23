import React from 'react';
import 'react-loading-skeleton/dist/skeleton.css'

import animation1 from './../../../../assets/images/animation1.gif';
import animation2 from './../../../../assets/images/animation2.gif';
import animation3 from './../../../../assets/images/animation3.gif';
const UnderHeroWrapper = ({ ShortsMakerField }) => {
    console.log("Imagess", ShortsMakerField.EditVideoApiData.images_gifs);
    return (
        <div className="underHeroWrapper">
            <div className="underHeroInner">
                <div className="underHeroheading">
                    <h2>
                        Loved by 40,000 Creators
                    </h2>

                    <p>
                        Publish high-quality shorts consistently to increase viewership and followers, boosting your channel's growth and revenue potential.
                    </p>


                </div>
                <ul className="underHeroImgGroup">
                    <li className="underHeroImage">
                        <img src={animation1} width="360" height="639" alt="" />
                    </li>

                    <li className="underHeroImage">
                        <img src={animation2} width="360" height="639" alt="" />
                    </li>

                    <li className="underHeroImage">
                        <img src={animation3} width="360" height="639" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UnderHeroWrapper;

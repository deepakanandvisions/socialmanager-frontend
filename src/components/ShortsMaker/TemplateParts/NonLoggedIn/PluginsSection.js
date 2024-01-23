import { React, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const PluginsSection = ({ ShortsMakerField }) => {
    return (
        <>
          <div className="aishorts-sec">
                <h2>Effortlessly Refine Your AI-Shorts with Powerful Plugins</h2>
                {ShortsMakerField?.EditVideoApiData
                        ?.plugins_list_repeated &&
                        ShortsMakerField?.EditVideoApiData?.plugins_list_repeated.map(
                            (data, index) => (
                <div class="aishorts-row">
                    <div class="aishorts-img">
                        <LazyLoadImage
                        src={data?.plugin_thumbnail?.url}/>
                    </div>
                    <div class="aishorts-content">
                        <h3>{data.title_plugins}</h3>
                        <p>{data.description_plugins}</p>
                    </div>
                </div>
                )
            )}
          </div> 
        </>
    );
};
export default PluginsSection;

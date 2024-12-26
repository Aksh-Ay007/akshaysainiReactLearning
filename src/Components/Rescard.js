import React from "react";


function Rescard({ data }) {
    const { info } = data;
    
    // Construct the image URL - Swiggy uses a base URL + cloudinaryImageId
    const CLOUDINARY_BASE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
    const imageUrl = CLOUDINARY_BASE_URL + info.cloudinaryImageId;

    return (
        <div className='res-card'>
            <img src={imageUrl} alt={info.name} />
            <h3>{info.name}</h3>
            <h4>{info.cuisines?.join(", ")}</h4>
            <h4>{info.avgRating} stars</h4>
            <h4>{info.locality}</h4>
        </div>
    );
}


export default Rescard
import React from "react";
import './ImageUser.css'
import imagePath from './user.jpg';
function ImageUser() {
    return (
        <div>
            <img src={imagePath} alt="" />
        </div>
    );
}

export default ImageUser;
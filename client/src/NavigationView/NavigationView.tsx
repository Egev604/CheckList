import React from "react";
import ImageUser from "./ImageUser/ImageUser";
import NavBar from "./NavBar/NavBar";
import './NavigationView.css'

function NavigationView() {
    return (
        <>
            <div className="sidebar">
                <h1>Лебедев Артем</h1>
                <ImageUser></ImageUser>
                <NavBar></NavBar>
            </div>
        </>
    );
}

export default NavigationView;
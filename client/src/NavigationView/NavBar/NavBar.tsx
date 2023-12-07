import React from "react";
import './NavBar.css'
import {Link} from "react-router-dom";
function NavBar() {
    return (
            <div>
                <nav>
                    <li><Link to={"/"}>Главная</Link></li>
                    <li><Link to={"/checkList"}>Чек листы</Link></li>
                    <li><Link to={"/about"}>О нас</Link></li>
                </nav>
            </div>
    );
}

export default NavBar;
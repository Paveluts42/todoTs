import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper #26a69a teal lighten-1 paddingX1
">
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to={"/"} >lol</NavLink></li>
                <li><NavLink to={"/about"} >about</NavLink></li>
            </ul>
        </div>
    </nav>
)


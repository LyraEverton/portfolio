import React from "react";
import "./Navbar.scss";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="header">
            <div className="me">
                <span className="me__name">Everton Lyra</span>
                <span className="me__role">Front-End Developer</span>
            </div>
            <div className="navbar">
                <NavLink
                    className={({isActive}) =>
                        isActive ? "navbar__link navbar__link__active navbar__link__active__home " : "navbar__link"
                    }
                    to={"/"}>Home</NavLink>
                <NavLink
                    className={({isActive}) =>
                        isActive ? "navbar__link navbar__link__active navbar__link__active__cases " : "navbar__link"
                    } to={"/cases"}>Case studies</NavLink>
                <NavLink
                    className={({isActive}) =>
                        isActive ? "navbar__link navbar__link__active navbar__link__active__about" : "navbar__link"
                    } to={"/about"}>About</NavLink>
                <NavLink
                    className={({isActive}) =>
                        isActive ? "navbar__link navbar__link__active navbar__link__active__getInTouch" : "navbar__link"
                    } to={"/get-in-touch"}>Get in touch</NavLink>
            </div>
        </div>
    );
}
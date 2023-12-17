import React, {useState} from "react";
import "./Navbar.scss";
import {NavLink} from "react-router-dom";
import {BurgerMenu} from "../burgerMenu/BurgerMenu";
import i18next from "i18next";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={"navbar"}>
            <div className="navbar__me">
                <div className={isOpen ? "d-none d-lg-block" : "d-block"}>
                    <span className="navbar__me__name">{i18next.t('ns1:navbar.name')}</span>
                    <span className="navbar__me__role">{i18next.t('ns1:navbar.role')}</span>
                </div>
                <div className={isOpen ? "d-block d-lg-none" : "d-none"}>
                    <span className="navbar__me__menu">{i18next.t('ns1:navbar.menu')}</span>
                </div>
                <BurgerMenu
                    isOpen={isOpen}
                    onClick={() => {
                        setIsOpen((toggled) => !toggled);
                    }}
                />
            </div>
            <div className={isOpen ? "navbar__header active" : "navbar__header"}>
                <div className={"navbar__header__navLinks"}>
                    <NavLink
                        className={({isActive}) =>
                            isActive ?
                                "navbar__header__navLinks__link navbar__header__navLinks__link__active navbar__header__navLinks__link__active__home " :
                                "navbar__header__navLinks__link"
                        }
                        to={"/"}>{i18next.t('ns1:navbar.home')}</NavLink>
                    <NavLink
                        className={({isActive}) =>
                            isActive ?
                                "navbar__header__navLinks__link navbar__header__navLinks__link__active navbar__header__navLinks__link__active__cases " :
                                "navbar__header__navLinks__link"
                        } to={"/cases"}>{i18next.t('ns1:navbar.caseStudies')}</NavLink>
                    <NavLink
                        className={({isActive}) =>
                            isActive ?
                                "navbar__header__navLinks__link navbar__header__navLinks__link__active navbar__header__navLinks__link__active__about" :
                                "navbar__header__navLinks__link"
                        } to={"/about"}>{i18next.t('ns1:navbar.about')}</NavLink>
                    <NavLink
                        className={({isActive}) =>
                            isActive ?
                                "navbar__header__navLinks__link navbar__header__navLinks__link__active navbar__header__navLinks__link__active__getInTouch" :
                                "navbar__header__navLinks__link"
                        } to={"/get-in-touch"}>{i18next.t('ns1:generic.getInTouch')}</NavLink>
                </div>
                <div className={"navbar__header__socials d-lg-none"}>
                    <span className={"navbar__header__socials__social"}>{i18next.t('ns1:navbar.social')}</span>
                    <a href={"/"} className={"navbar__header__socials__twitter"}>{i18next.t('ns1:navbar.twitter')}</a>
                    <a href={"/"} className={"navbar__header__socials__linkedin"}>{i18next.t('ns1:navbar.linkedin')}</a>
                    <a href={"/"} className={"navbar__header__socials__facebook"}>{i18next.t('ns1:navbar.facebook')}</a>
                </div>
            </div>
        </div>
    );
}
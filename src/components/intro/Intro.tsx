import "./Intro.scss";
import i18next from "i18next";
import React from "react";

export const Intro = () => {
    const Emoji = (props: any) => (
        <span
            className="emoji"
            role="img"
            aria-label={props.label ? props.label : ""}
            aria-hidden={props.label ? "false" : "true"}
        >
    {props.symbol}
  </span>
    )
    return (
        <div className={"introduction py-25 px-15"}>
            <div className={"introduction__name"}>
                <span>Hello</span>
                <Emoji label="sheep" symbol="👋"/>
                <span className={"d-block"}>I´m Everton</span>
            </div>
            <div className={"introduction__aboutMe mt-1"}>
                <span>A Portugal based frontend developer, working and living in OPorto. I love to work on anything code, from designing simple HTML pages to solving complex problems.</span>
                <div className={"introduction__aboutMe__socials mt-2"}>
                    <a href={"/"}
                       className={"introduction__aboutMe__socials__twitter"}>{i18next.t('ns1:navbar.twitter')}</a>
                    <a href={"/"}
                       className={"introduction__aboutMe__socials__linkedin"}>{i18next.t('ns1:navbar.linkedin')}</a>
                    <a href={"/"}
                       className={"introduction__aboutMe__socials__facebook"}>{i18next.t('ns1:navbar.facebook')}</a>
                </div>
            </div>
            <div className={"introduction__scrollProjects d-flex justify-items-center mt-4"}>
                <div className="introduction__scrollProjects__longArrow"></div>
            </div>
        </div>
    )
}
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
        <div className={"introduction pt-25 px-15 pt-lg-16"}>
            <div className={"d-md-flex"}>
                <div className={"introduction__name pl-md-3 d-md-flex items-center"}>
                    <div className={"introduction__name__div"}>
                        <span>Hello</span>
                        <Emoji label="sheep" symbol="👋"/>
                        <span className={"d-block"}>I´m Everton</span>
                    </div>
                </div>
                <hr className={"introduction__verticalLine d-none d-md-block mx-md-3"}/>
                <div className={"introduction__aboutMe mt-1"}>
                    <span className={"d-flex pr-3"}>A Portugal based frontend developer, working and living in OPorto. I love to work on anything code, from designing simple HTML pages to solving complex problems.</span>
                    <div className={"introduction__aboutMe__socials mt-2"}>
                        <a href={"/"}
                           className={"introduction__aboutMe__socials__twitter"}>{i18next.t('ns1:navbar.twitter')}</a>
                        <a href={"/"}
                           className={"introduction__aboutMe__socials__linkedin"}>{i18next.t('ns1:navbar.linkedin')}</a>
                        <a href={"/"}
                           className={"introduction__aboutMe__socials__facebook"}>{i18next.t('ns1:navbar.facebook')}</a>
                    </div>
                </div>
            </div>

            <div className={"introduction__scrollProjects d-block justify-center items-start"}>
                <div className="introduction__scrollProjects__longArrow"></div>
            </div>

        </div>
    )
}
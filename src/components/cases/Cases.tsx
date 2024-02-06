import React, {useState} from "react";
import "./Cases.scss";
import {CaseCard} from "../caseCard/CaseCard";
import {TechProps} from "../../interfaces/caseStudies";
import {CardProps} from "../../interfaces/project";

export const Cases = () => {
    const [state, setState] = useState<{currentActiveSlide: number | null}>({currentActiveSlide: null});
    const filters: TechProps[] = [
        {
            id: 100,
            value: "React"
        },
        {
            id: 101,
            value: "Next.js"
        },
        {
            id: 102,
            value: "Typescript"
        },
        {
            id: 103,
            value: "Nest.js"
        },
        {
            id: 104,
            value: "PostgreSQL"
        },
        {
            id: 105,
            value: "Tailwind CSS"
        },
        {
            id: 106,
            value: "Figma"
        },
        {
            id: 107,
            value: "Cypress"
        },
        {
            id: 108,
            value: "Storybook"
        },
        {
            id: 109,
            value: "Git"
        }
    ]
    const cards: CardProps[] = [
        {
            id: 1000,
            name: "Project X",
            title: "Title name of project comes here",
            techs: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwind CSS", "Figma", "Cypress", "Storybook", "Git"],
            colors: {primary: "#EDF0F9", secondary: "#D9DFF2"}
        },
        {
            id: 1001,
            name: "Project X",
            title: "Title name of project comes here",
            techs: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwind CSS", "Figma", "Cypress", "Storybook", "Git"],
            colors: {primary: "#EAEAEA", secondary: "#E3E3E3"}
        },
        {
            id: 1002,
            name: "Project X",
            title: "Design of a mobile app develops ",
            techs: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwind CSS", "Figma", "Cypress", "Storybook", "Git"],
            colors: {primary: "#E2FFE4", secondary: "#BDF1C2"}
        },
        {
            id: 1003,
            name: "Project X",
            title: "Design of a mobile app develops ",
            techs: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwind CSS", "Figma", "Cypress", "Storybook", "Git"],
            colors: {primary: "#FEE0D0", secondary: "#F6C7AC"}
        },
    ]
    const changeSlide = (props: TechProps) => {
        setState({
            currentActiveSlide: props.id !== state.currentActiveSlide ? props.id : null
        });
    }
    return (
        <div className={"cases p-35 px-15 p-md-5 pt-lg-16 p-lg-6"}>
            <div className={"cases__title"}>
                <span className={"d-block"}>Peek into my</span>
                <span className={"d-block"}>latest projects</span>
            </div>
            <div className={"cases__filter py-15"}>
                {filters.map((tech: TechProps, key: number) => <span
                    className={state.currentActiveSlide === tech.id ? 'active' : ''} key={key}
                    onClick={() => changeSlide(tech)}>{tech.value}</span>)}
            </div>
            <div className={"cases__cards d-md-flex justify-md-space-between pt-2"}>
                {cards.map((card: CardProps) => <CaseCard key={card.id} card={card}/>)}
            </div>

        </div>
    )
}
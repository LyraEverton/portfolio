import React, {useState} from "react";
import "./Cases.scss";

export const Cases = () => {
    const [state, setState] = useState({currentActiveSlide: null});
    const filters = [
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
    const changeSlide = (props: any) => {
        console.log(props)
        setState({
            currentActiveSlide: props.id !== state.currentActiveSlide ? props.id : null
        });
    }
    return (
        <div className={"cases pt-25 px-15 pt-lg-16"}>
            <div className={"cases__title"}>
                <span className={"d-block"}>Peek into my</span>
                <span className={"d-block"}>latest projects</span>
            </div>
            <div className={"cases__filter"}>
                {filters.map((tech: any, key: any) => <span
                    className={state.currentActiveSlide === tech.id ? 'active' : ''} key={key}
                    onClick={() => changeSlide(tech)}>{tech.value}</span>)}
            </div>

        </div>
    )
}
import React from 'react';
import {render, screen} from '@testing-library/react';
import {CaseCard} from "./CaseCard";
import {CardProps} from "../../interfaces/project";

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
test('renders learn react link', () => {
    render(<>{cards.map((card: any) => <CaseCard key={card.id} card={card}/>)}</>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

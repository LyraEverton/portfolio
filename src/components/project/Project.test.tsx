import React from 'react';
import {render, screen} from '@testing-library/react';
import {Project} from "./Project";
import {ProjectProps} from "../../interfaces/project";

const projects: ProjectProps[] = [
    {
        id: 1000,
        name: "Project X",
        title: "Title name of project comes here",
        description: "Description project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        techs: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwind CSS", "Figma", "Cypress", "Storybook", "Git"],
        size: "large",
        colors: {primary: "#EDF0F9", secondary: "#D9DFF2"}
    },
    {
        id: 1001,
        name: "Project X",
        title: "Title name of project comes here",
        description: "Description project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        techs: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwind CSS", "Figma", "Cypress", "Storybook", "Git"],
        size: "large",
        colors: {primary: "#EAEAEA", secondary: "#E3E3E3"}
    },
    {
        id: 1002,
        name: "Project X",
        title: "Design of a mobile app develops ",
        description: "Description project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        techs: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwind CSS", "Figma", "Cypress", "Storybook", "Git"],
        size: "smaller",
        colors: {primary: "#E2FFE4", secondary: "#BDF1C2"}
    },
    {
        id: 1003,
        name: "Project X",
        title: "Design of a mobile app develops ",
        description: "Description project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        techs: ["React", "Next.js", "Typescript", "Nest.js", "PostgreSQL", "Tailwind CSS", "Figma", "Cypress", "Storybook", "Git"],
        size: "smaller",
        colors: {primary: "#FEE0D0", secondary: "#F6C7AC"}
    },
]


test('renders learn react link', () => {
    render(<>{projects.map((project: ProjectProps) => <Project key={project.id} project={project}/>)}</>);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

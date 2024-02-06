import "./LatestProjects.scss";
import {Project} from "../project/Project";
import {forwardRef, useImperativeHandle, useRef} from "react";
import i18next from "i18next";
import {ProjectProps} from "../../interfaces/project";


export const LatestProjects = forwardRef((props: any, ref) => {
    const projects: ProjectProps[] = [
        {
            id: 1000,
            name: "Project X",
            title: "Title name of project comes here",
            description: "Description project. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
            techs: ["React", "Next.js", "Typescript", "Nest.js"],
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

    const refScroll = useRef<null | HTMLDivElement>(null);
    useImperativeHandle(ref, () => ({

        handleClick() {
            refScroll.current?.scrollIntoView({behavior: "smooth"});
        }
    }));
    return (
        <div ref={refScroll} className={"latestProjects"}>
            <div className={"latestProjects__content py-35 px-15 p-md-5 p-lg-6"}>
                <div
                    className={"latestProjects__content__title d-block d-md-flex justify-md-space-between items-md-center pb-1 pb-md-25"}>
                    {i18next.t('ns1:latestProjects.latestProjects')}
                    <button className={"latestProjects__content__button items-center d-none d-md-flex"}>
                        {i18next.t('ns1:latestProjects.checkAllProjects')}
                        <span className={"latestProjects__content__button__longArrow"}></span>
                    </button>
                </div>
                <div className={"latestProjects__content__cards d-flex justify-space-between"}>
                    {projects.map((project: ProjectProps) => <Project key={project.id} project={project} />)}
                </div>
                <button className={"latestProjects__content__button mt-1 items-center d-flex d-md-none"}>
                    {i18next.t('ns1:latestProjects.checkAllProjects')}
                    <span className={"latestProjects__content__button__longArrow"}></span>
                </button>
            </div>
        </div>

    );
});

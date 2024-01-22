import "./Project.scss";
import styled from "@emotion/styled";
import i18next from "i18next";

export const Project = (props: any) => {
    const size = props.project.size;
    const StyledProject = styled('div')`
      background: ${props.project.colors.primary};

      &:before {
        background: ${props.project.colors.secondary};
      }

    ,
    &: after {
      background: ${props.project.colors.secondary};
    },
    `

    if (size === "large") {
        return (
            <div className={"project mb-1 mb-md-25"}>
                <StyledProject className={"project__card largeCard d-lg-flex"}>
                    <div className={"project__content p-2 d-lg-flex"}>
                        <div className={"project__title p-1"}>
                            {props.project.title}
                        </div>
                        <div className={"project__techs p-1"}>
                            {props.project.techs.map((value: any, key: number) => <span key={key}>{value}</span>)}
                        </div>
                        <div className={"project__description p-1"}>
                            {props.project.description}
                        </div>
                        <div className={"project__viewMore d-flex items-center p-1"}>
                            <span>{i18next.t('ns1:latestProjects.project.readCaseStudy')}</span>
                            <span className={"project__viewMore__longArrow"}></span>
                        </div>
                    </div>
                </StyledProject>
            </div>
        );
    } else {
        return (
            <div className={"project smallerProject mb-1 mb-md-25 d-none d-md-block"}>
                <StyledProject className={"project__card smallerCard"}>
                </StyledProject>
                <div className={"project__title pt-1 pt-md-2"}>
                    {props.project.title}
                </div>
                <div className={"project__description pt-md-2"}>
                    {props.project.description}
                </div>
                <div className={"project__viewMore d-flex items-center pt-2"}>
                    <span>Read case study</span>
                    <span className={"project__viewMore__longArrow"}></span>
                </div>
            </div>
        );
    }
}
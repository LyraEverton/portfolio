import styled from "@emotion/styled";
import "./CaseCard.scss";
import {CardsProps} from "../../interfaces/project";

export const CaseCard = (props: CardsProps) => {
    const StyledProject = styled('div')`
      background: ${props.card.colors.primary};

      &:before {
        background: ${props.card.colors.secondary};
      }
    ,
    &: after {
      background: ${props.card.colors.secondary};
    },
    `
    return (
        <div className={"card mb-1 mb-md-25"}>
            <StyledProject className={"card__square d-flex"}>
            </StyledProject>
            <div className={"card__title pt-1 pt-md-2"}>
                {props.card.title}
            </div>
            <div className={"card__viewMore d-flex items-center pt-1 mb-3"}>
                <span>Read case study</span>
                <span className={"project__viewMore__longArrow"}></span>
            </div>
        </div>
    );
}
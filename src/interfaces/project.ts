

export interface CardsProps {
    card: CardProps
}

export interface CardProps {
    id: number,
    name: string,
    title: string,
    colors: CardColorsProps,
    techs: string[]
}

export interface ProjectsProps {
    project: ProjectProps
}

export interface ProjectProps {
    id: number,
    name: string,
    title: string,
    description: string,
    size: string,
    colors: CardColorsProps,
    techs: string[]
}

interface CardColorsProps {
    primary: string,
    secondary: string
}

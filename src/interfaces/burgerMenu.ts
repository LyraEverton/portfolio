export interface BurgerMenuInterface {
    isOpen?: boolean,
    onClick?: () => void;
}
export interface LinearConfigInterface {
    duration: number
}
export interface TopRectInterface {
    next: string,
    isOpen: LinearConfigInterface
}
interface test2 {
    transform: string,
    config: LinearConfigInterface | any
}
export interface Next {
    next: { transform: string, config: LinearConfigInterface | any};
}
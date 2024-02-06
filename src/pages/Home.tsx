import {Intro} from "../components/intro/Intro";
import {LatestProjects} from "../components/latestProjects/LatestProjects";
import {Footer} from "../components/footer/Footer";
import React, {useRef} from "react";

export const Home = () => {
    const ref = useRef<any>();
    return (<>
        <Intro handleRefClick={() => ref?.current.handleClick()}/>
        <LatestProjects ref={ref}/>
        <Footer/>
    </>);
}


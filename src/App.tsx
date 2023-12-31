import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {Home} from "./pages/Home";
import {Cases} from "./pages/Cases";
import {About} from "./pages/About";
import {GetInTouch} from "./pages/GetInTouch";
import {Footer} from "./components/footer/Footer";
import './i18n';
import {Intro} from "./components/intro/Intro";
import {LatestProjects} from "./components/latestProjects/LatestProjects";

function App() {
    return (
        <div className="App">
            <div className={"container"}>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}></Route>
                        <Route path={"/cases"} element={<Cases/>}></Route>
                        <Route path={"/about"} element={<About/>}></Route>
                        <Route path={"/get-in-touch"} element={<GetInTouch/>}></Route>
                    </Routes>
                </Router>
                <Intro/>
                <LatestProjects/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;

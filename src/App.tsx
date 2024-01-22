import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/navbar/Navbar";
import {Home} from "./pages/Home";
import {CaseStudies} from "./pages/CaseStudies";
import {About} from "./pages/About";
import {GetInTouch} from "./pages/GetInTouch";
import './i18n';

function App() {

    return (
        <div className="App">
            <div className={"container"}>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path={"/"} element={<Home/>}></Route>
                        <Route path={"/cases"} element={<CaseStudies/>}></Route>
                        <Route path={"/about"} element={<About/>}></Route>
                        <Route path={"/get-in-touch"} element={<GetInTouch/>}></Route>
                    </Routes>
                </Router>

            </div>
        </div>
    );
}

export default App;

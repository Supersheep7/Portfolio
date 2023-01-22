import React from 'react';
import Landing from "./Landing";
import Repo from "./Repo";
import Splash from "./Splash"
import Wordpress from "./Wordpress";
import Etc from "./Etc";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes(props) { 
    
    const location = useLocation()
        return (
        <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Splash whatPage={props.whatPage} previousPage={props.previousPage} goHandleClick={props.goHandleClick}/>} key="splash"/>
                    <Route path="/0" element={<Landing whatPage={props.whatPage} previousPage={props.previousPage} goHandleClick={props.goHandleClick}/>} key="landing"/>
                    <Route path="/1" element={<Repo  whatPage={props.whatPage} previousPage={props.previousPage} goHandleClick={props.goHandleClick}/>} key="repo"/>
                    <Route path="/2" element={<Wordpress whatPage={props.whatPage} previousPage={props.previousPage} goHandleClick={props.goHandleClick} key="wordpress"/>}/>
                    <Route path="/3" element={<Etc whatPage={props.whatPage} previousPage={props.previousPage} goHandleClick={props.goHandleClick}/>} key="etc"/>
                </Routes>
        </AnimatePresence>
        )
}

export default AnimatedRoutes
import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import Projects from "../components/Projects"
const Routes = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route  path="/about">
                    <About/>
                </Route>
                <Route path="/projects">
                    <Projects/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route>
                    <h1>Page not found</h1>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes

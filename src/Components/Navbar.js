import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Route, Link, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Classes from './Classes';
import Pics from './Pics';
import FAQ from './FAQ';
import Contact from './Contact';

function NavbarComponent(props) {
    return (
        <div className="Navbar">
            <div className="navbar-list-styling">
                {/* insert logo or artwork for FBA name */}
                <div className="navbarDiv">
                    <ul className="navbar-list list-ustyled">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/classes">Classes</Link></li>
                        <li><Link to="/pics">Pictures</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className="switch-route">
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route exact path="/about"><About /></Route>
                        <Route exact path="/classes"><Classes /></Route>
                        <Route exact path="/pics"><Pics /></Route>
                        <Route exact path="/faq"><FAQ /></Route>
                        <Route exact path="/contact"><Contact /></Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}
export default NavbarComponent;
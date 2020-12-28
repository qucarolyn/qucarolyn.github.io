import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect} from "react-router-dom";

//pages
import HomePage from './pages/home.js';
import AboutPage from './pages/about.js';
import ResumePage from './pages/resume.js';
import PortfolioPage from './pages/portfolio.js';
import NotFound from './pages/not_found.js';


//used for multipage 
class App extends Component {
  render() {
    return(
      <div className= 'App' >
        <nav className='navigation'>
    	  	<ul>
        		<li><a href="/"> Home</a></li>
			      <li><a href="/about">About Me</a></li>
			      <li><a href="/portfolio">Portfolio</a></li>
			      <li><a href="/resume">Resume</a></li>
			      <li><a href="/contact">Contact</a></li>
    		  </ul>
		    </nav>
      <Router>
        <Switch>
          <Route exact path= "/" component = {HomePage} />
          <Route exact path= "/about" component = {AboutPage} />
          <Route exact path= "/resume" component = {ResumePage} />
          <Route exact path= "/portfolio" component = {PortfolioPage} />
          <Route path="/404" component={NotFound} />
                    <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
    )

  }
}

export default App;

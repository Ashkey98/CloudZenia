import React, {Component} from 'react';
class Header extends Component {
    render() {
	    return (<header>
        <div className="container d-flex align-items-center">
        
         <h1 className="logo me-auto"><a href="index.html">CloudZenia</a></h1> 
        
        <nav id="navbar" className="navbar">
         <ul>
           <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
           <li><a className="nav-link scrollto" href="#services">Services</a></li>
           <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
           <li><a className="nav-link scrollto" href="#team">Team</a></li>
           
           
           <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
           <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
         </ul>
         <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        
        </div>
        </header>
        )
    }
}

export default Header;

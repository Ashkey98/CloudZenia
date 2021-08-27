import React, {Component,Suspense} from 'react';
import { Canvas } from '@react-three/fiber'
import House from './House';
import { Loading } from './House';
import  { CameraControls } from './House';



class Hero extends Component {
  render(){
    return(
      
<section id="hero" className="d-flex align-items-center">

<div className="container">

<div className="container d-flex align-items-center">


<div className="zenia-logo"><a href="index.html"><img src="assets/img/logo/cloudzenia.png" style={{  width: "141px"
}} alt=""/> </a></div> 

<nav id="navbar" className="navbar" style={{display: "flex",
    width : "100%" ,
    justifyContent:" flex-end"}}>
         <ul>

           <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
           <li><a className="nav-link scrollto active" href="#hero">About Us</a></li>
           <li><a className="nav-link scrollto" href="#services">Services</a></li>
           <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
           <li><a className="nav-link scrollto" href="#team">Team</a></li>
           
           
           <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
         </ul>
         <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        </div>
<div>
 <div className="col-lg-10 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
   <h1>Take Your Buisness To The Clouds</h1>
   
</div>
<div>
<Canvas camera={{ position: [10, 6, 10], fov: 80 }}>
      <CameraControls />

      <ambientLight intensity={0.5} />
      <Suspense fallback={<Loading />}>
        <House />
      </Suspense>
    </Canvas>
</div>
</div>
</div>

</section>
    )
  }
}

export default Hero;
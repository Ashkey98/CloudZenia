import React, {Component,Suspense} from 'react';
import { Canvas } from '@react-three/fiber'
import House from './House';
import { Loading, CameraControls } from './House';
import VideoRenderer from './VideoRenderer';

import Cloud  from './Cloud';
import { CloudLoading, CloudCameraControls } from './Cloud'



class Hero extends Component {
  render(){
    return(
      
<section style={{ background: 'linear-gradient(120deg, #42a4f5, #e8f5ff)'}} id="hero" className="d-flex align-items-center">

<div className="container" style={{    marginTop:"34px"
}} >

<div className="container d-flex align-items-center" style={{ marginBottom:' 16%',marginLeft: '7%'}}>


<div className="zenia-logo" 
    style={{ position: "relative",
    right: "165px"}} >
  <a href="index.html"><img src="assets/img/logo/cloudzenia.png" 
      style={{  width: "141px"
    }} alt=""/> 
  </a>
</div> 

<nav id="navbar" className="navbar" style={{display: "flex",
    width : "100%" ,
    justifyContent:" flex-end"}}>
         <ul>

           <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
           <li><a className="nav-link scrollto" href="#services">Services</a></li>
           <li><a className="nav-link   scrollto" href="#portfolio">Portfolio</a></li>
           <li><a className="nav-link scrollto" href="#team">Team</a></li>
           <li><a className="nav-link scrollto" href="#about">About</a></li>
           
           
           <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
         </ul>
         <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        </div>
<div>
  <div style={{display:"flex" , justifyContent:"space-evenly"}}>
 <div className="col-lg-10 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" style={{
   position: 'relative',
   right: '30%',
   top: '55px',
 }} >
  <h1 className="h1-mktg color-text-white mb-3 position-relative z-2">TAKE YOUR <span style={{fontSize:"7rem"}} >BUSINESS</span> <br/>TO THE <span style={{fontSize:"8rem"}} >CLOUDS</span></h1>
</div>
{/* <div style={{position: "relative",left: "990px" ,width:"100%",height:"100%"}}>
  <div>
<Canvas  camera={{ position: [10, 6, 10], fov: 80 }} className="cloud" style={{
        position: 'relative',
        width: '70vw',
        height: '55vh',
        overflow: 'hidden',
        top: '100px',    
  }}  height="300">
      <CloudCameraControls />

      <ambientLight intensity={1} />
      <spotLight position={[52, 52, 0]} intensity={10} />
      <spotLight position={[10, 8, -10]} intensity={50} />
      <spotLight position={[10, 10, -5]} intensity={10} />
      <Suspense fallback={CloudLoading}>
        <Cloud />
        <Cloud scale={0.8} position={[5,0.9,-0.1]} rotation={[0,5-9,0]}/>
        
      </Suspense>
    </Canvas>
    </div>
    <div>
<Canvas camera={{ position: [10, 4, 10], fov: 80 }}  style={{
      position: 'relative',
      width: '70vw',
      height: '42vh',
      marginTop: '-160px',
      overflow: 'hidden',
      bottom: '50px',
    }}>
      <CameraControls />

      <ambientLight intensity={0.5} />
      <Suspense fallback={<Loading />}>
        <House />
      </Suspense>
    </Canvas>
    </div>
   
    </div> */}
    <div style={{position: 'absolute',
    width: '32%',
    height: '60%',
    left: '65%',
    marginTop: '7%'}}>
    <VideoRenderer />

    </div>

</div>
</div>
</div>

</section>
    )
  }
}

export default Hero;
import React  from 'react';
import Hero from './components/Hero';
import VideoRenderer from './components/VideoRenderer';
import CloudLogos from './components/CloudLogos';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team'
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import AboutUS from './components/AboutUS';



function App() {
  return (
    <div>
    {/* <Header /> */}
    
    <Hero />
    <VideoRenderer />
    <CloudLogos />
    <AboutUS />
    <Portfolio />
    <Services />
    <Team />
    <Blog />
    <Reviews />
    <Contact />
  <Footer />
    </div>
    
  );
}
export default App;
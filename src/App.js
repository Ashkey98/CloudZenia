import React from 'react';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoRenderer from './components/VideoRenderer';
import CloudLogos from './components/CloudLogos';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team'
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
    <Header />
    <Hero />
    <VideoRenderer />
    <CloudLogos />
    <Portfolio />
    <Services />
    <Team />
    <Blog />
    <Contact />
  <Footer />
    </div>
    
  );
}
export default App;
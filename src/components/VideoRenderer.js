import React, {Component} from 'react';
import Sample from './videos/sample.mp4'
class VideoRenderer extends Component {
  render(){
    return(
      <section className="video-section">
  <div className="wrapper">

  <video autoPlay loop muted style={{ width: "100%" , height: "100%" }}>
    <source src={Sample} type="video/mp4" loop onMouseOver ="this.play()" onM ="this.pause()" /> 
  </video>
</div>
</section>
    )
  }
}

export default VideoRenderer;
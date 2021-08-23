import React, {Component} from 'react';
import Sample from './videos/sample.mp4'
class VideoRenderer extends Component {
  render(){
    return(
      <section className="video-section">
  <div className="wrapper">

  <video autoPlay loop muted>
    <source src={Sample} type="video/mp4" loop onmouseover="this.play()" onmouseout="this.pause()" /> 
  </video>
</div>
</section>
    )
  }
}

export default VideoRenderer;
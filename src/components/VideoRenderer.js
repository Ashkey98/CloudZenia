import React, {Component} from 'react';
import Sample from './videos/sample.mp4'
class VideoRenderer extends Component {
  render(){
    return(
      <section className="video-section">
  <div className="wrapper">

  <video controls  loop  style={{ width: "100%" , height: "33%%" }}>
    <source src={Sample} type="video/mp4" loop  /> 
  </video>
</div>
</section>
    )
  }
}

export default VideoRenderer;
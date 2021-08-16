import React, {Component} from 'react';
class VideoRenderer extends Component {
  render(){
    return(
      <section className="video-section">
  <div className="wrapper">

  <video src="./assets/videos/sample.mp4" loop onmouseover="this.play()" onmouseout="this.pause()"></video>
</div>
</section>
    )
  }
}

export default VideoRenderer;
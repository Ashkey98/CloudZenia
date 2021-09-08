import React, {Component} from 'react';
import './Review.css'

class Reviews extends Component {
  render () {
    return(
      <section id="blog" className="blog">
<div className="container" data-aos="fade-up">
  <div className="section-title">
  <h2>Reviews</h2>
  <div className="container" data-aos="fade-up"  data-aos-delay="300">
  <div className="section-title">

  <div className = "card-wrapper">
  <div className="item-4">

      <article>
      <span>Alan Turing</span>
        <h1>"Highly recommend CloudZenia if you need a job done reliably and in a timely manner.
        He's reliable, work is fantastic, and offered great suggestions to our infrastructure needs.
        Look forward to working him with again in the future!" </h1>
      </article>
      <p className="read-more-btn">Read More...</p>
  </div>


  <div className="item-4">

      <article>
      <span>Pavan V. | Co-Founder Manas.ai</span>

        <h1>"Clouzenia is THE perfect Devops company to work with. their work is faultless. their skills in building an application architecture for scale & reliability continue to set a new standard. Always has the know-how to implement challenging requirements and get the work done in time.
           It's been a pleasure to work with Ashwini & the team would continue for a very long time. "</h1>
      </article>
  </div>


  <div className="item-4">
      <article>
      <span>Iyobosa E. | Assistant Vice President </span>

        <h1>I hired Ashwin K. to help with AWS setup and arch. He and his team were very responsive and executed as directed.
           I still keep him in close proximity for any other AWS-related cloud ops and setup. Great fellow to work with.</h1>
      </article>
  </div>

  <div className="item-4">

      <article>
      <span>Daniel" | Founder | v500system.com</span>

        <h1>"From the very beginning, They understood the scope of the work as he has done similar work previously. The whole scope of the project has been delivered successfully, within budget, and on time.
            Thank you, Ashwini and Team,</h1>
      </article>
  </div>
  </div>

</div>
</div>
</div>
</div>


</section>
    )
  }
}

export default Reviews;

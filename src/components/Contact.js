import React, {Component} from 'react';
class Contact extends Component {
  render(){
    return(
      <section id="contact" className="contact">
<div className="container" data-aos="fade-up">

 <div className="section-title">
   <h2>Contact</h2>
   
 </div>

 <div className="row">

    <div className="col-lg-5 d-flex align-items-stretch">
    

       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30243.549022174597!2d73.76274740949772!3d18.644078353137537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c02954e8cb%3A0x525d708de1d526f2!2sAkurdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1628220614317!5m2!1sen!2sin"
         style={{border:0 ,width:"100%" ,height:"100%"}} allowFullScreen="" loading="lazy"></iframe>

   </div>

   <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
     <form action="forms/contact.php" method="post" role="form" className="php-email-form">
       <div className="row">
         <div className="form-group col-md-6">
           <label for="name">Your Name</label>
           <input type="text" name="name" className="form-control" id="name" required />
     </div>
         <div className="form-group col-md-6">
           <label for="name">Your Email</label>
           <input type="email" className="form-control" name="email" id="email" required />
  </div>
       </div>
       <div className="form-group">
         <label for="name">Subject</label>
         <input type="text" className="form-control" name="subject" id="subject" required/>
       </div>
       <div className="form-group">
         <label for="name">Message</label>
         <textarea className="form-control" name="message" rows="10" required></textarea>
       </div>
       <div className="my-3">
         <div className="loading">Loading</div>
         <div className="error-message"></div>
         <div className="sent-message">Your message has been sent. Thank you!</div>
       </div>
       <div className="text-center"><button type="submit">Send Message</button></div>
     </form>
   </div>

 </div>

</div>
</section>
    )
  }
}

export default Contact;

import React, {Component} from 'react';
import { AiFillCodeSandboxSquare,AiOutlineCluster } from "react-icons/ai";
import { SiAzuredevops,SiElectron } from "react-icons/si";
import { BiCloud } from "react-icons/bi";
import { IoConstruct } from "react-icons/io5";
import { IoIosApps } from "react-icons/io";

class Services extends Component {
  render(){
    return(
      <section id="services" className="services section-bg">
<div className="container" data-aos="fade-up">

 <div className="section-title">
   <h2>Services</h2>
   <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
 </div>

 <div >
   <div className="row">
   <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
     <div className="icon-box">
       <div className="icon"><AiFillCodeSandboxSquare  size="5rem" /></div>
       <h4><a href="">Infrastructure as Code</a></h4>
       <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
     </div>
   </div>

   <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
     <div className="icon-box">
       <div className="icon"><SiAzuredevops size="5rem"/></div>
       <h4><a href="">Devops as Service</a></h4>
       <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
     </div>
   </div>

   <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
     <div className="icon-box">
       <div className="icon"><IoConstruct size="5rem"/></div>
       <h4><a href="">Automations</a></h4>
       <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
     </div>
   </div>

   <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
     <div className="icon-box">
       <div className="icon"><BiCloud size="5rem"/></div>
       <h4><a href="">Cloud Migrations</a></h4>
       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
     </div>
   </div>

   </div>



    <div className="row" style={{ marginTop: "54px"}}>

   <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
     <div className="icon-box">
       <div className="icon"><IoIosApps size="5rem" /></div>
       <h4><a href="">Cloud Native Application Development</a></h4>
       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
     </div>
   </div>

   <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
     <div className="icon-box">
       <div className="icon"><SiElectron size="5rem"/></div>
       <h4><a href="">Consultancy and  Cost Optimizations</a></h4>
       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
     </div>
   </div>

   <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
     <div className="icon-box">
       <div className="icon"><AiOutlineCluster size="5rem"/></div>
       <h4><a href="">Data Science</a></h4>
       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
     </div>

     </div>

   </div>
  

 </div>

</div>
</section>
    )
  }
}

export default Services;

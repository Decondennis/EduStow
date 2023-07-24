import React from "react";
import { NavLink } from "react-router-dom";

export default function TechClub(){
    return (

<div>		
        

        <div className="container-fluid bg-primary py-5 bg-hero" >
       <div className="container py-5">
           <div className="row justify-content-start">
               <div className="col-lg-8 text-center text-lg-start">
                   <h1 className="display-1 text-dark">Tech Club</h1>
                   <div className="pt-2">
                       {/* <a href="" className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Home</a>
                       <a href="" className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Blog Detail</a> */}
                   </div>
               </div>
           </div>
       </div>
   </div>
   <div className="container-fluid py-6">
       <div className="container py-5">
           <div className="row g-3">
               <div className="col-lg-8">

                   <div className="mb-5">
                       <img className="img-fluid w-100 mb-5" src="img/blog-2.jpg" alt="" />
                       <h1 className="mb-4">THE NEED FOR TECH CLUB</h1>
                       <p>The school is undoubtedly the place of learning and empowerment for students. However,
                         not all the training and lessons that a student need for life are acquired through classNameroom 
                         lessons. Several of them, are fetched from establishments like ours, the Techclub.</p>


                        Like every other club in a school, the Techclub has a purpose, which is to create science 
                        awareness and raise Engineers, Technicians, and Scientists from a young age.

                        <p>What distinguishes a developed nation from an undeveloped one is its level of scientific advancement. 
                       <br></br> A study of developed nations reveals the priority they assign to science and technology. Nations like
                        China and the United States of America start scientific education at an early age for students. In 1982,
                         Professor Okebukola established the first secondary school JETS club in Nigeria to expose teenagers to 
                         science and technology education at a young age</p>
                                           
                   </div>

                   <div className="mb-5">
                       <div className="d-flex mb-4">
                           <div className="ps-3">
                               
                               <p>• SATIATES THE HUNGER & CURIOSITY OF TEENAGERS</p>
                               Teenagers are well known for being naturally curious. Participating in Tech club programs satiates their hunger,
                                provides an answer to their questions, and perhaps stirs up more questions than keeps them immersed in the world of science.
                               
                           </div>
                       </div>
                       
                       <div className="d-flex mb-4">
                           <div className="ps-3">
                               <p>• PREPARES STUDENTS FOR FUTURE PRACTICAL SCIENCE ENDEAVOURS.</p>
                               Tech club prepares students for future scientific endeavors. The quizzes and practical experiments all come in handy in the nearest future.
                           </div>
                       </div>
                       
                       
                   </div>

                  
               </div>
   
               <div className="col-lg-4">
                   {/* <div className="mb-5">
                       <div className="input-group">
                           <input type="text" className="form-control p-3" placeholder="Keyword" />
                           <button className="btn btn-primary px-4"><i className="fa fa-search"></i></button>
                       </div>
                   </div> */}
                   

                   <div className="mb-5">
                       <h3 className="mb-4">CREATING A LIFELONG LOVE FOR SCIENCE AND TECHNOLOGY</h3>
                       <div className="d-flex flex-column justify-content-start bg-primary p-4">
                           <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>CREATING A LIFELONG LOVE FOR SCIENCE AND TECHNOLOGY</a>
                           <a className="h5 mb-4" >Getting exposed to science and technology at a tender age through Tech club is beneficial,
 as it helps in destroying the fear of calculations and science and replacing it with love for them.</a>
                           <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>PROVIDING BASIC SCIENCE EDUCATION TO TEENAGERS</a>
                           <a className="h5 mb-4" >The primary purpose for the existence of Tech club is to provide elementary
 science education to teenagers. So that when they get to senior secondary school,
 the terms won’t be entirely strange and new to them.</a>
                           <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>BROADENING THE MIND</a>
                           <a className="h5 mb-4" >One of the characteristics of teenagers is their big imagination. Getting exposed to science will broaden their mind.</a>
                           
                       </div>
                   </div>
               

                   <div className="mb-5">
                       <img src="img/blog-1.jpg" alt="" className="img-fluid" />
                   </div>

                   
               </div>
           </div>
       </div>
   </div>

   <div className="container-fluid bg-primary bg-call-to-action py-5" >
       <div className="container py-5">
           <div className="row g-0 justify-content-start">
               <div className="col-lg-6">
                   <h1 className="display-5 mb-4">CREATING A LIFELONG LOVE FOR SCIENCE AND TECHNOLOGY</h1>
                   <p className="fs-4 fw-normal">Now is the time to introduce children to a discipline that
                    they all too often never get the chance to form an opinion about.</p>
                    <NavLink to="/contact"><a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Contact Us</a></NavLink>
               </div>
           </div>
       </div>
   </div>
   




</div>	
     )


}
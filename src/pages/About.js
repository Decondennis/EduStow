import React from "react";
import about1 from '../img/about-1.jpg';
import about2 from '../img/about-2.jpg';
import { NavLink } from "react-router-dom";

export default function About(){

    return (

<div>

    <div className="container-fluid bg-primary py-5 bg-hero" >
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-dark">About Us</h1>
                    <div className="pt-2">
                    <NavLink to="/User"> <a className="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2">Join</a></NavLink>
                        <NavLink to="/login"> <a className="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2">Login</a></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="row gx-0 mb-3 mb-lg-0">
                <div className="col-lg-6 my-lg-5 py-lg-5">
                    <div className="about-start bg-primary p-5">
                        <h1 className="display-5 mb-4">EduStow</h1>
                        <p>	At EduStow, we believe technology is at its most effective when it remains
                             unnoticed So, we design and develop products that are a joy to use, speak the
                              same language and do the heavy lifting behind the scenes. We help you capture,
                               protect and share the data you need, whenever and wherever you need it.
                                Easing the pressure of admin work on your staff across the school.</p>
                                In addition to developing our leading products,we continue to invest
                                     in new products for the future to make the lives
                                 of educators and school administrators easier.
                                 <p>We understand your challenges and can help you with
                                    integrated solutions that work in tandem to minimise data redundancy,
                                     and solutions that can provide crucial student information all in one
                                      place.</p>
                                
                                 <NavLink to="/User"><a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Join Us</a></NavLink>
                    </div>
                </div>
                 <div className="col-lg-6" >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={about1} />
                    </div>
                </div> 
            </div>
            {/* <div className="row gx-0">
                <div className="col-lg-6" >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={about2} ></img>
                    </div>
                </div>
                <div className="col-lg-6 my-lg-5 py-lg-5">
                    <div className="about-end bg-primary p-5">
                        <h1 className="display-5 mb-4">Why Choose EduStow?</h1>
                        <p>EduStow provides all key features required for the effective administration of any K12 institution: Nursery, Kindergarten, Elementary, Secondary or High school. By using EduStow, you can easily implement a state-of-the-art cloud-based platform that offers an affordable solution for the administration of educational institutions of any size.</p>
                        <a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Get A Quote</a>
                    </div>
                </div>
            </div> */}
        </div>
    </div>

    

    <div className="container-fluid bg-primary bg-call-to-action py-5" >
        <div className="container py-5">
            <div className="row g-0 justify-content-start">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-4">Make Your School!</h1>
                    <p className="fs-4 fw-normal">We redefine EdTech to empower schools to succeed
                        Putting students at the heart of everything we do to provide positive technology experiences 
                    <br></br><br></br>EduStow is the most sophisticated and complete solution in
                       the educational industry that inspires student’s success and increases overall
                        efficiency. In addition, our customer service, warranty, updates and improvements
                         at no additional cost are elements that characterize us and sets us apart from the competition.</p>
                         <NavLink to="/contact"><a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Contact Us</a></NavLink>
                </div>
            </div>
        </div>
    </div>

</div>

    )
}
import React from "react";
import { NavLink } from "react-router-dom";

export default function Pricing(){

    return (

<div>

    <div className="container-fluid bg-primary py-5 bg-hero" >
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-dark">Pricing</h1>
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
            <div className="text-center mx-auto mb-5" >
                <h1 className="display-5">Pricing</h1>
                <hr className="w-25 mx-auto text-primary" />
            </div>
            <div className="row g-3">
            <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                        <div><i className="fa fa-2x fa-city"></i></div>
                        </div>
                        <h3 className="mt-5">Registeration fee</h3>
                        <h4>N40,000</h4>
                        <h4><span>One Time Payment</span></h4>
                        <ul>
                            <li> Set-up fee</li>
                            <li>Domain name purchase</li>
                            <li> Serverpilot fee</li>
                            <li>Cloud hosting fee</li>
                        </ul>
                        <NavLink to="/User"><a className="btn shadow-none text-secondary" href="">Get Started<i className="bi bi-arrow-right ms-1"></i></a></NavLink>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                        <div><i className="fa fa-2x fa-city"></i></div>
                        </div>
                        <h3 className="mt-5">Cost for each student</h3>
                        <h4>N1,000</h4>
                        <h4><span>Per Term</span></h4>
                        <ul>
                        <li> Maintance fee</li>
                        <li> Domain name fee</li>
                        <li>Serverpilot fee</li>
                        <li>Cloud hosting fee</li>
                        </ul>
                        <NavLink to="/User"><a className="btn shadow-none text-secondary" href="">Get Started<i className="bi bi-arrow-right ms-1"></i></a></NavLink>
                    </div>
                </div>
                
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                        <div><i className="fa fa-2x fa-city"></i></div>
                        </div>
                        <h3 className="mt-5">Perpetual license</h3>
                        <h4>N6,000,000</h4>
                        <h4><span>One Time Payment</span></h4>
                        <ul> 
                        <li> Set-up - Free</li>
                        <li> Maintance - No</li>
                        <li> Domain name  - No</li>
                        <li> Serverpilot - No</li>
                        </ul>
                        <NavLink to="/User"><a className="btn shadow-none text-secondary" href="">Get Started<i className="bi bi-arrow-right ms-1"></i></a></NavLink>
                    </div>
                </div>
                
            </div>
        </div>
    </div> 

    <div className="container-fluid bg-primary bg-call-to-action py-5" >
        <div className="container py-5">
            <div className="row g-0 justify-content-start">
                <div className="col-lg-6">
                    <h1 className="display-5 mb-4">Do You Have Any Project?</h1>
                    <p className="fs-4 fw-normal">Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat dolor rebum sit ipsum.</p>
                    <NavLink to="/contact"><a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Contact Us</a></NavLink>
                </div>
            </div>
        </div>
    </div>

</div>

    )
}







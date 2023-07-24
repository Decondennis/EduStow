import React from "react";
// import '../css/bootstrap.min.css';
// import '../css/style.css';
import about1 from '../img/about-1.jpg';
import about2 from '../img/about-2.jpg';
import Footer from "./Footer";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export default function Home(){

    return ( 

		
		<body>
		

		<div className="container-fluid bg-primary py-5 bg-hero" > 
			<div className="container py-5">
				<div className="row justify-content-start">
					<div className="col-lg-8 text-center text-lg-start">
						<h1 className="display-1 text-dark">Modern and Complete School Automation Software </h1>
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
                        <h1 className="display-5 mb-4">Welcome To EduStow</h1> 
                        <p>EduStow’s simplifies, stabilizes and streamlines the structure of a school. In addition, our system and all its functionalities will give you a competitive advantage over other educational institutions, improve communication between parents, students, teachers and at the same time allow your institution to project a more avant-garde and competitive image.</p> 
                         
                     </div> 
                 </div> 
                <div className="col-lg-6" >
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={about1}/> 
                    </div>
                 </div>
             </div> 
            <div className="row gx-0">
                <div className="col-lg-6" > 
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src={about2}/>  
                    </div>
                  </div> 
                <div className="col-lg-6 my-lg-5 py-lg-5">
                    <div className="about-end bg-primary p-5">
                        <h1 className="display-5 mb-4">Why Choose Us?</h1>
                        <p>EduStow Suite is the most comprehensive, innovative, and advanced unified software with highly sophisticated cloud-based for effective automation of academic and administrative processes of educational institutions.
In addition, it has powerful, fully integrated modules for academic data management, accounting, finance, billing, human resources, and issuing payroll payments. It is the most sophisticated and complete solution in the educational industry that inspires student’s success and increases overall efficiency. 
In addition, our customer service, warranty, updates and improvements at no additional cost are elements that characterize us and sets us apart from the competition.
</p>
                        
                    </div>
                </div>
                </div>
        </div> 
    </div> 
           





            <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mx-auto mb-5">
                <h1 className="display-5">CORE MODULES</h1>
                <hr className="w-25 mx-auto text-primary" /> 
            </div> 
            <div className="row gy-4 gx-3">
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-city"></i></div>
                        </div>
                        <h3 className="mt-5">State of the art admission form</h3>
                        <a className="btn shadow-none text-secondary" href="">View Detail<i className="bi bi-arrow-right ms-1"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-spray-can"></i></div>
                        </div>
                        <h3 className="mt-5">Fees collection module</h3>
                        <a className="btn shadow-none text-secondary" href="">View Detail<i className="bi bi-arrow-right ms-1"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-eraser"></i></div>
                        </div>
                        <h3 className="mt-5">Flexible examination module</h3>
                        <a className="btn shadow-none text-secondary" href="">View Detail<i className="bi bi-arrow-right ms-1"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-eraser"></i></div>
                        </div>
                        <h3 className="mt-5">One click attendance</h3>
                        <a className="btn shadow-none text-secondary" href="">View Detail<i className="bi bi-arrow-right ms-1"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-spray-can"></i></div>
                        </div>
                        <h3 className="mt-5">Complete HR module with payroll</h3>
                        <a className="btn shadow-none text-secondary" href="">View Detail<i className="bi bi-arrow-right ms-1"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="service-item d-flex flex-column align-items-center justify-content-center text-center p-5 pt-0">
                        <div className="service-icon p-3">
                            <div><i className="fa fa-2x fa-city"></i></div>
                        </div>
                        <h3 className="mt-5">Student history</h3>
                        <a className="btn shadow-none text-secondary" href="">View Detail<i className="bi bi-arrow-right ms-1"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>



			<div className="container-fluid bg-primary bg-call-to-action py-5" >
				<div className="container py-5">
					<div className="row g-0 justify-content-start">
						<div className="col-lg-6">
							<h1 className="display-5 mb-4">Do You Have a School?</h1>
							<p className="fs-4 fw-normal">EduStow has a module for each of the key processes needed in the management of your Educational Institution.</p>
							<NavLink to="/contact"><a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Contact Us</a></NavLink>
						</div>
					</div>
				</div>
			</div>           
      
	</body>	
	

       
    )
}
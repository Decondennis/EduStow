import React from "react";
import '../css/bootstrap.min.css';
import '../css/style.css';
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import logo from '../img/logo.png';

export default function HeaderH(){
    return (

        <div>
<div className="container-fluid bg-primary d-none d-lg-block">
			<div className="container">
				<div className="row">
					<div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
						<div className="d-inline-flex align-items-center">
							<a className="text-dark py-2 pe-3 border-end border-white" href=""><i className="bi bi-telephone text-secondary me-2"></i>+234 0912 100 1933</a>
							<a className="text-dark py-2 px-3" href=""><i className="bi bi-envelope text-secondary me-2"></i>info@edustow.com</a>
						</div>
					</div>
					<div className="col-md-6 text-center text-lg-end">
						<div className="d-inline-flex align-items-center">
							<a className="text-body py-2 px-3 border-end border-white" href="">
								<i className="fab fa-facebook-f text-secondary"></i>
							</a>
							<a className="text-body py-2 px-3 border-end border-white" href="">
								<i className="fab fa-twitter text-secondary"></i>
							</a>
							<a className="text-body py-2 px-3 border-end border-white" href="">
								<i className="fab fa-linkedin-in text-secondary"></i>
							</a>
							<a className="text-body py-2 px-3 border-end border-white" href="">
								<i className="fab fa-instagram text-secondary"></i>
							</a>
							<a className="text-body py-2 ps-3" href="">
								<i className="fab fa-youtube text-secondary"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		 
			<nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm px-5 py-3 py-lg-0">
				<Container>
					<a href="" className="navbar-brand p-0">
					<LinkContainer to="/"><Nav.Link><img className="w-105 h500" src={logo} /></Nav.Link></LinkContainer>
					</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
						<span className="navbar-toggler-icon"></span>
					</button>
					
					<div className="collapse navbar-collapse" id="navbarCollapse">
						<div className="navbar-nav ms-auto py-0 pe-4 border-end border-5 border-primary">
						
							<LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
							<LinkContainer to="/About"><Nav.Link>About</Nav.Link></LinkContainer>
							{/* <div className="nav-item dropdown">
								<a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
								<div className="dropdown-menu m-0">
									<a href="blog.html" className="dropdown-item">Blog Grid</a>
									<a href="detail.html" className="dropdown-item">Blog Detail</a>
									<a href="team.html" className="dropdown-item">The Team</a>
									<a href="testimonial.html" className="dropdown-item">Testimonial</a>
								</div>
							</div> */}
							<LinkContainer to="/Features"><Nav.Link>App. Features</Nav.Link></LinkContainer>
							<LinkContainer to="/Pricing"><Nav.Link>Pricing</Nav.Link></LinkContainer>
							<LinkContainer to="/User"><Nav.Link>Join</Nav.Link></LinkContainer>
							<LinkContainer to="/TechClub"><Nav.Link>Tech Club</Nav.Link></LinkContainer>
							<LinkContainer to="/Contact"><Nav.Link>Contact Us</Nav.Link></LinkContainer>
						</div>	

							<div className="d-none d-lg-flex align-items-center ps-4">
								<i className="fa fa-2x fa-mobile-alt text-secondary me-3"></i>
								<div>
									<h5 className="text-primary mb-1"><small>Call Now</small></h5>
									<h6 className="text-light m-0">+234 0912 100 1933</h6>
								</div>
							</div>
					</div>
				</Container>
			</nav>  

		  
</div>         
        
    )
}
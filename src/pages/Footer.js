import { LinkContainer } from "react-router-bootstrap";
import { Nav, Container, Alert } from "react-bootstrap";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';


export default function Footer() {
	const { register, handleSubmit, formState: { errors }, reset } = useForm();
	const [email, setEmail] = useState('');
	
  
	const [submitting, setSubmitting] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
  
	const onSubmit = async (data) => {
	  setSubmitting(true);
	  try {
		await axios.post('http://localhost:5000/newsletter', data);
		reset();
		setShowAlert(true); 
	  } catch (error) {
		console.error(error);
	  } finally {
		setSubmitting(false);
	  }
	};
  
	useEffect(() => {
	  if (submitting && showAlert) {
		setTimeout(() => {
		  setShowAlert(false);
		}, 9000);
	  }
	}, [submitting, showAlert]);

		
		 
    return (

		
<footer>

        <div className="container-fluid bg-dark bg-footer text-light py-5">
		{showAlert && (
            <Alert variant="success" className="text-center" style={{ width: 'auto', height: 'auto' }}>
              <Alert.Heading>Suscribed successfully!</Alert.Heading>
            </Alert>
          )} 
			<div className="container py-5">
				<div className="row g-5">
					<div className="col-lg-3 col-md-6">
						<h4 className="text-primary">Get In Touch</h4>
						<hr className="w-25 text-secondary mb-4" style={{opacity: 1}} />
						<p className="mb-4">Do you have a school?<br></br>Harness the power of a premium cloud-based school management system</p>
						<p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3"></i>27 Edgerly Cal. CRS. Nig.</p>
						<p className="mb-2"><i className="fa fa-envelope text-primary me-3"></i>info@edustow.com</p>
						<p className="mb-0"><i className="fa fa-phone-alt text-primary me-3"></i>+234 0912 100 1933</p>
					</div>
					<div className="col-lg-3 col-md-6">
						<h4 className="text-primary">Our Services</h4>
						<hr className="w-25 text-secondary mb-4" style={{opacity: 1}} />
						<div className="d-flex flex-column justify-content-start">
							<a className="text-light mb-2" ><i className="fa fa-angle-right me-2"></i>Tech Club</a>
							<a className="text-light mb-2" ><i className="fa fa-angle-right me-2"></i>IT Training</a>
							<a className="text-light mb-2" ><i className="fa fa-angle-right me-2"></i>Kids Can Code</a>
							<a className="text-light mb-2" ><i className="fa fa-angle-right me-2"></i>Web App. Development</a>
							<a className="text-light mb-2" ><i className="fa fa-angle-right me-2"></i>Mobile App. Development</a>
							<a className="text-light" ><i className="fa fa-angle-right me-2"></i>Website And App. management</a>
						</div>
					</div>
					<div className="col-lg-3 col-md-6">
					<Container>
						<h4 className="text-primary">Quick Links</h4>
						<hr className="w-25 text-secondary mb-4" style={{opacity: 1}} />
						<div className="d-flex flex-column justify-content-start">
						<LinkContainer to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
								<LinkContainer to="/About"><Nav.Link>About</Nav.Link></LinkContainer>
								<LinkContainer to="/Features"><Nav.Link>App. Features</Nav.Link></LinkContainer>
								<LinkContainer to="/User"><Nav.Link>Join</Nav.Link></LinkContainer>
								<LinkContainer to="/Contact"><Nav.Link>Contact Us</Nav.Link></LinkContainer>
						</div>
					</Container>
					</div>

					

					<div className="col-lg-3 col-md-6">
						<h4 className="text-primary">Newsletter</h4>
						
						 <hr className="w-25 text-secondary mb-4" style={{opacity: 1}} /> 
						  <form onSubmit={handleSubmit(onSubmit)}>
							<div className="input-group">
								<input type="email"  
                                    name="email"
                                    placeholder="Enter your email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                          message: "Please enter a valid email"
                                    }
                                    })}
                                className="form-control bg-light border-0"/>
                                {errors.email && <p className="errorMsg"style={{ color: "red" }}>{errors.email.message}</p>}
								<button className="btn btn-primary" type="submit" >Sign Up</button>
							</div>
							
						</form>
						<h6 className="text-primary mt-4 mb-3">Follow Us</h6>
						<div className="d-flex">
							<a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter"></i></a>
							<a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f"></i></a>
							<a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
							<a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-instagram"></i></a>
						</div>
					</div> 
				</div>
			</div>
		</div>  
		<div className="container-fluid bg-primary text-dark py-4">
			<div className="container">
				<div className="row g-0">
					<div className="col-md-6 text-center text-md-start">
						<p className="mb-md-0">Copyright &copy; <a className="text-dark fw-bold" href="https://edustow.com/ "target="_blank">EduStow</a>. All Rights Reserved.</p>
					</div>
					<div className="col-md-6 text-center text-md-end">
						<p className="mb-0">Designed by <a className="text-dark fw-bold" href="https://xdplaxx.com/ "target="_blank">Xdplax Int'l</a></p>
						
					</div>
				</div>
			</div>
		</div>

	</footer>
    )
}
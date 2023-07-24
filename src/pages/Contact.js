import { useState, useEffect } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
// import "./MyForm.css";

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      await axios.post('http://localhost:5000/contacts', data);
      reset();
      setShowAlert(true); // set showAlert to true after successful POST request
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

        <div>

    <div className="container-fluid bg-primary py-5 bg-hero" >
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-dark">Contact Us</h1>
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
                <h1 className="display-5">Please Feel Free To Contact Us</h1>
                <hr className="w-25 mx-auto text-primary" />
            </div>
            <div className="row g-3 mb-5">
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="contact-item d-flex flex-column align-items-center justify-content-center text-center pb-5">
                        <div className="contact-icon p-3">
                            <div><i className="fa fa-2x fa-map-marker-alt"></i></div>
                        </div>
                        <h4 className="mt-5">27 Edgerly Calabar Cross River State Nigeria</h4>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="contact-item d-flex flex-column align-items-center justify-content-center text-center pb-5">
                        <div className="contact-icon p-3">
                            <div><i className="fa fa-2x fa-phone"></i></div>
                        </div>
                        <h4 className="mt-5">+234 0912 100 1933 <br></br> +234 706 202 8958</h4>
                        
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 pt-5">
                    <div className="contact-item d-flex flex-column align-items-center justify-content-center text-center pb-5">
                        <div className="contact-icon p-3">
                            <div><i className="fa fa-2x fa-envelope-open"></i></div>
                        </div>
                        <h4 className="mt-5">info@edustow.com <br></br> support@edustow.com</h4>
                    </div>
                </div>
            </div>
            {showAlert && (
           <Alert variant="success" className="text-center" style={{ width: 'auto', height: 'auto' }}>
           <Alert.Heading>Your form was submited successfully!</Alert.Heading>
         </Alert>
          )}
            <div className="row justify-content-center position-relative" >
                <div className="col-lg-8">
                    <div className="bg-primary p-5 m-5 mb-0">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    placeholder="Full Name"
                                    {...register("name", {
                                        required: "Full Name is required.",
                                        pattern: {
                                          value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                          message: "Full Name is not valid."
                                        },
                                        minLength: {
                                          value: 2,
                                          message: "Full must be at least 2 characters long",
                                        },
                                        maxLength: {
                                          value: 30,
                                          message: "Full cannot exceed 30 characters",
                                        },
                                      })}
                                      className="form-control bg-light border-0"/>
                                      {errors.name && <p className="errorMsg" style={{ color: "red" }}>{errors.name.message}</p>}
                                    
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input 
                                    type="email"  
                                    name="email"
                                    placeholder="Email"
                                    {...register("email", {
                                        required: "Email is required.",
                                        pattern: {
                                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                          message: "Please enter a valid email"
                                    }
                                    })}
                                className="form-control bg-light border-0"/>
                                {errors.email && <p className="errorMsg" style={{ color: "red" }}>{errors.email.message}</p>}
                                </div>
                                <div className="col-12">
                                    <input 
                                    type="text"  
                                    name="subject" 
                                    placeholder="Subject"
                                    {...register("subject", {
                                        required: "Subject is required.",
                                        minLength: {
                                            value: 10,
                                            message: "Message must be at least 10 characters long",
                                          },
                                          maxLength: {
                                            value: 50,
                                            message: "Message cannot exceed 50 characters",
                                          },
                                      })}
                                      className="form-control bg-light border-0"/>
                                      {errors.subject && <p className="errorMsg" style={{ color: "red" }}>{errors.subject.message}</p>}
                                </div>
                                <div className="col-12">
                                <textarea
                                     name="message" 
                                     placeholder="Message"
                                     {...register("message", {
                                         required: "Message is required.",
                                         minLength: {
                                          value: 10,
                                          message: "Message must be at least 10 characters long",
                                        },
                                        maxLength: {
                                          value: 1000,
                                          message: "Message cannot exceed 1000 characters",
                                        },
                                      })}
                                      className="form-control bg-light border-0"/>
                                      {errors.message && <p className="errorMsg"style={{ color: "red" }}>{errors.message.message}</p>}
                                </div>
                                <div className="col-12">
                                    <button type='submit' className="btn btn-secondary w-100 py-3" >Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
   

        </div>
    )
}
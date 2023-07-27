import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';

const EditContact = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset, setValue  } = useForm();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [submitting, setSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = async (formData) => {
        setSubmitting(true);
        try {
        await axios.patch(`http://localhost:5000/contacts/${id}`, formData);

        reset();
        setShowAlert(true); 
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    };
        
    

    useEffect(() => {
        getContactById();
    }, [id]);

    
  useEffect(() => {
    if (submitting && showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 9000);
    }
  }, [submitting, showAlert]);
    

    const getContactById = async () => {
        const response = await axios.get(`http://localhost:5000/contacts/${id}`);
        const { name, email, subject, message } = response.data;
        setValue('name', name);
        setValue('email', email);
        setValue('subject', subject);
        setValue('message', message);
    };



    return (

        <div>

    <div className="container-fluid bg-primary py-5 bg-hero" >
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-dark">Contact Us</h1>
                    <div className="pt-2">
                        <a href="" className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Home</a>
                        <a href="" className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Contact Us</a>
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
            <Alert variant="success">
              <Alert.Heading>Updated successfully</Alert.Heading>
              <p>Aww yeah, you successfully read this important alert message.</p>
              <hr />
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
                                    placeholder="Name"
                                    {...register("name", {
                                        required: "Name is required.",
                                        pattern: {
                                          message: "Name is not valid."
                                        }
                                      })}
                                      className="form-control bg-light border-0"/>
                                      {errors.name && <p className="errorMsg">{errors.name.message}</p>}
                                    
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input 
                                    type="email"  
                                    name="email"
                                    placeholder="Email"
                                    {...register("email", {
                                        required: "Please enter your email",
                                        pattern: {
                                          value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                          message: "Please enter a valid email"
                                    }
                                    })}
                                className="form-control bg-light border-0"/>
                                {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                                </div>
                                <div className="col-12">
                                    <input 
                                    type="text"  
                                    name="subject" 
                                    placeholder="Subject"
                                    {...register("subject", {
                                        required: "subject is required.",
                                        pattern: {
                                          message: "subject is not valid."
                                        }
                                      })}
                                      className="form-control bg-light border-0"/>
                                      {errors.subject && <p className="errorMsg">{errors.subject.message}</p>}
                                </div>
                                <div className="col-12">
                                <textarea
                                    name="message" 
                                    placeholder="Message"
                                    {...register("message", {
                                        required: "message is required.",
                                        pattern: {
                                        }
                                      })}
                                      className="form-control bg-light border-0"/>
                                      {errors.message && <p className="errorMsg">{errors.message.message}</p>}
                                </div>
                                <div className="col-12">
                                    <button type='submit' className="btn btn-secondary w-100 py-3" >Update</button>
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

export default EditContact
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';

const EditUser = () => {
    const { id } = useParams();
    const { register, handleSubmit, formState: { errors }, reset, setValue  } = useForm();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [email, setEmail] = useState('');
    const [schoolAddress, setSchoolAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');


    const [submitting, setSubmitting] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = async (formData) => {
        setSubmitting(true);
        try {
        await axios.patch(`http://localhost:5000/users/${id}`, formData);

        reset();
        setShowAlert(true); // set showAlert to true after successful POST request
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
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        const { firstName,lastName, schoolName, email, schoolAddress, phone, message } = response.data;
        setValue('firstName', lastName);
        setValue('lastName', lastName);
        setValue('schoolName', schoolName);
        setValue('email', email);
        setValue('schoolAddress', schoolAddress);
        setValue('phone', phone);
        setValue('message', message);
    };



    return (

        <div>

        <div className="container-fluid bg-primary py-5 bg-hero" >
            <div className="container py-5">
                <div className="row justify-content-start">
                    <div className="col-lg-8 text-center text-lg-start">
                        <h1 className="display-1 text-dark">User Leading Schools!</h1>
                        <div className="pt-2">
                            {/* <a href="" className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Home</a>
                            <a href="" className="btn btn-secondary rounded-pill py-2 px-4 mx-2">Contact Us</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="text-center mx-auto mb-5" >
                    <h1 className="display-5">Make Your School Smart</h1>
                    <hr className="w-25 mx-auto text-primary" />
                </div>
            
                 {showAlert && (
                <Alert variant="success">
                  <Alert.Heading>Updated Successfully</Alert.Heading>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
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
                                        name="firstName" 
                                        placeholder="First Name"
                                        {...register("firstName", {
                                            required: "First Name is required.",
                                            pattern: {
                                              message: "First Name is not valid."
                                            }
                                          })}
                                          className="form-control bg-light border-0"/>
                                          {errors.firstName && <p className="errorMsg">{errors.firstName.message}</p>}
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input 
                                        type="text" 
                                        name="lastName" 
                                        placeholder="Last Name"
                                        {...register("lastName", {
                                            required: "Las tName is required.",
                                            pattern: {
                                              message: "Last Name is not valid."
                                            }
                                          })}
                                          className="form-control bg-light border-0" />
                                          {errors.lastName && <p className="errorMsg">{errors.lastName.message}</p>}
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <input 
                                        type="text" 
                                        placeholder="School Name"
                                        {...register("schoolName", {
                                            required: "School Name is required.",
                                            pattern: {
                                              message: "School Name is not valid."
                                            }
                                          })} className="form-control bg-light border-0"/>
                                           {errors.schoolName && <p className="errorMsg">{errors.schoolName.message}</p>}
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
                                        placeholder="School Address"
                                        {...register("schoolAddress", {
                                            required: "School Address is required.",
                                            pattern: {
                                              message: "School Address is not valid."
                                            }
                                          })} className="form-control bg-light border-0"/>
                                           {errors.schoolAddress && <p className="errorMsg">{errors.schoolAddress.message}</p>}
                                    </div>
                                    <div className="col-12">
                                        <input 
                                         type="text" 
                                         placeholder="Phone Number"
                                         {...register("phone", {
                                             required: "Phone Number is required.",
                                             pattern: {
                                               message: "Phone Number is not valid."
                                             }
                                           })} className="form-control bg-light border-0"/>
                                            {errors.phone && <p className="errorMsg">{errors.phone.message}</p>}
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
                                        <button className="btn btn-secondary w-100 py-3" >Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        
    
        {/* <div className="container-fluid bg-primary bg-call-to-action py-5" >
            <div className="container py-5">
                <div className="row g-0 justify-content-start">
                    <div className="col-lg-6">
                        <h1 className="display-5 mb-4">EduStow plans</h1>
                        <p className="fs-4 fw-normal">EduStow subscription plans are based on the modules you 
                        choose to activate, along with the number of active students. Select your specific 
                        needs and we will get back to you with a tailor-made quote.</p>
                        <a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Contact Us</a>
                    </div>
                </div>
            </div>
        </div> */}
    
            </div>
        )
    }
    export default EditUser
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Button as RSButton, Modal } from 'react-bootstrap';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

const User = () => {
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [config, setConfig] = useState({
    public_key: 'FLWPUBK_TEST-a4be6a29b52c5a7d2aa18dc72a658154-X',
    tx_ref: Date.now(),
    amount: 1000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: '',
      phone: '',
      firstName: '',
    },
    customizations: {
      title: 'EduStow',
      description: 'Payment for Application Set Up',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  });


  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:5000/users', data);
      reset();
      setShowAlert(true);
  
      setConfig((prevConfig) => ({
        ...prevConfig,
        customer: {
          email: data.email,
          phone: data.phone,
          firstName: data.firstName,
        },
      }));
      await axios.put('http://localhost:5000/users/updateStatus', { status: 1, email: data.email });
      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 9000);
    }
  }, [showAlert]);

  const handleFlutterwavePayment = async (formData) => {
    const paymentData = {
      ...formData,
      amount: 1000,
      currency: 'NGN',
      customer: {
        ...config.customer,
        ...formData,
      },
    };

    try {
      const response = await axios.post('http://localhost:5000/flutterwave/payment', paymentData);
      const { data } = response;
      const { status, message, data: responseData } = data;

      if (status === 'success') {
        const { link } = responseData;
        window.location.href = link;
      } else {
        console.error('Failed to initiate payment:', message);
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  const fwConfig = {
    ...config,
    text: 'Pay with Flutterwave!',
    callback: (response) => {
      console.log(response);
      closePaymentModal();
    },
    onClose: () => {
      handleModalClose();
    },
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

    return (

        <div>

    <div className="container-fluid bg-primary py-5 bg-hero" >
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-dark">Join Leading Schools!</h1>
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
                <h1 className="display-5">Make Your School Smart</h1>
                <hr className="w-25 mx-auto text-primary" />
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
                                     name="firstName"
                                     id="firstName" 
                                    placeholder="First Name"
                                    {...register("firstName", {
                                        required: "First Name is required.",
                                        pattern: {
                                          value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                          message: "First Name is not valid."
                                        },
                                        minLength: {
                                          value: 2,
                                          message: "Name must be at least 2 characters long",
                                        },
                                        maxLength: {
                                          value: 30,
                                          message: "Name cannot exceed 30 characters",
                                        },
                                      })}
                                      className="form-control bg-light border-0"/>
                                      {errors.firstName && <p className="errorMsg" style={{ color: "red" }}>{errors.firstName.message}</p>}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input 
                                     type="text"
                                     name="lastName"
                                     id="lastName" 
                                    placeholder="last Name"
                                    {...register("lastName", {
                                        required: "Last Name is required.",
                                        pattern: {
                                          value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                                          message: "Last Name is not valid."
                                        },
                                        minLength: {
                                          value: 2,
                                          message: "Name must be at least 2 characters long",
                                        },
                                        maxLength: {
                                          value: 30,
                                          message: "Name cannot exceed 30 characters",
                                        },
                                      })}
                                      className="form-control bg-light border-0" />
                                      {errors.lastName && <p className="errorMsg" style={{ color: "red" }}>{errors.lastName.message}</p>}
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
                                       {errors.schoolName && <p className="errorMsg" style={{ color: "red" }}>{errors.schoolName.message}</p>}
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
                                <div className="col-12 col-sm-6">
                                <input
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                  {...register('password', {
                                    required: 'Password is required.',
                                    minLength: {
                                      value: 8,
                                      message: 'Password must be at least 8 characters long',
                                    },
                                  })}
                                  className="form-control bg-light border-0"
                                />
                                {errors.password && <p className="errorMsg" style={{ color: 'red' }}>{errors.password.message}</p>}

                              </div>
                              <div className="col-12 col-sm-6">
                                <input
                                  type="password"
                                  name="confirmPassword"
                                  placeholder="Confirm Password"
                                  {...register('confirmPassword', {
                                    required: 'Confirm Password is required.',
                                    validate: (value) => {
                                      const password = watch('password');
                                      return value === password || 'Passwords do not match.';
                                    },
                                  })}
                                  className="form-control bg-light border-0"
                                />
                                {errors.confirmPassword && <p className="errorMsg" style={{ color: 'red' }}>{errors.confirmPassword.message}</p>}
                              </div>

                                <div className="col-12">
                                    <input 
                                    type="text" 
                                    name="schoolAddress"
                                    id="schoolAddress"
                                    placeholder="School Address"
                                    {...register("schoolAddress", {
                                        required: "School Address is required.",
                                        minLength: {
                                          value: 5,
                                          message: "Address must be at least 5 characters long",
                                        },
                                        maxLength: {
                                          value: 50,
                                          message: "Address cannot exceed 50 characters",
                                        },
                                      })} className="form-control bg-light border-0"/>
                                       {errors.schoolAddress && <p className="errorMsg" style={{ color: "red" }}>{errors.schoolAddress.message}</p>}
                                </div>
                                <div className="col-12">
                                    <input 
                                     type="text" 
                                     placeholder="Phone Number"
                                     {...register("phone", {
                                         required: "Phone Number is required.",
                                         pattern: {
                                          value: /^[0-9\b]+$/,
                                           message: "Phone Number is not valid."
                                         },
                                         minLength: {
                                          value: 10,
                                          message: "Phone number must be at least 10 digits",
                                        },
                                       })} className="form-control bg-light border-0"/>
                                        {errors.phone && <p className="errorMsg" style={{ color: "red" }}>{errors.phone.message}</p>}
                                </div>
                                
                                <div className="col-12">
                                <button type="button" className="btn btn-secondary w-100 py-3" onClick={handleSubmit(onSubmit)}>Make Payment</button>

                                </div>
                            </div>
                            <div className="App1">
    </div>
                        </form>
                        <div>
    {/* Your existing code */}
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Form fields */}
    </form>

    <Modal show={showModal} onHide={handleModalClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Payment Details</Modal.Title>
      </Modal.Header>
          <Modal.Body>
      <p>Amount: N1,000</p>
      <p>Email: {config.customer.email}</p>
      <p>Name: {config.customer.firstName}</p>
    </Modal.Body>
      <Modal.Footer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button className="btn btn-secondary" onClick={handleModalClose}>
            Close
          </button>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '10px' }}>
            <FlutterWaveButton
              {...fwConfig}
              text="Pay Now"
              className="btn btn-primary"
              style={{ fontSize: '16px', padding: '10px 20px' }}
            />
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  </div>


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
export default User
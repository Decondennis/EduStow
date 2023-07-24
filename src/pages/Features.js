 import React from "react";
 import { NavLink } from "react-router-dom";

 export default function Features(){
     return (

 <div>		
 		

         <div className="container-fluid bg-primary py-5 bg-hero" >
        <div className="container py-5">
            <div className="row justify-content-start">
                <div className="col-lg-8 text-center text-lg-start">
                    <h1 className="display-1 text-dark">App Features</h1>
                    <div className="pt-2">
                    <NavLink to="/User"> <a className="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2">Join</a></NavLink>
                        <NavLink to="/login"> <a className="btn btn-secondary rounded-pill py-md-3 px-md-5 mx-2">Login</a></NavLink>
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
                        <h1 className="mb-4">EduStow Features</h1>
                        <p>EduStow is a Modern and Complete School Automation Software that suits almost every 
                            school or educational institution from student admission to student graduation, 
                            from fees collection to exam results. It includes 40+ modules with 8 inbuilt users 
                            (Super Admin, Admin, Accountant, Teacher, Receptionist, Librarian, Parent and Student) 
                            panel.</p>
                        <p>EduStow provides all key features required for the effective administration of any K12 
                            institution: Nursery, Kindergarten, Elementary, Secondary or High school. By using 
                            EduStow, you can easily implement a state-of-the-art cloud-based platform that offers 
                            an affordable solution for the administration of educational institutions of any size.</p>
                        
                    </div>

                    <div className="mb-5">
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                
                                <p>• It offers complete automation of all operations of your school.</p>
                                
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>• Helps administration to collect, manage and analyse student 
                                    information, access their data and monitor their academic progress.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>• Allows management of attendance, assessments marking and grade reports.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>• Supports financial arrangement management, automated billing and online payments.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>• Teachers restricted mode: Student data only accessible to respective className/subject teachers</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>• Front office with student admission lead management: Manage your front office with 
                                    student enquiry, calls, complaints, visitors, postal etc.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>•	 Streamlines communication between all stakeholders: students, teachers, 
                                    parents and administrative staff, with dedicated web portal for any type of end-user.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>•	Complete HR module with payroll: Manage staff salary, earnings, deductions, attendance and leaves</p>
                            </div>
                        </div>
                        
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>•	Marks register: Enter student marks for exam with exam attendance.</p>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="ps-3">
                                <p>•	Examination: Complete examinaton management from exam create to exam schedule to marks entry to progress report with grades.</p>
                            </div>
                        </div>
                        
                        
                        
                    </div>

                    {/* <div className="bg-primary p-5">
                        <h3 className="mb-4">Leave a comment</h3>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Your Name" />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-white border-0" placeholder="Your Email" />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Website" />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-white border-0" rows="5" placeholder="Comment"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-secondary w-100 py-3" type="submit">Leave Your Comment</button>
                                </div>
                            </div>
                        </form>
                    </div> */}
                </div>
    
                <div className="col-lg-4">
                    {/* <div className="mb-5">
                        <div className="input-group">
                            <input type="text" className="form-control p-3" placeholder="Keyword" />
                            <button className="btn btn-primary px-4"><i className="fa fa-search"></i></button>
                        </div>
                    </div> */}
                    

                    <div className="mb-5">
                        <h3 className="mb-4">Core Modules</h3>
                        <div className="d-flex flex-column justify-content-start bg-primary p-4">
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>State of the art admission form</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Fees collection module</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Flexible examination module</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>One click attendance</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Maximum features in parent panel for student monitoring</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>One software to track everything in your institution</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Modern, responsive and user-friendly interface</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Result oriented features to deliver maximum ROI</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Outstanding customer support</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Front CMS to manage your school website</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Create homework subject wise then evaluate homework for students</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Student and staff timeline</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Student history</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Calendar and To-do list</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Enable/sizable students and staff</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Feature rich business intelligence reports</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Full control over staff user roles and permissions</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Enable/disable modules</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Keyword Research</a>
                            <a className="h5 mb-4" ><i className="fa fa-angle-right me-2"></i>Create  online courses in Edustow school</a>
                            
                            
                            
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
                    <h1 className="display-5 mb-4">ACADEMICS</h1>
                    <p className="fs-4 fw-normal">EduStow significantly improves school operations and
                     empowers educators to foster better student outcomes, so we can help you create
                      the greatest generation of educators, so that they can create the greatest generation
                       of students..</p>
                    {/* <a href="" className="btn btn-secondary rounded-pill py-md-3 px-md-5 mt-4">Contact Us</a> */}
                </div>
            </div>
        </div>
    </div>
    




 </div>	
      )


 }
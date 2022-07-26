import React from 'react'
import "./Register.css";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Link } from 'react-router-dom';


let validationSchema = yup.object().shape({
    fname: yup.string().required("Full Name is required!").min(2, 'Too Short!').max(50, 'Too Long!'),
    phone: yup.number().required(),
    email: yup.string().email('The email address is invalid').required("Email is required!"),
    pwd: yup.string('The password is invalid').min(2, 'Too Short!').max(50, 'Too Long!').required(),
    rpwd: yup.string().when("pwd", {
        is: val => (val && val.length > 0 ? true : false),
        then: yup.string().oneOf([yup.ref("pwd")],
            "Both password need to be the same")
    }),
    gender: yup.string().required("Please select a gender"),
})
const Register = () => {
    return (
        <div className="register">
            <Formik initialValues={{
                fname: '',
                phone: '',
                email: '',
                date: '',
                rdate: '',
                bgroup: '',
                pwd: '',
                rpwd: '',
                loc: '',
                gender: '',
                donat: ''
                
            }}
                validationSchema={validationSchema}
                onSubmit={(data) => {
                    console.log(data);
                }}>
                {({ values, errors, touched }) => (
                    <Form>
                        {/* register Section */}
                        <div className="Register-container">
                            <div className="Register-title my-5">Registration form</div>
                            <div className=" Register-content row">

                                <div className="Register-Elemet col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Full Name</span>
                                        <Field name="fname" type="input" placeholder="Full Name" />
                                        {touched.fname && errors.fname ? (
                                            <small className="text-danger">{errors.fname}</small>
                                        ) : null}

                                    </div>
                                </div>

                                <div className="Register-Element col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Phone Number</span>
                                        <Field name="phone" type="input" placeholder="Phone Number" />
                                        {touched.phone && errors.phone ? (
                                            <small className="text-danger">{errors.phone}</small>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="Register-Elemet col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Email</span>
                                        <Field name="email" type="input" placeholder="Email" />
                                        {touched.email && errors.email ? (
                                            <small className="text-danger">{errors.email}</small>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="Register-Elemet col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Date of Birth</span>
                                        <Field name="date" type="date" placeholder="Date of Birth" />
                                        {touched.date && errors.date ? (
                                            <small className="text-danger">{errors.date}</small>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="Register-Elemet col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Recently Blood Donated Date</span>
                                        <Field name="rdate" type="date" placeholder="Recently DOnated" />
                                    </div>
                                </div>

                                <div className="Register-Elemet col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Blood Group</span>
                                        <Field name="bgroup" className=" form-select" as="select">
                                            <option value="">Select Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </Field>
                                        {touched.bgroup && errors.bgroup ? (
                                            <small className="text-danger">{errors.bgroup}</small>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="Register-Elemet col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Password</span>
                                        <Field name="pwd" type="password" placeholder="Enter your Password" />
                                    </div>
                                    {touched.pwd && errors.pwd ? (
                                        <small className="text-danger">{errors.pwd}</small>
                                    ) : null}
                                </div>

                                <div className="Register-Elemet col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Re-enter your password</span>
                                        <Field name="rpwd" type="password" placeholder="Re Enter your password" />
                                        {touched.rpwd && errors.rpwd ? (
                                            <small className="text-danger">{errors.rpwd}</small>
                                        ) : null}
                                    </div>
                                </div>

                                <div className="Register-Elemet col-lg-6 col-md-6 col-sm-12">
                                    <div className="Register-input">
                                        <span className="Register-label">Location</span>
                                        <Field name="loc" type="input" placeholder="Enter Your Location" />
                                        {touched.loc && errors.loc ?(
                                            <small className="text-danger">{errors.loc}</small>
                                        ) : null}

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gender Section of register */}
                        <div className="gender-section max-auto" >
                            <h1 className="gender-title my-3">Gender</h1>
                            <div className="Gender-info row">
                                <div className="Gender-radio col-lg-4 col-md-4 col-sm-4" style={{width:'200px'}} >
                                    <label className="Gender-label" >
                                        <Field name="gender" type="radio" value="Male"/>
                                        <span style={{fontSize:'16px',fontWeight:'bold'}}>Male</span>
                                    </label>
                                </div>
                                <div className="Gender-radio col-lg-4 col-md-4 col-sm-4" style={{width:'200px'}}>
                                    <label className="Gender-label">
                                        <Field name="gender" type="radio" value="Female" />
                                        <span style={{fontSize:'16px',fontWeight:'bold'}}>Female</span>
                                    </label>
                                </div>
                                <div className="Gender-radio col-lg-4 col-md-4 col-sm-4" style={{width:'200px'}}>
                                    <label className="Gender-label">
                                        <Field name="gender" type="radio" value="Others" />
                                        <span style={{fontSize:'16px',fontWeight:'bold'}}>Other</span>
                                    </label>
                                    {touched.gender && errors.gender ? (
                                        <small className="text-danger">{errors.gender}</small>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <h1 className="Donate-title my-3">Donated Already?</h1>
                        <div className="Donate-info row">
                            <div className="Donate-radio col-lg-4 col-md-4 col-sm-4"style={{width:'200px'}}>
                                <label className="checkbox-label mx-2">
                                    <Field name="donat" type="radio" value="Yes" />
                                    <span className="checkmark mx-3" style={{fontSize:'16px',fontWeight:'bold'}}>Yes</span>
                                </label>
                            </div>
                            <div className="Gender-radio col-lg-4 col-md-4 col-sm-4"style={{width:'200px'}}>
                                <label className="checkbox-label">
                                    <Field name="donat" type="radio" value="No" />
                                    <span className="checkmark mx-3" style={{fontSize:'16px',fontWeight:'bold'}}>No</span>
                                </label>
                            </div>
                        </div>
                        <div className="button">
                        <button type="submit" className="btn btn-primary mx-5 my-5">Register</button>
                        </div>
                        <li className="linklog" to="/">Already a user? Log in</li>
                    </Form>
                )}

            </Formik>
        </div>
    )
}

export default Register;

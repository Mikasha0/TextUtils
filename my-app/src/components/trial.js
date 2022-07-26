import React from "react";
import { useFormik } from 'formik';


const initialValues = {
    username: '',
    email: '',
    password: ''
}

export default function Trial() {

    const formik = useFormik({
        initialValues,
    })

  return <div>
      <form>
          <div className="container mb-3 my-3">
              <label htmlFor='userlabel' className="form-label">Enter your Name</label>
              <input type='labelname' name='username' className="form-control" onChange={formik.handleChange} values={formik.values.username} id='inputname'/>
          </div>
          <div className="container mb-3 my-3">
              <label htmlFor='emaillabel' className="form-label">Enter your email</label>
              <input type='email' name='email' className="form-control" onChange={formik.handleChange} values={formik.values.email} id='inputemail'/>
          </div>
          <div className="container mb-3 my-3">
              <label htmlFor='passwordlabel' className="form-label">Enter your password</label>
              <input type='password' name='password' className="form-control" onChange={formik.handleChange} values={formik.values.password} id='inputpassword'/>
          </div>
      </form>
  </div>;
}
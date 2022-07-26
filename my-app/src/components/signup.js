import { useFormik } from 'formik';
import React from 'react';

const initialValues = {
    username:'',
    name:'',
    password:'',
    repassword:''
}

const onSubmit = values => {
    console.log('object', values)
}

const validate = values =>{

    let errors={}

    if(!values.username){
        errors.username='Required'
    }
    if(!values.name){
        errors.name='Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.name)){
        errors.name='Invalid email format'
    }
    if(!values.password){
        errors.password='Required'
    }
    if(!values.repassword){
        errors.repassword='Required'
    }

    return errors

}

export default function Signup() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
      })

    console.log('visited fields', formik.touched)
    return <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='exampleInputUsername' className="form-label">Please enter your Username</label>
                    <input type="name" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.username} className="form-control" id="username1"/>
                    {formik.touched.username && formik.errors.username ? <div className='error text-danger'>{formik.errors.username}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name = 'name' onChange = {formik.handleChange} onBlur={formik.handleBlur} value = {formik.values.name} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    { formik.touched.name && formik.errors.name ? (<div className='error text-danger'>{formik.errors.name}</div>
                     ) : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name = 'password' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} className="form-control" id="exampleInputPassword1" />
                    {formik.touched.password && formik.errors.password ? <div className='error text-danger'>{formik.errors.password}</div> : null}
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Check Password</label>
                    <input type="password" name='repassword' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.repassword} className="form-control" id="exampleInputPassword1" />
                    {formik.touched.repassword && formik.errors.repassword ? <div className='error text-danger'>{formik.errors.repassword}</div> : null}
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
    </div>;
}

import React from "react";
import { useFormik } from "formik";

export default function Login() {

    const initialValues = {
        username: "",
        password: ""
    }

    const onSubmit = (values) => {
        console.log(formik.values)
    }

    const formik = useFormik({
        initialValues,
        onSubmit,
    })

    console.log(formik.values);

  return (
    <div className="container w-50">
        <form onSubmit={formik.handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Username</label>
        <input
          type="text"
          className="form-control"
          name="username"
          value = {formik.values.username}
          onChange = {formik.handleChange} 
          onBlur = {formik.handleBlur}
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">password</label>
        <input
          type="password"
          className="form-control"
          name="password"
          values = {formik.values.password}
          onChange = {formik.handleChange}
          onBlur = {formik.handleBlur}
          placeholder="Enter your password"
        />
      </div>
      </form> 
    </div>
  );
}

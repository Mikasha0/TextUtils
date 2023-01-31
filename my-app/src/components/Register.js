import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";

export default function Register({ btnName }) {
  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const regEx = /(?:\(?\+977\)?)?[9][6-9]\d{8}|01[-]?[0-9]{7}/;

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone: Yup.string()
      .matches(regEx, "Invalid phone number")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <>
      <div className="container w-75 my-3">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3 ">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control "
              name="fullName"
              {...formik.getFieldProps("fullName")}
              placeholder="Enter your full name"
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="errors my-3" style={{ color: "red" }}>
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">E-mail</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Enter your email address"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="email my-3" style={{ color: "red" }}>
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder="Enter your phone number"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="phone my-3" style={{ color: "red" }}>
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
        </form>
        <button type="submit" className="btn btn-primary">
          {btnName}
        </button>
      </div>
    </>
  );
}

Register.propTypes = {
  btnName: PropTypes.string.isRequired,
};

Register.defaultProps = {
  btnName: "set btn name here",
};

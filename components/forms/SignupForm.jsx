"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Divider, TextField } from "@mui/material";
import Link from "next/link";
import { postAPI } from "@/services/fetchAPI";

const validationSchema = yup.object({
  fullname: yup
    .string("Enter your full name")
    .min(8, "Full name should be of minimum 3 characters length")
    .required("Full name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Your passwords do not match.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});

export const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const credentials = {
        email: values.email,
        hashedPassword: values.password,
        fullname: values.fullname,
      };
      postAPI("/users", credentials).then((res) => {
        if (res.status && (res.status === 200 || res.status === "success")) {
          console.log(res.status);
        } else {
          console.log(res.status);
        }
      });
    },
  });
  return (
    <div className="flex flex-col gap-4 w-full max-w-xl p-6 sm:p-10 shadow-2xl bg-white rounded">
      <h2 className=" text-3xl sm:text-5xl">Signup</h2>
      <Divider />
      <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="fullname"
          name="fullname"
          label="Full Name"
          value={formik.values.fullname}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.fullname && Boolean(formik.errors.fullname)}
          helperText={formik.touched.fullname && formik.errors.fullname}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          helperText={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <p className="text-sm text-end">
        Already have an account ?{" "}
        <Link
          className="transition-all duration-200 text-casual "
          href={"/login"}
        >
          Login
        </Link>{" "}
        here!{" "}
      </p>
    </div>
  );
};

"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Divider, TextField } from "@mui/material";
import Link from "next/link";
import { handleLogin } from "@/functions/handleLogin";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const LoginForm = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { email, password } = values;
      handleLogin(email, password);
      setTimeout(() => {
        router.push("/dashboard");
      }, 800);
    },
  });
  return (
    <div className="flex flex-col gap-4 w-full max-w-xl p-6 sm:p-10 shadow-2xl bg-white rounded">
      <h2 className=" text-3xl sm:text-5xl">Login</h2>
      <Divider />
      <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
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
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      <p className="text-sm text-end">
        Don&apos;t have an account ?{" "}
        <Link
          className="transition-all duration-200 text-casual "
          href={"/signup"}
        >
          Signup
        </Link>{" "}
        here!{" "}
      </p>
    </div>
  );
};

"use client";
import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Divider, TextField } from "@mui/material";
import Link from "next/link";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const validationSchema = yup.object({
  title: yup
    .string()
    .min(3, "Title should be of minimum 3 characters length")
    .max(20, "Title should be of maximum 20 characters length")
    .required("Title is required"),
  body: yup
    .string()
    .min(3, "Task body should be of minimum 3 characters length")
    .max(30, "Task body should be of maximum 30 characters length")
    .required("Task body is required"),
  priority: yup.string(),
});

export const NewTaskForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      priority: "casual",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col gap-4 w-full max-w-xl p-6 sm:p-10 shadow-2xl bg-white rounded">
      <h2 className=" text-lg sm:text-2xl">New Task</h2>
      <Divider />
      <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          id="body"
          name="body"
          label="Task Body"
          value={formik.values.body}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.body && Boolean(formik.errors.body)}
          helperText={formik.touched.body && formik.errors.body}
        />
        <FormControl>
          <FormLabel id="priority-label">Priority</FormLabel>
          <RadioGroup
            row
            aria-labelledby="priority-label"
            id="priority"
            name="priority"
            value={formik.values.priority}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <FormControlLabel
              value="casual"
              control={<Radio />}
              label="Casual"
            />
            <FormControlLabel
              value="moderate"
              control={<Radio />}
              label="Moderate"
            />
            <FormControlLabel
              value="urgent"
              control={<Radio />}
              label="Urgent"
            />
          </RadioGroup>
        </FormControl>
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

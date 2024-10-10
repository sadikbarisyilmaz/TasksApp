"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, Divider, Snackbar, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { postAPI } from "@/services/fetchAPI";
import { useSession } from "next-auth/react";

const validationSchema = yup.object({
  title: yup
    .string()
    .min(3, "Title should be of minimum 3 characters length")
    .max(30, "Title should be of maximum 30 characters length")
    .required("Title is required"),
  body: yup
    .string()
    .min(3, "Task body should be of minimum 3 characters length")
    .max(100, "Task body should be of maximum 100 characters length")
    .required("Task body is required"),
  priority: yup.string(),
});

export const NewTaskForm = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const { data: session, status } = useSession();
  const userId = session?.user.id;

  const formik = useFormik({
    initialValues: {
      title: "",
      body: "",
      priority: "casual",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      const newTask = {
        ...values,
        user: {
          connect: { id: userId },
        },
      };
      postAPI("/tasks", newTask).then((res) => {
        if (res.status && (res.status === 200 || res.status === "success")) {
          setMessage("New task created successfully !");
          setOpen(true);
          resetForm();
        } else {
          setMessage(res);
          setOpen(true);
        }
      });
    },
  });

  return (
    <div className="flex flex-col gap-4 w-full max-w-4xl p-6 sm:p-10">
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
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message={message}
      />
    </div>
  );
};

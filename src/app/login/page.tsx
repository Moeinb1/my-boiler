"use client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { object, string } from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { emailRegex } from "../utils/utils";
const Login = () => {
  const schema = object().shape({
    email: yup
      .string()
      .trim()
      .required("email is required")
      .email("Invalid email")
      .matches(emailRegex, "Invalid email"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "password must be 8 characters or more")
      .matches(/[a-z]+/, "password must have at least one lowercase character")
      .matches(/[A-Z]+/, "password must have at least one uppercase character")
      .matches(
        /[@$!%*#?&]+/,
        "password must have at least one special character"
      )
      .matches(/\d+/, "password must have at least one number"),
  });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setCookie("token", data);
    if (data?.email) router.push("/dashboard");
  };

  return (
    <div className="w-full flex flex-col items-center justify-center bg-slate-200 h-screen">
      <form
        className="flex flex-col gap-y-4 bg-slate-50 p-4 rounded-lg   "
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          {...register("email")}
          label="Email"
          error={!!errors.email}
          helperText={
            errors.email ? [errors?.email?.message][0]?.toString() : ""
          }
        />

        <TextField
          {...register("password")}
          label="Password"
          error={!!errors.password}
          helperText={
            errors.password ? [errors?.password?.message][0]?.toString() : ""
          }
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Login;

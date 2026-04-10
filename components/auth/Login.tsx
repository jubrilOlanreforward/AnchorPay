"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../ui/shared/CustomButton";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const Login = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    console.log("Login data:", data);
    // Handle login
  };

  return (
    <div>
      <h1 className="font-montserrat text-[20px] font-[600] mb-3">Welcome !</h1>
      <p className="text-[15px] text-gray-950 mb-6">{`Let’s log in to your account`}</p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.EMAIL}
          name="email"
          label="Email Address"
          placeholder="Jessicaj@unionbanking.com"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PASSWORD}
          name="password"
          label="Password"
          placeholder="*************"
        />

        <CustomButton title="Login" type="submit" className="w-full" />
      </form>

      <p className="text-center mt-6 text-sm font-[500]">
        Already have an Account?{" "}
        <Link
          href="/auth/email?step=create-account"
          className="text-primary_one_600 font-semibold ms-1"
        >
          Sign up
        </Link>
      </p>
      <p className="text-center mt-6 text-sm">
        Forgot password?{" "}
        <Link
          href="/auth/forgot-password"
          className="text-primary_one_600 font-semibold ms-1"
        >
          Reset
        </Link>
      </p>
    </div>
  );
};

export default Login;

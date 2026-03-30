"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../ui/shared/CustomButton";
import Link from "next/dist/client/link";

const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    console.log("Forgot password email:", data.email);
    // Handle sending OTP to email
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h1 className="font-montserrat text-[24px] font-[600] mb-3">
          Change your password
        </h1>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.EMAIL}
          name="email"
          label="Email Address"
          placeholder="Email address"
        />

        <CustomButton title="Request Reset" type="submit" className="w-full" />
        <p className="text-center mt-6 text-sm">
          Remember your password?{" "}
          <Link
            href="/auth/login"
            className="text-primary_one_600 font-semibold"
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;

"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import CustomFormField from "../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../ui/shared/CustomButton";

const setupPasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type SetupPasswordFormValues = z.infer<typeof setupPasswordSchema>;

const SetupPassword = ({ onNext }: { onNext?: () => void }) => {
  const form = useForm<SetupPasswordFormValues>({
    resolver: zodResolver(setupPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const password = form.watch("password");

  // Password validation functions
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecialChar = /[@#%&*?]/.test(password);

  const onSubmit = async (data: SetupPasswordFormValues) => {
    console.log("Setup password data:", data);
    // Handle form submission
    onNext?.();
  };

  return (
    <div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PASSWORD}
          name="password"
          label="Password"
          placeholder="Enter your password"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PASSWORD}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
        />

        <div className="space-y-2 mt-4">
          <div
            className={`flex items-center gap-2 text-sm ${hasMinLength ? "text-success-600" : "text-gray-400"}`}
          >
            <CheckCircle
              className={`w-4 h-4 ${hasMinLength ? "text-success-600" : "text-gray-400"}`}
            />
            <span>Minimum of 8 characters</span>
          </div>
          <div
            className={`flex items-center gap-2 text-sm ${hasUppercase ? "text-success-600" : "text-gray-400"}`}
          >
            <CheckCircle
              className={`w-4 h-4 ${hasUppercase ? "text-success-600" : "text-gray-400"}`}
            />
            <span>At least one UPPERCASE character</span>
          </div>
          <div
            className={`flex items-center gap-2 text-sm ${hasSpecialChar ? "text-success-600" : "text-gray-400"}`}
          >
            <CheckCircle
              className={`w-4 h-4 ${hasSpecialChar ? "text-success-600" : "text-gray-400"}`}
            />
            <span>One special character (e.g: @#%&*?)</span>
          </div>
        </div>

        <CustomButton title="Continue" type="submit" className="w-full" />
      </form>
    </div>
  );
};

export default SetupPassword;

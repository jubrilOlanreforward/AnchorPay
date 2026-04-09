"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle } from "lucide-react";
import CustomFormField from "../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../ui/shared/CustomButton";
import { cn } from "@/lib/utils";

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

  const checkPasswordCriteria = (condition: boolean) => {
    return condition ? "text-green-400" : "text-gray-400";
  };

  return (
    <div>
      <p className="text-[17px] text-gray-600 mb-7">
        {`Begin your journey on Booster`}
      </p>
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
            className={cn(
              `flex items-center gap-2 text-[12px] ${checkPasswordCriteria(hasMinLength)}`,
            )}
          >
            <CheckCircle
              className={cn(`w-3 h-3 ${checkPasswordCriteria(hasMinLength)}`)}
            />
            <span>Minimum of 8 characters</span>
          </div>
          <div
            className={cn(
              `flex items-center gap-2 text-[12px] ${checkPasswordCriteria(hasUppercase)}`,
            )}
          >
            <CheckCircle
              className={cn(`w-3 h-3 ${checkPasswordCriteria(hasUppercase)}`)}
            />
            <span>At least one UPPERCASE character</span>
          </div>
          <div
            className={cn(
              `flex items-center gap-2 text-[12px] ${checkPasswordCriteria(hasSpecialChar)}`,
            )}
          >
            <CheckCircle
              className={cn(`w-3 h-3 ${checkPasswordCriteria(hasSpecialChar)}`)}
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

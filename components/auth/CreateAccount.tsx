"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../ui/shared/CustomButton";
import TermsAndConditions from "./TermsAndConditions";

const createAccountSchema = z.object({
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
});

type CreateAccountFormValues = z.infer<typeof createAccountSchema>;

const CreateAccount = ({ onNext }: { onNext?: () => void }) => {
  const form = useForm<CreateAccountFormValues>({
    resolver: zodResolver(createAccountSchema),
    defaultValues: {
      phoneNumber: "",
      email: "",
      firstName: "",
      lastName: "",
    },
  });

  const onSubmit = async (data: CreateAccountFormValues) => {
    console.log("Create account data:", data);
    // Handle form submission
    onNext?.();
  };

  return (
    <div>
      <p className="text-[15px] text-gray-600 mb-6">
        {`Welcome to Booster! Let’s get you started.`}
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="phoneNumber"
          label="Phone Number"
          placeholder="Enter your phone number"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.EMAIL}
          name="email"
          label="Email Address"
          placeholder="Enter your email address"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="firstName"
          label="First Name"
          placeholder="Enter your first name"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
        />

        <CustomButton title="Continue" type="submit" className="w-full" />
        <TermsAndConditions />
      </form>
    </div>
  );
};

export default CreateAccount;

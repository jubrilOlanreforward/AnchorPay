"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../ui/shared/CustomButton";

const reviewDetailsSchema = z.object({
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  dateOfBirth: z.string().optional(),
});

type ReviewDetailsFormValues = z.infer<typeof reviewDetailsSchema>;

const ReviewDetails = ({ onNext }: { onNext?: () => void }) => {
  const form = useForm<ReviewDetailsFormValues>({
    resolver: zodResolver(reviewDetailsSchema),
    defaultValues: {
      phoneNumber: "",
      email: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
    },
  });

  const onSubmit = async (data: ReviewDetailsFormValues) => {
    console.log("Review details data:", data);
    // Handle form submission
    onNext?.();
  };

  return (
    <div>
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
          disabled
          className="disabled-field"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="lastName"
          label="Last Name"
          placeholder="Enter your last name"
          disabled
          className="disabled-field"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.DATE}
          name="dateOfBirth"
          label="Date of Birth"
          placeholder="Select your date of birth"
          disabled
          className="disabled-field"
        />

        <CustomButton
          title="Confirm Details"
          type="submit"
          className="w-full"
        />
      </form>
    </div>
  );
};

export default ReviewDetails;

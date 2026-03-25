// Example usage of the updated CustomFormField with shadcn field component

"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CustomFormField from "./InputField";
import { Button } from "@/components/ui/button";
import { FormFieldType } from "@/types/types";

// Define your validation schema
const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  dateOfBirth: z.string(),
  salary: z.number().refine((n) => n > 0, "Salary must be greater than 0"),
  country: z.string(),
  bio: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ExampleForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      dateOfBirth: "",
      salary: 0,
      country: "",
      bio: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
    // Handle form submission
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-6 max-w-md mx-auto p-6"
    >
      <h1 className="text-2xl font-bold">Registration Form</h1>

      {/* Text Input Example */}
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="fullName"
        label="Full Name"
        placeholder="Enter your full name"
        description="This will be displayed on your profile"
      />

      {/* Email Input Example */}
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.EMAIL}
        name="email"
        label="Email Address"
        placeholder="your.email@example.com"
        description="We'll never share your email"
      />

      {/* Password Input Example */}
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.PASSWORD}
        name="password"
        label="Password"
        placeholder="Enter a strong password"
        description="Minimum 8 characters"
      />

      {/* Phone Number Example */}
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.PHONE_INPUT}
        name="phoneNumber"
        label="Phone Number"
        placeholder="+1 (555) 000-0000"
      />

      {/* Date Input Example */}
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.DATE}
        name="dateOfBirth"
        label="Date of Birth"
      />

      {/* Number Input Example */}
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.NUMBER}
        name="salary"
        label="Annual Salary"
        placeholder="100000"
        min={0}
        step={1000}
        description="Used for salary verification"
      />

      {/* Select Example */}
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.SELECT}
        name="country"
        label="Country"
        placeholder="Select your country"
        options={[
          { label: "United States", value: "us" },
          { label: "United Kingdom", value: "uk" },
          { label: "Nigeria", value: "ng" },
          { label: "Canada", value: "ca" },
        ]}
      />

      {/* Textarea Example */}
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.TEXTAREA}
        name="bio"
        label="Bio"
        placeholder="Tell us about yourself..."
        description="Optional: Share a brief bio"
      />

      <Button
        type="submit"
        disabled={form.formState.isSubmitting}
        className="w-full"
      >
        {form.formState.isSubmitting ? "Submitting..." : "Submit"}
      </Button>
    </form>
  );
}

/**
 * ============================================================================
 * UNCONTROLLED COMPONENT EXAMPLE (Without react-hook-form)
 * ============================================================================
 */

export function UncontrolledFormExample() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold">Contact Form</h1>

      {/* Uncontrolled Input (no control prop) */}
      <CustomFormField
        fieldType={FormFieldType.INPUT}
        name="name"
        label="Your Name"
        placeholder="John Doe"
        value={formData.name}
        onChange={handleChange("name")}
        description="Enter your full name"
      />

      {/* Uncontrolled Email */}
      <CustomFormField
        fieldType={FormFieldType.EMAIL}
        name="email"
        label="Email"
        placeholder="john@example.com"
        value={formData.email}
        onChange={handleChange("email")}
      />

      {/* Uncontrolled Textarea */}
      <CustomFormField
        fieldType={FormFieldType.TEXTAREA}
        name="message"
        label="Message"
        placeholder="Your message here..."
        value={formData.message}
        onChange={handleChange("message")}
        description="Maximum 500 characters"
      />

      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Send Message
      </button>
    </form>
  );
}

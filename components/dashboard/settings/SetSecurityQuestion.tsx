"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../../ui/shared/CustomButton";
import { useRouter } from "nextjs-toploader/app";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import SuccessModal from "@/components/shared/SuccessModal";
import { useState } from "react";

const securityQuestionSchema = z.object({
  securityQuestion1: z.string().min(1, "Please select a security question"),
  securityAnswer1: z.string().min(1, "Please enter an answer"),
  securityQuestion2: z.string().min(1, "Please select a security question"),
  securityAnswer2: z.string().min(1, "Please enter an answer"),
});

type SecurityQuestionFormValues = z.infer<typeof securityQuestionSchema>;

const SECURITY_QUESTIONS = [
  "What was the name of your first pet?",
  "What is your mother's maiden name?",
  "What was the name of your first school?",
  "What is the name of the city where you were born?",
  "What was the make of your first car?",
  "What is your oldest sibling's middle name?",
  "What street did you grow up on?",
];

const SetSecurityQuestionComponent = () => {
  const router = useRouter();
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const form = useForm<SecurityQuestionFormValues>({
    resolver: zodResolver(securityQuestionSchema),
    defaultValues: {
      securityQuestion1: "",
      securityAnswer1: "",
      securityQuestion2: "",
      securityAnswer2: "",
    },
  });

  const onSubmit = async (data: SecurityQuestionFormValues) => {
    console.log("Security questions submitted:", data);
    setIsAlertOpen(true);
    // TODO: call security question API
  };

  return (
    <PageTransitionWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Question 1 */}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="securityQuestion1"
          label="Select Security Question 1"
          placeholder="Select a security question"
          options={SECURITY_QUESTIONS.map((q) => ({
            label: q,
            value: q,
          }))}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="securityAnswer1"
          label="Enter the Answer"
          placeholder="Enter your answer"
        />

        {/* Question 2 */}
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="securityQuestion2"
          label="Select Security Question 2"
          placeholder="Select a security question"
          options={SECURITY_QUESTIONS.map((q) => ({
            label: q,
            value: q,
          }))}
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="securityAnswer2"
          label="Enter the Answer"
          placeholder="Enter your answer"
        />

        <CustomButton title="Submit" type="submit" className="w-full" />
      </form>

      <SuccessModal
        isOpen={isAlertOpen}
        setOpen={() => setIsAlertOpen(false)}
        title="Your security questions have been set up"
        description="Keep the answer a secret, not to be shared with anyone"
      />
    </PageTransitionWrapper>
  );
};

export default SetSecurityQuestionComponent;

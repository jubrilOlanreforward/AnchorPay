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

const changePasswordSchema = z
  .object({
    newPassword: z.string().min(4, "Password must be at least 4 characters"),
    confirmNewPassword: z.string().min(4, "Password must be at least 4 characters"),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords don't match",
    path: ["confirmNewPassword"],
  });

type changePasswordFormValues = z.infer<typeof changePasswordSchema>;

const SetNewPasswordComponent = () => {
  const router = useRouter();

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const form = useForm<changePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = async (data: changePasswordFormValues) => {
    router.push(
      `/settings/profile/enter-Password-otp?param=${data.newPassword}`,
    );
  };

  return (
    <PageTransitionWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PASSWORD}
          name="newPassword"
          label="Enter New Password"
          placeholder="Enter your new Password"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PASSWORD}
          name="confirmNewPassword"
          label="Confirm New Password"
          placeholder="Confirm your new Password"
        />

        <CustomButton
          title="change Password"
          type="submit"
          className="w-full"
        />
      </form>
      <SuccessModal
        isOpen={isAlertOpen}
        setOpen={() => setIsAlertOpen(false)}
        title="Your Email has being Changed!"
        description="You will receive a notification shortly, Kindly login with the new Email Address."
      />
    </PageTransitionWrapper>
  );
};

export default SetNewPasswordComponent;

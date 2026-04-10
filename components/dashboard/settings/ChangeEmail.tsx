"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../../ui/shared/CustomButton";
import { useRouter } from "nextjs-toploader/app";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";

const changeEmailSchema = z
  .object({
    oldEmail: z.string().email("Please enter a valid email"),
    newEmail: z.string().email("Please enter a valid email"),
    confirmNewEmail: z.string().email("Please enter a valid email"),
  })
  .refine((data) => data.newEmail === data.confirmNewEmail, {
    message: "Emails don't match",
    path: ["confirmNewEmail"],
  });

type changeEmailFormValues = z.infer<typeof changeEmailSchema>;

const ChangeEmail = () => {
  const router = useRouter();

  const form = useForm<changeEmailFormValues>({
    resolver: zodResolver(changeEmailSchema),
    defaultValues: {
      oldEmail: "",
      newEmail: "",
      confirmNewEmail: "",
    },
  });

  const onSubmit = async (data: changeEmailFormValues) => {
    router.push(
      `/dashboard/settings/profile/enter-email-otp?param=${data.oldEmail}`,
    );
  };

  return (
    <PageTransitionWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.EMAIL}
          name="oldEmail"
          label="Enter Old Email"
          placeholder="Enter your old email"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.EMAIL}
          name="newEmail"
          label="New Email"
          placeholder="Enter your new email"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.EMAIL}
          name="confirmNewEmail"
          label="Confirm New Email"
          placeholder="Confirm your new email"
        />

        <CustomButton title="Change Email" type="submit" className="w-full" />
        <CustomButton
          title="No, Cancel"
          type="button"
          onClick={() => router.back()}
          className="w-full bg-white text-black texy-[13px]"
        />
      </form>
    </PageTransitionWrapper>
  );
};

export default ChangeEmail;

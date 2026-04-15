"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../../ui/shared/CustomButton";
import { useRouter } from "nextjs-toploader/app";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";

const changePhoneNumberSchema = z.object({
  oldPhone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  newPhone: z
    .string()
    .regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
});

type changePhoneNumberFormValues = z.infer<typeof changePhoneNumberSchema>;

const ChangePhoneNumber = () => {
  const router = useRouter();

  const form = useForm<changePhoneNumberFormValues>({
    resolver: zodResolver(changePhoneNumberSchema),
    defaultValues: {
      oldPhone: "",
      newPhone: "",
    },
  });

  const onSubmit = async (data: changePhoneNumberFormValues) => {
    router.push(`/settings/profile/enter-phone-otp?param=${data.oldPhone}`);
  };

  return (
    <PageTransitionWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="oldPhone"
          label="Old Phone Number"
          placeholder="Enter your old phone number"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.PHONE_INPUT}
          name="newPhone"
          label="New Phone Number"
          placeholder="Enter your new phone number"
        />

        <CustomButton
          title="Change Phone Number"
          type="submit"
          className="w-full"
        />
        <CustomButton
          title="No, Cancel"
          type="button"
          className="w-full bg-white text-black texy-[13px]"
          onClick={() => router.back()}
        />
      </form>
    </PageTransitionWrapper>
  );
};

export default ChangePhoneNumber;

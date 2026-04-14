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

const changePinSchema = z
  .object({
    newPin: z.string().min(4, "Pin must be at least 4 characters"),
    confirmNewPin: z.string().min(4, "Pin must be at least 4 characters"),
  })
  .refine((data) => data.newPin === data.confirmNewPin, {
    message: "Pins don't match",
    path: ["confirmNewPin"],
  });

type changePinFormValues = z.infer<typeof changePinSchema>;

const SetTransactionPinComponent = () => {
  const router = useRouter();

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const form = useForm<changePinFormValues>({
    resolver: zodResolver(changePinSchema),
    defaultValues: {
      newPin: "",
      confirmNewPin: "",
    },
  });

  const onSubmit = async (data: changePinFormValues) => {
    router.push(
      `/settings/profile/enter-Pin-otp?param=${data.newPin}`,
    );
  };

  return (
    <PageTransitionWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="newPin"
          label="Enter New Pin"
          placeholder="Enter your new Pin"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="confirmNewPin"
          label="Confirm New Pin"
          placeholder="Confirm your new Pin"
        />

        <CustomButton
          title="Set Transaction Pin"
          type="submit"
          className="w-full"
        />
      </form>
      <SuccessModal
        isOpen={isAlertOpen}
        setOpen={() => setIsAlertOpen(false)}
        title="Success!"
        description="Your transaction PIN has been set successfully. This is personal, do not share with anyone."
      />
    </PageTransitionWrapper>
  );
};

export default SetTransactionPinComponent;

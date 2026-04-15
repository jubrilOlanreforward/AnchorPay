"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../../ui/shared/CustomButton";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import { useRouter } from "nextjs-toploader/app";

const addressDetailsSchema = z.object({
  houseNumber: z.string().min(1, "House number is required"),
  streetAddress: z.string().min(1, "Street address is required"),
  landmark: z.string().min(1, "Landmark is required"),
  city: z.string().min(1, "City is required"),
});

type AddressDetailsFormValues = z.infer<typeof addressDetailsSchema>;

const EnterAddressDetailsComponent = () => {
  const router = useRouter();

  const form = useForm<AddressDetailsFormValues>({
    resolver: zodResolver(addressDetailsSchema),
    defaultValues: {
      houseNumber: "",
      streetAddress: "",
      landmark: "",
      city: "",
    },
  });

  const onSubmit = async (data: AddressDetailsFormValues) => {
    console.log("Address details submitted:", data);
    // TODO: call API then navigate
    router.push("/settings/kyc-verification/upload-proof-of-address");
  };

  return (
    <PageTransitionWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="houseNumber"
          label="House Number"
          placeholder="Enter your house number"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name="streetAddress"
          label="Street Address"
          placeholder="Enter your street address"
        />

        <div className="grid grid-cols-2 gap-4">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="landmark"
            label="Landmark"
            placeholder="Enter a landmark"
          />
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name="city"
            label="City"
            placeholder="Enter your city"
          />
        </div>

        <CustomButton title="Submit" type="submit" className="w-full" />
      </form>
    </PageTransitionWrapper>
  );
};

export default EnterAddressDetailsComponent;

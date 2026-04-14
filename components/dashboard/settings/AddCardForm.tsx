"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "@/components/ui/shared/CustomButton";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CardIcon2 } from "@/components/svg";

const addCardSchema = z.object({
  nameOnCard: z.string().min(2, "Name on card is required").max(50, "Name is too long"),
  cardNumber: z
    .string()
    .min(19, "Card number must be 16 digits")
    .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Invalid card number format"),
  expiryDate: z
    .string()
    .regex(/^\d{2}\/\d{2}$/, "Expiry date must be MM/YY")
    .refine((value) => {
      const [month, year] = value.split("/").map(Number);
      return month >= 1 && month <= 12;
    }, "Invalid month"),
  securityCode: z.string().regex(/^\d{3,4}$/, "Security code must be 3 or 4 digits"),
});

type AddCardFormValues = z.infer<typeof addCardSchema>;

const AddCardForm = () => {
  const router = useRouter();
  const form = useForm<AddCardFormValues>({
    resolver: zodResolver(addCardSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      nameOnCard: "",
      cardNumber: "",
      expiryDate: "",
      securityCode: "",
    },
  });

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(\d{4})/g, "$1 ")
      .trim();
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const formattedValue = formatCardNumber(target.value);
    form.setValue("cardNumber", formattedValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    let { value } = target;
    value = value.replace(/\D/g, "");
    if (value.length >= 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    form.setValue("expiryDate", value, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleSecurityCodeChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const numericValue = value.replace(/\D/g, "").slice(0, 4);
    form.setValue("securityCode", numericValue, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const onSubmit = async (data: AddCardFormValues) => {
    console.log("Card added:", data);
    // Here you would typically make an API call to save the card
    // After successful card addition, navigate to OTP verification
    router.push("/dashboard/settings/cards-accounts/verify-card-otp");
  };

  return (
    <PageTransitionWrapper>
      <div className='flex flex-col gap-8 flex-1 overflow-y-auto font-poppins pb-10'>
        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-6 max-w-md'>
          {/* Name on Card */}
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name='nameOnCard'
            label='Name on Card'
            placeholder='John Doe'
            icon={<CardIcon2 />}
          />

          {/* Card Number */}
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name='cardNumber'
            label='Card Number'
            placeholder='0000 0000 0000 0000'
            onChange={handleCardNumberChange}
          />

          {/* Expiry Date and Security Code Container */}
          <div className='grid grid-cols-2 gap-4'>
            {/* Expiry Date */}
            <div>
              <CustomFormField
                control={form.control}
                fieldType={FormFieldType.INPUT}
                name='expiryDate'
                label='Expiry Date'
                placeholder='MM/YY'
                onChange={handleExpiryChange}
              />
            </div>

            {/* Security Code */}
            <div>
              <CustomFormField
                control={form.control}
                fieldType={FormFieldType.PASSWORD}
                name='securityCode'
                label='Security Code'
                placeholder='CVV'
                onChange={handleSecurityCodeChange}
              />
            </div>
          </div>

          {/* Buttons */}
          <div className='flex flex-col gap-3 pt-4'>
            <CustomButton
              title='Add Card'
              type='submit'
              className='w-full disabled:bg-gray-400 disabled:text-gray-500'
              disabled={!form.formState.isValid}
            />
          </div>
        </form>
      </div>
    </PageTransitionWrapper>
  );
};

export default AddCardForm;

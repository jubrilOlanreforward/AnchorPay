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
import { useState, useEffect } from "react";

const addAccountSchema = z.object({
  accountName: z.string().min(2, "Account name is required").max(100, "Account name is too long"),
  accountNumber: z.string().regex(/^\d{10}$/, "Account number must be 10 digits"),
  bankName: z.string().min(2, "Bank name is required").max(50, "Bank name is too long"),
});

type AddAccountFormValues = z.infer<typeof addAccountSchema>;

const BANK_OPTIONS = [
  { value: "access-bank", label: "Access Bank" },
  { value: "fidelity-bank", label: "Fidelity Bank" },
  { value: "first-bank", label: "First Bank" },
  { value: "gtb", label: "Guaranty Trust Bank (GTB)" },
  { value: "uba", label: "United Bank for Africa (UBA)" },
  { value: "union-bank", label: "Union Bank of Nigeria" },
  { value: "zenith-bank", label: "Zenith Bank" },
  { value: "wema-bank", label: "Wema Bank" },
  { value: "stanbic-bank", label: "Stanbic IBTC Bank" },
  { value: "ecobank", label: "Ecobank" },
];

const AddBankForm = () => {
  const router = useRouter();
  const [showAccountName, setShowAccountName] = useState(false);
  const form = useForm<AddAccountFormValues>({
    resolver: zodResolver(addAccountSchema),
    defaultValues: {
      accountName: "",
      accountNumber: "",
      bankName: "",
    },
  });

  const watchedBankName = form.watch("bankName");
  const watchedAccountNumber = form.watch("accountNumber");
  const watchedAccountName = form.watch("accountName");

  useEffect(() => {
    if (watchedBankName && watchedAccountNumber.length === 10) {
      setShowAccountName(true);
    } else {
      setShowAccountName(false);
    }
  }, [watchedBankName, watchedAccountNumber]);

  const handleAccountNumberChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const target = e.target as HTMLInputElement;
    const { value } = target;
    const numericValue = value.replace(/\D/g, "").slice(0, 10);
    form.setValue("accountNumber", numericValue);
  };

  const isFormComplete =
    watchedBankName && watchedAccountNumber.length === 10 && watchedAccountName.length >= 2;

  const onSubmit = async (data: AddAccountFormValues) => {
    console.log("Account added:", data);
    // Here you would typically make an API call to save the account
    // After successful account addition, navigate to OTP verification
    router.push("/settings/cards-accounts/verify-bank-otp");
  };

  return (
    <PageTransitionWrapper>
      <div className='flex flex-col gap-8 flex-1 overflow-y-auto font-poppins pb-10'>
        <div>
          <h1 className='text-2xl font-bold text-gray-900'>Add Bank Account</h1>
          <p className='text-gray-600 mt-2'>Enter your bank account details to proceed</p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-6 max-w-md'>
          {/* Bank Name */}
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.SELECT}
            name='bankName'
            label='Select Bank'
            placeholder='Choose your bank'
            options={BANK_OPTIONS}
          />

          {/* Account Number */}
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name='accountNumber'
            label='Account Number'
            placeholder='0123456789'
            onChange={handleAccountNumberChange}
          />

          {/* Account Name - shown only after bank and account number are filled */}
          {showAccountName && (
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              name='accountName'
              label='Account Name'
              placeholder='John Doe'
            />
          )}

          {/* Buttons */}
          <div className='flex flex-col gap-3 pt-4'>
            <CustomButton
              title='Add Card'
              type='submit'
              className='w-full disabled:bg-neutral-200 disabled:text-gray-500'
              disabled={!form.formState.isValid}
            />
          </div>
        </form>
      </div>
    </PageTransitionWrapper>
  );
};

export default AddBankForm;

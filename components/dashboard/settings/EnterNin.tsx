"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import CustomFormField from "../../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../../ui/shared/CustomButton";
import Image from "next/image";
import NINImage from "@/public/images/nin/ninsample.png";
import { useState, useRef, useEffect } from "react";
import { CheckIcon } from "@/components/svg";

// NIN schema (11 digits only)
const ninSchema = z.object({
  ninNumber: z.string().regex(/^\d{11}$/, "NIN must be exactly 11 digits"),
});

type NinFormValues = z.infer<typeof ninSchema>;

const EnterNin = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const toastRef = useRef<HTMLDivElement | null>(null);

  const form = useForm<NinFormValues>({
    resolver: zodResolver(ninSchema),
    defaultValues: {
      ninNumber: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: NinFormValues) => {
    console.log("NIN Submitted:", data.ninNumber);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSuccess(true);
  };

  useEffect(() => {
    if (isSuccess && toastRef.current) {
      toastRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => setIsSuccess(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  const successToast = () => (
    <div
      ref={toastRef}
      className='flex items-center gap-3 border-l-4 border-green-600 bg-green-50 p-4 rounded-md absolute -top-50 w-full z-10 left-0 animate__animated animate__fadeInUp'
    >
      <CheckIcon />
      <div className='my-2'>
        <p className='text-green-700 font-semibold text-base font-poppins'>
          NIN Verification Successful
        </p>
        <p className='text-sm text-gray-700 font-montserrat'>
          Your NIN has been verified successfully and you can now proceed to take your first loan.
        </p>
      </div>
    </div>
  );

  return (
    <PageTransitionWrapper>
      <div className='relative'>
        {isSuccess && successToast()}

        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            name='ninNumber'
            label='National Identification Number'
            placeholder='Enter Number here'
          />

          <p className='text-gray-600 -mt-4 text-sm'>
            Can’t remember my NIN?{" "}
            <a href='tel:*565*0#' className='text-primary_one_600'>
              Dial *565*0#
            </a>
          </p>

          <div className='mt-8 flex flex-col gap-4'>
            <h2 className='text-base font-poppins font-semibold'>NIN Sample</h2>
            <p className='text-sm'>Look for the highlighted portion on your ID</p>

            <div className='bg-gray-200 flex items-center justify-center p-2 rounded-md'>
              <Image src={NINImage} alt='nin sample' />
            </div>
          </div>

          <CustomButton
            title={form.formState.isSubmitting ? "Verifying..." : "Continue"}
            type='submit'
            className={`w-full ${
              form.formState.isValid
                ? "bg-primary_one_600 text-white"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            disabled={!form.formState.isValid || form.formState.isSubmitting}
          />
        </form>
      </div>
    </PageTransitionWrapper>
  );
};

export default EnterNin;

"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import CustomFormField from "../../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../../ui/shared/CustomButton";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";

// ✅ BVN schema (11 digits only)
const bvnSchema = z.object({
  bvnNumber: z.string().regex(/^\d{11}$/, "BVN must be exactly 11 digits"),
});

type BvnFormValues = z.infer<typeof bvnSchema>;

const VerifyBvn = () => {
  const router = useRouter();

  const form = useForm<BvnFormValues>({
    resolver: zodResolver(bvnSchema),
    defaultValues: {
      bvnNumber: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: BvnFormValues) => {
    //call API
    router.push(`/dashboard/settings/enter-bvn-otp`);
  };

  return (
    <PageTransitionWrapper>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          name='bvnNumber'
          label='Bank Verification Number'
          placeholder='Enter your bank verification Number (BVN)'
        />
        <p className='text-gray-600 -mt-4 text-sm'>
          Can’t remember my BVN?{" "}
          <Link href='Tel:*565*0#' className='text-primary_one_600'>
            Dial *565*0#
          </Link>
        </p>

        <CustomButton
          title='Continue'
          type='submit'
          className={`w-full ${
            form.formState.isValid
              ? "bg-primary_one_600 text-white"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!form.formState.isValid}
        />
      </form>
    </PageTransitionWrapper>
  );
};

export default VerifyBvn;

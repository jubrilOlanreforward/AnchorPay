import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomFormField from "../ui/shared/InputField";
import { FormFieldType } from "@/types/types";
import CustomButton from "../ui/shared/CustomButton";
import Link from "next/link";
import TermsAndConditions from "./TermsAndConditions";

const formSchema = z.object({
  bankVerificationNumber: z
    .string()
    .length(11, "BVN must be exactly 11 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const EnterBankVerificationNumber = ({ onNext }: { onNext?: () => void }) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bankVerificationNumber: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", data);
    // Handle form submission
    onNext?.();
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-5">
      <CustomFormField
        control={form.control}
        fieldType={FormFieldType.INPUT}
        name="bankVerificationNumber"
        label="Bank Verification Number"
        placeholder="Enter your bank verification Number (BVN)"
      />
      <p className="text-[14px] mb-10 text-[var(--color-muted-cta)]">
        {`Can’t remember my BVN?`}{" "}
        <button type="button" className="text-primary_one_600 font-[600] ">
          Dial *565*0#
        </button>
      </p>
      <CustomButton title="Continue" type="submit" className="w-full" />
      <TermsAndConditions />
    </form>
  );
};

export default EnterBankVerificationNumber;

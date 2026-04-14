import React, { useState } from "react";
import { Info } from "lucide-react";
import { LoanStepComponentProps, LOAN_REASONS } from "@/lib/constants/loanConstants";
import { LoanInput, ActionButtons } from "../LoanUIComponents";

const LoanDetails = ({ onNext, onPrev }: LoanStepComponentProps) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [reasonForLoan, setReasonForLoan] = useState("");
  const [errors, setErrors] = useState<{ amount?: string; reason?: string }>({});

  const validateForm = () => {
    const newErrors: { amount?: string; reason?: string } = {};

    if (!loanAmount) {
      newErrors.amount = "Loan amount is required";
    } else {
      const amount = parseInt(loanAmount.replace(/,/g, ""));
      if (isNaN(amount) || amount < 500000 || amount > 5000000) {
        newErrors.amount = "Loan amount must be between ₦500,000 and ₦5,000,000";
      }
    }

    if (!reasonForLoan) {
      newErrors.reason = "Please select a reason for the loan";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      // Store data in localStorage or context for multi-step flow
      const formData = {
        loanAmount,
        reasonForLoan,
      };
      localStorage.setItem("loanFormData", JSON.stringify(formData));
      onNext?.();
    }
  };

  const formatCurrency = (value: string) => {
    const number = value.replace(/\D/g, "");
    return number.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setLoanAmount(formatted);
    if (errors.amount) setErrors({ ...errors, amount: undefined });
  };

  return (
    <div className="w-full">
      <div className="grid gap-6 mb-2">
        <LoanInput
          label="Loan Amount"
          prefix="₦"
          placeholder="500,000 - 5,000,000"
          value={loanAmount}
          onChange={handleAmountChange}
          error={errors.amount}
          icon={<Info className="w-4.5 h-4.5" />}
        />

        <div className="flex flex-col gap-1.5">
          <label htmlFor="reason" className="font-semibold text-[#344054] text-[15px]">
            Reason for Loan
          </label>
          <div className="relative">
            <select
              id="reason"
              value={reasonForLoan}
              onChange={(e) => {
                setReasonForLoan(e.target.value);
                if (errors.reason) setErrors({ ...errors, reason: undefined });
              }}
              className={`w-full rounded-2xl h-[56px] px-4 shadow-sm border transition-all outline-none text-[16px] font-medium appearance-none ${
                errors.reason
                  ? "border-red-500 bg-red-50 focus:border-red-600"
                  : "border-gray-200 bg-[#FAFAFA] focus:border-primary_one_600 focus:bg-white"
              }`}
            >
              <option value="" hidden>
                Select reason
              </option>
              {LOAN_REASONS.map((reason) => (
                <option key={reason.value} value={reason.value}>
                  {reason.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </div>
          </div>
          {errors.reason && (
            <p className="text-red-500 text-[13px] font-medium px-1">{errors.reason}</p>
          )}
        </div>
      </div>

      <ActionButtons onNext={handleNext} onPrev={onPrev} />
    </div>
  );
};

export default LoanDetails;

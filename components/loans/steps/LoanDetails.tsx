"use client";

import React, { useState } from "react";
import { Info } from "lucide-react";
import { LoanStepComponentProps, LOAN_REASONS } from "@/lib/constants/loanConstants";

const LoanDetails = ({ onNext }: LoanStepComponentProps) => {
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
      <div className="grid gap-6 mb-8">
        {/* Loan Amount */}
        <div className="flex flex-col gap-2">
          <label htmlFor="amount" className="font-semibold text-heading text-[15px]">
            Loan Amount
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 font-semibold text-[15px]">
              ₦
            </div>
            <input
              id="amount"
              placeholder="500,000 - 5,000,000"
              value={loanAmount}
              onChange={handleAmountChange}
              className={`w-full rounded-2xl h-13 pl-10 pr-4 shadow-sm border transition-colors outline-none text-[15px] placeholder:text-gray-400 ${
                errors.amount
                  ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-200"
                  : "border-gray-200 focus:border-primary_one_600 focus:ring-1 focus:ring-primary_one_600 bg-[#fafafa]"
              }`}
            />
            {!errors.amount && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                <Info className="w-4.5 h-4.5" />
              </span>
            )}
          </div>
          {errors.amount && (
            <p className="text-red-500 text-[13px] font-medium">{errors.amount}</p>
          )}
        </div>

        {/* Reason for Loan */}
        <div className="flex flex-col gap-2">
          <label htmlFor="reason" className="font-semibold text-heading text-[15px]">
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
              className={`w-full rounded-2xl h-13 px-4 shadow-sm border transition-colors outline-none text-[15px] appearance-none ${
                errors.reason
                  ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-200"
                  : "border-gray-200 focus:border-primary_one_600 focus:ring-1 focus:ring-primary_one_600 bg-[#fafafa]"
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
            {/* Chevron icon */}
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
            <p className="text-red-500 text-[13px] font-medium">{errors.reason}</p>
          )}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="w-full bg-primary_one_600 hover:bg-primary_one_700 text-white rounded-full h-13 text-[15px] font-semibold shadow-sm transition-colors duration-200"
      >
        Continue
      </button>
    </div>
  );
};

export default LoanDetails;

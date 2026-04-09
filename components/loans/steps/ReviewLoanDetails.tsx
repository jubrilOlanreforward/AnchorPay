"use client";

import React, { useState, useEffect } from "react";
import { LoanStepComponentProps, LOAN_REASONS, TENOR_OPTIONS } from "@/lib/constants/loanConstants";
import { Edit2 } from "lucide-react";

interface LoanFormData {
  loanAmount?: string;
  reasonForLoan?: string;
  accountType?: "unionbank" | "other" | null;
  tenor?: number | null;
}

const ReviewLoanDetails = ({ onNext }: LoanStepComponentProps) => {
  const [formData, setFormData] = useState<LoanFormData>({});

  useEffect(() => {
    const savedData = localStorage.getItem("loanFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const getReason = (value: string) => {
    return LOAN_REASONS.find((r) => r.value === value)?.label || value;
  };

  const getTenor = (value: number) => {
    return TENOR_OPTIONS.find((t) => t.value === value)?.label || `${value} months`;
  };

  const getAccountType = (type: string) => {
    return type === "unionbank" ? "Union Bank" : "Other Banks";
  };

  const handleNext = () => {
    onNext?.();
  };

  const handleEdit = (step: string) => {
    window.history.back();
  };

  return (
    <div className="w-full">
      <p className="text-gray-600 text-[14px] mb-6">
        Please review your loan application details before proceeding
      </p>

      <div className="space-y-4 mb-8">
        {/* Loan Amount */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[13px] text-gray-500 font-medium">Loan Amount</p>
            <button
              onClick={() => handleEdit("loan-details")}
              className="text-primary_one_600 hover:text-primary_one_700 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[20px] font-bold text-heading">
            ₦{formData.loanAmount || "0"}
          </p>
        </div>

        {/* Reason for Loan */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[13px] text-gray-500 font-medium">Reason for Loan</p>
            <button
              onClick={() => handleEdit("loan-details")}
              className="text-primary_one_600 hover:text-primary_one_700 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[15px] font-semibold text-[#344054]">
            {getReason(formData.reasonForLoan || "")}
          </p>
        </div>

        {/* Account Type */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[13px] text-gray-500 font-medium">Account Type</p>
            <button
              onClick={() => handleEdit("account-selection")}
              className="text-primary_one_600 hover:text-primary_one_700 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[15px] font-semibold text-[#344054]">
            {getAccountType(formData.accountType || "")}
          </p>
        </div>

        {/* Tenor */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex justify-between items-start mb-3">
            <p className="text-[13px] text-gray-500 font-medium">Repayment Tenor</p>
            <button
              onClick={() => handleEdit("tenor-selection")}
              className="text-primary_one_600 hover:text-primary_one_700 transition-colors"
            >
              <Edit2 className="w-4 h-4" />
            </button>
          </div>
          <p className="text-[15px] font-semibold text-[#344054]">
            {getTenor(formData.tenor || 0)}
          </p>
        </div>

        {/* Summary Box */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-5 mt-6">
          <p className="text-[13px] text-gray-600 mb-3">Loan Summary</p>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-[13px] text-gray-600">Principal Amount</p>
              <p className="text-[13px] font-semibold text-gray-800">
                ₦{formData.loanAmount || "0"}
              </p>
            </div>
            <div className="border-t border-blue-200 my-2"></div>
            <div className="flex justify-between">
              <p className="text-[13px] text-gray-600">Estimated Interest</p>
              <p className="text-[13px] font-semibold text-gray-800">Calculated after approval</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[13px] text-gray-600">Monthly Payment</p>
              <p className="text-[13px] font-semibold text-gray-800">Calculated after approval</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start gap-3 mb-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
        <input
          type="checkbox"
          id="terms"
          className="mt-1 w-4 h-4 text-[#1f7aea] border-gray-300 rounded cursor-pointer"
        />
        <label htmlFor="terms" className="text-[12px] text-gray-600 leading-relaxed">
          I agree to the terms and conditions and understand that my loan application will be
          reviewed and approved based on my credit profile and financial history.
        </label>
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => window.history.back()}
          className="flex-1 border border-gray-300 text-gray-700 rounded-full h-13 text-[15px] font-semibold shadow-sm transition-colors hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 bg-primary_one_600 hover:bg-primary_one_700 text-white rounded-full h-13 text-[15px] font-semibold shadow-sm transition-colors"
        >
          Confirm & Apply
        </button>
      </div>
    </div>
  );
};

export default ReviewLoanDetails;

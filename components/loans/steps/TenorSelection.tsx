"use client";

import React, { useState } from "react";
import { LoanStepComponentProps, TENOR_OPTIONS } from "@/lib/constants/loanConstants";
import { ActionButtons } from "../LoanUIComponents";
import { Check } from "lucide-react";

const TenorSelection = ({ onNext, onPrev }: LoanStepComponentProps) => {
  const [selectedTenor, setSelectedTenor] = useState<number | null>(null);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!selectedTenor) {
      setError("Please select a tenor");
      return;
    }

    const formData = JSON.parse(localStorage.getItem("loanFormData") || "{}");
    localStorage.setItem(
      "loanFormData",
      JSON.stringify({
        ...formData,
        tenor: selectedTenor,
      })
    );
    onNext?.();
  };

  const [amount] = useState(() => {
    const data = JSON.parse(localStorage.getItem("loanFormData") || "{}");
    return parseFloat(data.loanAmount?.replace(/,/g, "") || "0");
  });

  const calculateEstimate = (months: number) => {
    if (!amount) return "0.00";
    const interestRate = 0.05; // 5% example
    const total = amount + amount * interestRate;
    return (total / months).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="w-full">
      <p className="text-gray-500 text-[14px] font-medium mb-6 leading-relaxed">
        Choose how long you want to repay your loan
      </p>

      <div className="grid grid-cols-2 gap-4">
        {TENOR_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => {
              setSelectedTenor(option.value);
              setError("");
            }}
            className={`p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-2 ${
              selectedTenor === option.value
                ? "border-primary_one_600 bg-blue-50 shadow-sm"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <p className="font-bold text-[16px] text-[#344054]">{option.label}</p>
            {selectedTenor === option.value ? (
              <div className="w-5 h-5 rounded-full bg-primary_one_600 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
            ) : (
              <div className="w-5 h-5 rounded-full border-2 border-gray-200" />
            )}
          </button>
        ))}
      </div>

      {error && (
        <p className="text-red-500 text-[13px] font-medium mt-4 bg-red-50 p-2 rounded-lg border border-red-100 italic">
          {error}
        </p>
      )}

      {selectedTenor && (
        <div className="bg-[#F9FAFB] border border-gray-100 rounded-2xl p-5 mt-6 flex flex-col gap-1">
          <p className="text-[14px] text-gray-500 font-medium">Estimated monthly payment</p>
          <div className="flex items-baseline gap-1.5">
            <p className="text-[30px] font-bold text-primary_one_600">₦</p>
            <p className="text-[30px] font-bold text-primary_one_600">
              {calculateEstimate(selectedTenor)}
            </p>
            <p className="text-[14px] text-gray-400 font-medium ml-1">/ month</p>
          </div>
        </div>
      )}

      <ActionButtons onNext={handleNext} onPrev={onPrev} />
    </div>
  );
};

export default TenorSelection;

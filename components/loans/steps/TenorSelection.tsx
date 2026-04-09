"use client";

import React, { useState } from "react";
import { LoanStepComponentProps, TENOR_OPTIONS } from "@/lib/constants/loanConstants";
import { Check } from "lucide-react";

const TenorSelection = ({ onNext }: LoanStepComponentProps) => {
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

  return (
    <div className="w-full">
      <p className="text-gray-600 text-[14px] mb-6">
        Choose how long you want to repay your loan
      </p>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {TENOR_OPTIONS.map((option) => (
          <button
            key={option.value}
            onClick={() => {
              setSelectedTenor(option.value);
              setError("");
            }}
            className={`p-5 rounded-2xl border-2 transition-all text-center ${
              selectedTenor === option.value
              ? "border-primary_one_600 bg-blue-50"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className="flex flex-col items-center gap-3">
              <p className="font-semibold text-[16px] text-heading">{option.label}</p>
              {selectedTenor === option.value && (
                <div className="w-5 h-5 rounded-full bg-primary_one_600 flex items-center justify-center">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {error && <p className="text-red-500 text-[13px] font-medium mb-4">{error}</p>}

      {/* Display estimated monthly amount */}
      {selectedTenor && (
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-4 mb-8">
          <p className="text-[13px] text-gray-600 mb-2">Estimated monthly payment</p>
          <div className="flex items-baseline gap-2">
            <p className="text-[24px] font-bold text-primary_one_600">₦</p>
            <p className="text-[24px] font-bold text-primary_one_600">XX,XXX</p>
            <p className="text-[13px] text-gray-500">per month</p>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => {
            const formData = JSON.parse(localStorage.getItem("loanFormData") || "{}");
            formData.tenor = null;
            localStorage.setItem("loanFormData", JSON.stringify(formData));
            window.history.back();
          }}
          className="flex-1 border border-gray-300 text-gray-700 rounded-full h-13 text-[15px] font-semibold shadow-sm transition-colors hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="flex-1 bg-primary_one_600 hover:bg-primary_one_700 text-white rounded-full h-13 text-[15px] font-semibold shadow-sm transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TenorSelection;

"use client";

import React, { useState } from "react";
import { LoanStepComponentProps } from "@/lib/constants/loanConstants";
import { Check } from "lucide-react";

const AccountSelection = ({ onNext, onPrev }: LoanStepComponentProps) => {
  const [selectedAccount, setSelectedAccount] = useState<"unionbank" | "other" | null>(null);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!selectedAccount) {
      setError("Please select an account type");
      return;
    }

    const formData = JSON.parse(localStorage.getItem("loanFormData") || "{}");
    localStorage.setItem(
      "loanFormData",
      JSON.stringify({
        ...formData,
        accountType: selectedAccount,
      })
    );
    onNext?.();
  };

  return (
    <div className="w-full">
      <p className="text-gray-600 text-[14px] mb-6">
        Select the bank account you want to link for this loan
      </p>

      <div className="grid gap-4 mb-8">
        {/* Unionbank Option */}
        <button
          onClick={() => {
            setSelectedAccount("unionbank");
            setError("");
          }}
          className={`p-5 rounded-2xl border-2 transition-all text-left ${
            selectedAccount === "unionbank"
              ? "border-primary_one_600 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-[15px] text-heading">Union Bank</p>
              <p className="text-[13px] text-gray-500 mt-1">
                Exclusive to Union Bank account owners
              </p>
            </div>
            {selectedAccount === "unionbank" && (
              <div className="shrink-0 w-6 h-6 rounded-full bg-primary_one_600 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </button>

        {/* Other Banks Option */}
        <button
          onClick={() => {
            setSelectedAccount("other");
            setError("");
          }}
          className={`p-5 rounded-2xl border-2 transition-all text-left ${
            selectedAccount === "other"
              ? "border-primary_one_600 bg-blue-50"
              : "border-gray-200 bg-white hover:border-gray-300"
          }`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-[15px] text-heading">Other Banks</p>
              <p className="text-[13px] text-gray-500 mt-1">
                Available to all bank account owners
              </p>
            </div>
            {selectedAccount === "other" && (
              <div className="shrink-0 w-6 h-6 rounded-full bg-primary_one_600 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </button>
      </div>

      {error && <p className="text-red-500 text-[13px] font-medium mb-4">{error}</p>}

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={() => {
            onPrev?.();
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

export default AccountSelection;

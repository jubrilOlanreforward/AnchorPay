"use client";

import React, { useState } from "react";
import { LoanStepComponentProps } from "@/lib/constants/loanConstants";
import { SelectionCard, ActionButtons } from "../LoanUIComponents";
import { CircleDollarSign, Landmark } from "lucide-react";

const LoanTypeSelection = ({ onNext }: LoanStepComponentProps) => {
  const [selectedType, setSelectedType] = useState<"union-kash" | "others" | null>(null);
  const [error, setError] = useState("");

  const handleNext = () => {
    if (!selectedType) {
      setError("Please select a loan type to continue");
      return;
    }

    // Save to local storage for persistence across steps
    const existingData = JSON.parse(localStorage.getItem("loanFormData") || "{}");
    localStorage.setItem(
      "loanFormData",
      JSON.stringify({ ...existingData, loanType: selectedType })
    );

    onNext?.();
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4 mb-2">
        <h2 className="text-[18px] font-semibold text-[#344054]">
          Booster loan is in two forms!
        </h2>
        <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
          Select a loan option and get started
        </p>
      </div>

      <div className="grid gap-4 mt-6">
        <SelectionCard
          title="UnionKash"
          description="Available to Union Bank account owners"
          icon={<Landmark className="w-6 h-6 text-primary_one_600" />}
          selected={selectedType === "union-kash"}
          onClick={() => {
            setSelectedType("union-kash");
            setError("");
          }}
        />

        <SelectionCard
          title="Others"
          description="Available to all bank account owners"
          icon={<CircleDollarSign className="w-6 h-6 text-primary_one_600" />}
          selected={selectedType === "others"}
          onClick={() => {
            setSelectedType("others");
            setError("");
          }}
        />
      </div>

      {error && (
        <p className="text-red-500 text-[13px] font-medium mt-4 bg-red-50 p-2 rounded-lg border border-red-100 italic">
          {error}
        </p>
      )}

      <ActionButtons onNext={handleNext} />
    </div>
  );
};

export default LoanTypeSelection;

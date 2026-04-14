"use client";

import React, { useState } from "react";
import { LoanStepComponentProps } from "@/lib/constants/loanConstants";
import { SelectionCard, ActionButtons } from "../LoanUIComponents";
import { Landmark, Building2 } from "lucide-react";

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
      <p className="text-gray-500 text-[14px] font-medium mb-6 leading-relaxed">
        Select the bank account you want to link for this loan
      </p>

      <div className="grid gap-4">
        <SelectionCard
          title="Union Bank"
          description="Exclusive to Union Bank account owners"
          icon={<Landmark className="w-6 h-6 text-primary_one_600" />}
          selected={selectedAccount === "unionbank"}
          onClick={() => {
            setSelectedAccount("unionbank");
            setError("");
          }}
        />

        <SelectionCard
          title="Other Banks"
          description="Available to all bank account owners"
          icon={<Building2 className="w-6 h-6 text-primary_one_600" />}
          selected={selectedAccount === "other"}
          onClick={() => {
            setSelectedAccount("other");
            setError("");
          }}
        />
      </div>

      {error && (
        <p className="text-red-500 text-[13px] font-medium mt-4 bg-red-50 p-2 rounded-lg border border-red-100 italic">
          {error}
        </p>
      )}

      <ActionButtons onNext={handleNext} onPrev={onPrev} />
    </div>
  );
};

export default AccountSelection;

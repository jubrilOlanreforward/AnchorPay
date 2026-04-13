import React, { useState } from "react";
import { LoanStepComponentProps, PROVIDER_OPTIONS } from "@/lib/constants/loanConstants";
import { ProviderCard, ActionButtons } from "../LoanUIComponents";

const ProviderSelection = ({ onNext, onPrev }: LoanStepComponentProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedId) {
        const data = JSON.parse(localStorage.getItem("loanFormData") || "{}");
        localStorage.setItem("loanFormData", JSON.stringify({ ...data, selectedProvider: selectedId }));
        onNext?.();
    }
  };

  return (
    <div className="w-full">
      <p className="text-gray-500 text-[14px] font-medium mb-6 leading-relaxed">
        Select your preferred loan provider from the options below.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {PROVIDER_OPTIONS.map((provider) => (
          <ProviderCard
            key={provider.id}
            name={provider.name}
            logo={provider.logo}
            selected={selectedId === provider.id}
            onClick={() => {
                setSelectedId(provider.id);
            }}
          />
        ))}
      </div>
      <ActionButtons onNext={handleNext} onPrev={onPrev} isNextDisabled={!selectedId} />
    </div>
  );
};

export default ProviderSelection;

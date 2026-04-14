import React, { useState } from "react";
import { LoanStepComponentProps, LOAN_OFFERS } from "@/lib/constants/loanConstants";
import { OfferCard, ActionButtons } from "../LoanUIComponents";

const OfferSelection = ({ onNext, onPrev }: LoanStepComponentProps) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleNext = () => {
    if (selectedId) {
        const data = JSON.parse(localStorage.getItem("loanFormData") || "{}");
        localStorage.setItem("loanFormData", JSON.stringify({ ...data, selectedOffer: selectedId }));
        onNext?.();
    }
  };

  return (
    <div className="w-full">
      <p className="text-gray-500 text-[14px] font-medium mb-6 leading-relaxed">
        We found 4 loan offers for you. Select one to proceed with your application.
      </p>

      <div className="flex flex-col gap-6">
        {LOAN_OFFERS.map((offer) => (
          <OfferCard
            key={offer.id}
            amount={offer.amount}
            rate={offer.rate}
            tenure={offer.tenure}
            selected={selectedId === offer.id}
            onClick={() => {
                setSelectedId(offer.id);
            }}
          />
        ))}
      </div>
      <ActionButtons onNext={handleNext} onPrev={onPrev} isNextDisabled={!selectedId} />
    </div>
  );
};

export default OfferSelection;

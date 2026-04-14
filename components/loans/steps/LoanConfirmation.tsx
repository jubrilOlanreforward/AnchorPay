"use client";

import React, { useEffect, useState } from "react";
import { LoanStepComponentProps } from "@/lib/constants/loanConstants";
import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LoanFormData {
  loanAmount?: string;
  tenure?: number;
}

const LoanConfirmation = ({ onClose }: LoanStepComponentProps) => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoanFormData>({});
  const [applicationId] = useState(
    `LN-${Date.now().toString().slice(-8).toUpperCase()}`
  );

  useEffect(() => {
    const savedData = localStorage.getItem("loanFormData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleComplete = () => {
    localStorage.removeItem("loanFormData");
    if (onClose) {
      onClose();
    }
    router.push("/loans");
  };

  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Success Icon */}
      <div className="mb-8 mt-4">
        <div className="w-24 h-24 bg-[#ECFDF3] rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-[#F6FEF9]">
          <Check className="w-12 h-12 text-[#12B76A]" strokeWidth={3} />
        </div>
        <h2 className="text-[28px] font-bold text-[#101828] mb-3">
          Application Successful
        </h2>
        <p className="text-[15px] text-[#667085] leading-relaxed max-w-[320px] mx-auto font-medium">
          Your loan application has been received and is being processed.
        </p>
      </div>

      {/* Application Details Card */}
      <div className="w-full bg-[#F9FAFB] border border-gray-100 rounded-3xl p-6 mb-8">
        <div className="space-y-6">
          {/* Application ID */}
          <div className="text-center pb-5 border-b border-gray-200 border-dashed">
            <p className="text-[13px] text-gray-500 font-bold uppercase tracking-wider mb-2">Application ID</p>
            <p className="text-[20px] font-bold text-primary_one_600 font-mono tracking-tight">
              {applicationId}
            </p>
          </div>

          {/* What Happens Next */}
          <div className="text-left">
            <p className="text-[14px] font-bold text-[#344054] mb-5">
              What happens next:
            </p>
            <div className="space-y-5">
              {[
                {
                  step: "1",
                  title: "Verification",
                  desc: "We'll verify your information and documents",
                },
                {
                  step: "2",
                  title: "Credit Assessment",
                  desc: "Your credit profile will be evaluated",
                },
                {
                  step: "3",
                  title: "Approval & Terms",
                  desc: "You'll receive approval status and terms",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="shrink-0 w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
                    <p className="text-primary_one_600 text-[13px] font-bold">{item.step}</p>
                  </div>
                  <div>
                    <p className="text-[14px] font-bold text-[#344054]">
                      {item.title}
                    </p>
                    <p className="text-[12px] text-gray-500 font-medium leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-3">
        <button
          onClick={handleComplete}
          className="w-full bg-primary_one_600 hover:bg-primary_one_700 text-white rounded-full h-[60px] text-[16px] font-bold shadow-md transition-all hover:scale-[1.01] active:scale-95"
        >
          View Your Loans
        </button>
        <Link href="/dashboard" className="w-full">
          <button className="w-full text-gray-400 hover:text-gray-600 h-[48px] text-[14px] font-bold transition-colors">
            Return to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoanConfirmation;

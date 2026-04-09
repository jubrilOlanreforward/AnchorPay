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
    router.push("/dashboard/loans");
  };

  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Success Icon */}
      <div className="mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-10 h-10 text-green-600" strokeWidth={3} />
        </div>
        <h2 className="text-[24px] font-bold text-heading mb-2">
          Loan Application Submitted
        </h2>
        <p className="text-[14px] text-gray-600 leading-relaxed">
          Your loan application has been successfully submitted. We'll review your
          application and get back to you within 2-3 business days.
        </p>
      </div>

      {/* Application Details Card */}
      <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 mb-6">
        <div className="space-y-4">
          {/* Application ID */}
          <div className="text-center pb-4 border-b border-blue-200">
            <p className="text-[13px] text-gray-600 mb-2">Application ID</p>
            <p className="text-[18px] font-bold text-primary_one_600 font-mono">
              {applicationId}
            </p>
          </div>

          {/* What Happens Next */}
          <div>
            <p className="text-[13px] font-semibold text-gray-800 mb-3 text-left">
              What happens next:
            </p>
            <div className="space-y-3">
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
                  title: "Approval",
                  desc: "You'll receive approval status and terms",
                },
                {
                  step: "4",
                  title: "Disbursement",
                  desc: "Funds will be transferred to your account",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-3 text-left">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-primary_one_600 flex items-center justify-center">
                    <p className="text-white text-[12px] font-bold">{item.step}</p>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-gray-800">
                      {item.title}
                    </p>
                    <p className="text-[12px] text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="w-full bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
        <p className="text-[13px] text-gray-700 leading-relaxed">
          <span className="font-semibold">💡 Tip:</span> You can track your application status
          anytime in the "Active Loans" section of your dashboard.
        </p>
      </div>

      {/* Buttons */}
      <div className="w-full space-y-3">
        <button
          onClick={handleComplete}
          className="w-full bg-primary_one_600 hover:bg-primary_one_700 text-white rounded-full h-13 text-[15px] font-semibold shadow-sm transition-colors"
        >
          View Your Loans
        </button>
        <Link href="/dashboard">
          <button className="w-full border border-gray-300 text-gray-700 rounded-full h-[52px] text-[15px] font-semibold shadow-sm transition-colors hover:bg-gray-50">
            Return to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoanConfirmation;

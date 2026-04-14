// Loan application related constants

import { ComponentType } from "react";

export interface LoanStepComponentProps {
  onNext?: () => void;
  onPrev?: () => void;
  onClose?: () => void;
  formData?: LoanApplicationData;
}

export interface LoanStep {
  id: string;
  slug: string;
  title: string;
  subTitle?: string;
  component: ComponentType<LoanStepComponentProps>;
}

export interface LoanApplicationData {
  loanType?: "union-kash" | "others" | null;
  loanAmount?: string;
  reasonForLoan?: string;
  accountType?: "unionbank" | "other" | null;
  tenor?: number | null;
  selectedProvider?: string;
  selectedOffer?: string;
}

// Steps array is populated in ApplyLoanFlow to avoid circular dependencies
export const LOAN_APPLICATION_STEPS: LoanStep[] = [];

export const LOAN_AMOUNT_RANGES = {
  min: 500000,
  max: 5000000,
  step: 100000,
};

export const LOAN_REASONS = [
  { value: "education", label: "Education" },
  { value: "housing", label: "Housing" },
  { value: "personal", label: "Personal expenses" },
  { value: "investment", label: "Investment" },
  { value: "medical", label: "Medical expenses" },
  { value: "agriculture", label: "Agriculture" },
];

export const TENOR_OPTIONS = [
  { value: 3, label: "3 months" },
  { value: 6, label: "6 months" },
  { value: 12, label: "12 months" },
  { value: 24, label: "24 months" },
];

export const PROVIDER_OPTIONS = [
  { id: "one-finance", name: "One Finance", logo: "/images/providers/one-finance.png" },
  { id: "mines-io", name: "Mines IO(migo)", logo: "/images/providers/migo.png" },
  { id: "fairmoney", name: "FairMoney", logo: "/images/providers/fairmoney.png" },
  { id: "mkt", name: "MKT", logo: "/images/providers/mkt.png" },
  { id: "afara", name: "Afara Partners", logo: "/images/providers/afara.png" },
  { id: "renmoney", name: "Renmoney", logo: "/images/providers/renmoney.png" },
];

export const LOAN_OFFERS = [
  { id: "offer-1", amount: "20,000,000", rate: "18%", tenure: "3 Months" },
  { id: "offer-2", amount: "10,000,000", rate: "15%", tenure: "6 Months" },
  { id: "offer-3", amount: "5,000,000", rate: "12%", tenure: "12 Months" },
  { id: "offer-4", amount: "2,000,000", rate: "10%", tenure: "24 Months" },
];

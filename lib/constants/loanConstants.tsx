// Loan application related constants

import { ComponentType } from "react";

export interface LoanStepComponentProps {
  onNext?: () => void;
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
  loanAmount: string;
  reasonForLoan: string;
  accountType: "unionbank" | "other" | null;
  tenor: number | null;
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

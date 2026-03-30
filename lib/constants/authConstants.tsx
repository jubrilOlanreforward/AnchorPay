// Auth related constants

import { ReactNode, ComponentType } from "react";
import { WithBvnIcon, WithEmailIcon } from "@/components/svg";
import EnterBankVerificationNumber from "@/components/auth/EnterBankVerification";
import VerifyBvn from "@/components/auth/VerifyBvn";
import ReviewDetails from "@/components/auth/ReviewDetails";
import SetupPassword from "@/components/auth/SetupPassword";
import VerifyEmail from "@/components/auth/VerifyEmail";
import CreateAccount from "@/components/auth/CreateAccount";

export interface StepComponentProps {
  onNext?: () => void;
}

export interface Step {
  id: string;
  slug: string;
  title: string;
  component: ComponentType<StepComponentProps>;
}

export interface GetStartedOption {
  id: "bvn" | "email";
  title: string;
  description: string;
  icon: ReactNode;
}

export const getStartedOptions: GetStartedOption[] = [
  {
    id: "bvn",
    title: "Continue with BVN",
    description: "This is 4x faster, using verified information.",
    icon: <WithBvnIcon />,
  },
  {
    id: "email",
    title: "Continue with email address",
    description: "Create an account with your email.",
    icon: <WithEmailIcon />,
  },
];

export interface Step {
  id: string;
  title: string;
  component: ComponentType<StepComponentProps>;
}

export const BVN_STEPS: Step[] = [
  {
    id: "enter-bvn",
    slug: "enter-bvn",
    title: "Enter your Bank Verification Number (BVN)",
    component: EnterBankVerificationNumber,
  },
  {
    id: "verify-bvn",
    slug: "verify-bvn",
    title: "Verify Your BVN",
    component: VerifyBvn,
  },
  {
    id: "review-details",
    slug: "review-details",
    title: "Review Your Details",
    component: ReviewDetails,
  },
  {
    id: "setup-password",
    slug: "setup-password",
    title: "Setup your login details",
    component: SetupPassword,
  },
  // {
  //   id: "verify-email",
  //   slug: "verify-email",
  //   title: "Verify Your Email Address",
  //   component: VerifyEmail,
  // },
];

export const EMAIL_STEPS: Step[] = [
  {
    id: "create-account",
    slug: "create-account",
    title: "Create Your Account",
    component: CreateAccount,
  },
  {
    id: "verify-email",
    slug: "verify-email",
    title: "Verify Your Email Address",
    component: VerifyEmail,
  },
  {
    id: "setup-password",
    slug: "setup-password",
    title: "Setup Your Password",
    component: SetupPassword,
  },
];

export const ONBOARDING_STEPS = [
  { id: 1, title: "Step 1" },
  { id: 2, title: "Step 2" },
  { id: 3, title: "Step 3" },
  { id: 4, title: "Step 4" },
];

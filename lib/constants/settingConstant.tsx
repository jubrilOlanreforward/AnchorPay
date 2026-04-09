import { CardsIcon, EditProfileIcon, KYCIcon, SecurityIcon } from "@/components/svg";
import { ComponentType } from "react";

interface SettingsSection {
  title?: string;
  icon: ComponentType;
  route: string;
}
interface SettingsMetadata {
  title?: string;
  description?: string;
  pathname?: string;
  showBackButton: boolean;
}

export const SETTINGS_SECTIONS: SettingsSection[] = [
  {
    title: "Edit Profile",
    icon: EditProfileIcon,
    route: "/settings/profile",
  },
  {
    title: "KYC Verification",
    icon: KYCIcon,
    route: "/settings/kyc-verification",
  },
  {
    title: "Cards & Accounts",
    icon: CardsIcon,
    route: "/settings/cards-accounts",
  },
  { title: "Security", icon: SecurityIcon, route: "/settings/security" },
];

export const SETTINGS_METADATA: SettingsMetadata[] = [
  {
    title: "Change Email",
    description: "Update your email address",
    pathname: "/dashboard/settings/change-email",
    showBackButton: true,
  },
  {
    title: "Change Phone Number",
    description: "Update your phone number",
    pathname: "/dashboard/settings/change-phone",
    showBackButton: true,
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to your old phone number",
    pathname: "/dashboard/settings/enter-phone-otp",
    showBackButton: true,
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to your old email address",
    pathname: "/dashboard/settings/enter-email-otp",
    showBackButton: true,
  },
  {
    title: "Update your KYC",
    description: "Remove account restrictions and start applying for loans.",
    pathname: "/dashboard/settings/kyc-verification",
    showBackButton: false,
  },
  {
    title: "Enter your Bank Verification Number (BVN)",
    description: "Enter your BVN below",
    pathname: "/dashboard/settings/verify-bvn",
    showBackButton: true,
  },
  {
    title: "Verify your BVN",
    description:
      "Enter the OTP sent to the phone number and Email address associated with your BVN",
    pathname: "/dashboard/settings/enter-bvn-otp",
    showBackButton: true,
  },
  {
    title: "Enter your NIN",
    description: "",
    pathname: "/dashboard/settings/verify-nin",
    showBackButton: true,
  },
];

import {
  CardsIcon,
  EditProfileIcon,
  KYCIcon,
  LockIcon,
  SecurityIcon,
} from "@/components/svg";
import { ComponentType } from "react";

interface SettingsSection {
  title?: string;
  icon: ComponentType;
  route: string;
}

interface SettingsMetadata {
  title?: string;
  description?: string;
  route?: string;
  showBackButton?: boolean;
}

export const SETTINGS_SECTIONS: SettingsSection[] = [
  {
    title: "Edit Profile",
    icon: EditProfileIcon,
    route: "/dashboard/settings/profile",
  },
  {
    title: "KYC Verification",
    icon: KYCIcon,
    route: "/dashboard/settings/kyc-verification",
  },
  {
    title: "Cards & Accounts",
    icon: CardsIcon,
    route: "/dashboard/settings/cards-accounts",
  },
  {
    title: "Security",
    icon: SecurityIcon,
    route: "/dashboard/settings/security",
  },
];

export const SETTINGS_METADATA: SettingsMetadata[] = [
  {
    title: "Change Email",
    description: "Update your email address",
    route: "/settings/change-email",
  },
  {
    title: "Change Phone Number",
    description: "Update your phone number",
    route: "/settings/change-phone",
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to your old phone number",
    route: "/settings/enter-phone-otp",
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to your old email address",
    route: "/settings/enter-email-otp",
  },
];

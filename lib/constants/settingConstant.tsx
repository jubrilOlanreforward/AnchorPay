import {
  CardsIcon,
  EditProfileIcon,
  KYCIcon,
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
  pathname?: string;
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
    pathname: "/settings/change-email",
  },
  {
    title: "Change Phone Number",
    description: "Update your phone number",
    pathname: "/settings/change-phone",
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to your old phone number",
    pathname: "/settings/enter-phone-otp",
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to your old email address",
    pathname: "/settings/enter-email-otp",
  },
];

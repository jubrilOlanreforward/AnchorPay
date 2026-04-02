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

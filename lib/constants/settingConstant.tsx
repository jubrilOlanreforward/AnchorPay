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
  showBackButton: boolean;
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
    description: "Change your email address",
    route: "/dashboard/settings/profile/change-email",
    showBackButton: true,
  },
  {
    title: "Change Phone Number",
    description: "Change your phone number",
    route: "/dashboard/settings/profile/change-phone",
    showBackButton: true,
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to your old phone number",
    route: "/dashboard/settings/profile/enter-phone-otp",
    showBackButton: true,
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to your old email address",
    route: "/dashboard/settings/profile/enter-email-otp",
    showBackButton: true,
  },
  {
    title: "Update your KYC",
    description: "Remove account restrictions and start applying for loans.",
    route: "/dashboard/settings/kyc-verification",
    showBackButton: false,
  },
  {
    title: "Enter your Bank Verification Number (BVN)",
    description: "Enter your BVN below",
    route: "/dashboard/settings/verify-bvn",
    showBackButton: true,
  },
  {
    title: "Verify your BVN",
    description:
      "Enter the OTP sent to the phone number and Email address associated with your BVN",
    route: "/dashboard/settings/enter-bvn-otp",
    showBackButton: true,
  },
  {
    title: "Enter your NIN",
    description: "",
    route: "/dashboard/settings/verify-nin",
    showBackButton: true,
  },
  {
    title: "Cards & Account",
    description:
      "Loan will be disbursed recoupment happens on the account you link",
    route: "/dashboard/settings/cards-accounts",
    showBackButton: false,
  },
  {
    title: "Cards & Account",
    description:
      "Loan will be disbursed recoupment happens on the account you link",
    route: "/dashboard/settings/link-debit-card",
    showBackButton: true,
  },
  {
    title: "Link your debit card",
    description:
      "This will be the designated account for your loan disbursement and can also be used for repayments.",
    route: "/dashboard/settings/cards-accounts/add-card",
    showBackButton: true,
  },
  {
    title: "We just sent you an OTP",
    description:
      "Enter the OTP sent to the phone number linked to your bank account 0814 *** *** **28",
    route: "/dashboard/settings/cards-accounts/verify-bank-otp",
    showBackButton: true,
  },
  {
    title: "We just sent you an OTP",
    description:
      "This will be the designated account for your loan disbursement and can also be used for repayments.",
    route: "/dashboard/settings/cards-accounts/verify-bank-otp",
    showBackButton: true,
  },
  {
    title: "Security",
    description: "Keep your transaction details safe",
    route: "/dashboard/settings/security",
    showBackButton: false,
  },
  {
    title: "Change transaction/set transaction PIN",
    description: "Please select  the action you would like to perform",
    route: "/dashboard/settings/security/manage-transaction-pin",
    showBackButton: true,
  },
  {
    title: "Change transaction PIN",
    description: "Fill the the form to change your transaction PIN",
    route: "/dashboard/settings/security/change-transaction-pin",
    showBackButton: true,
  },
  {
    title: "Transaction PIN",
    description:
      "Enter the unique you wish to use as your transaction PIN below",
    route: "/dashboard/settings/security/set-transaction-pin",
    showBackButton: true,
  },
  {
    title: "Enter OTP",
    description: "Enter the OTP sent to",
    route: "/dashboard/settings/security/change-password-otp",
    showBackButton: true,
  },
  {
    title: "Enter new password",
    description: "Enter your new password below",
    route: "/dashboard/settings/security/set-new-password",
    showBackButton: true,
  },
  {
    title: "Security Question",
    description:
      "Security question serves as an extra layer of security to your account.",
    route: "/dashboard/settings/security/set-security-question",
    showBackButton: true,
  },
  {
    title: "Enter your address details",
    description:
      "To complete your KYC process, please verify yur residential address.",
    route: "/dashboard/settings/kyc-verification/set-address-details",
    showBackButton: true,
  },
  {
    title: "Upload proof of address",
    description: "Select document type below",
    route: "/dashboard/settings/kyc-verification/upload-proof-of-address",
    showBackButton: true,
  },
];

export const SECURITY_SECTIONS = [
  {
    title: "Change/Set Transaction PIN",
    icon: EditProfileIcon,
    route: "/dashboard/settings/security/manage-transaction-pin",
  },
  {
    title: "Change Password",
    icon: LockIcon,
    route:
      "/dashboard/settings/security/change-password-otp?param=lawalidowu27@gmail.com",
  },
  {
    title: "Security Question",
    icon: KYCIcon,
    route: "/dashboard/settings/security/set-security-question",
  },
];

export const MANAGE_TRANSACTION_PIN_SECTIONS = [
  {
    title: "Change Transaction PIN",
    icon: LockIcon,
    route: "/dashboard/settings/security/change-transaction-pin",
  },
  {
    title: "Set Transaction PIN",
    icon: LockIcon,
    route: "/dashboard/settings/security/set-transaction-pin",
  },
];

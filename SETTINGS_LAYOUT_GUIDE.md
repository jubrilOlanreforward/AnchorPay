# Settings Layout Implementation Guide

## Overview

The settings layout now uses a centralized state management system (via Zustand) to handle dynamic titles and descriptions. This allows child components to set their own metadata that displays in the layout header.

## How It Works

### 1. **State Management** (`store/useStore.ts`)

The `useStore` now includes:

- `settingsMetadata`: Object containing `title` and `description`
- `setSettingsMetadata`: Function to update the metadata

### 2. **Layout** (`app/settings/layout.tsx`)

The layout now:

- Reads `settingsMetadata` from the store
- Displays dynamic title and description based on the current route
- Falls back to a default title/description if none is provided
- Includes an improved sidebar with active state highlighting
- Has better styling and semantic HTML (uses `<aside>` and `<main>`)

### 3. **Custom Hook** (`hooks/useSettingsMetadata.ts`)

The `useSettingsMetadata` hook allows child components to:

- Set title and description when they mount
- Automatically reset when they unmount
- Use a simple, clean API

## Usage

### Basic Example

```tsx
"use client";

import { useSettingsMetadata } from "@/hooks/useSettingsMetadata";

export default function EditProfilePage() {
  // This will update the layout header automatically
  useSettingsMetadata({
    title: "Edit Profile",
    description: "Update your personal information",
  });

  return (
    <div>
      <form>{/* Your form content */}</form>
    </div>
  );
}
```

### With Form Component

```tsx
"use client";

import { useSettingsMetadata } from "@/hooks/useSettingsMetadata";
import CustomFormField from "@/components/ui/shared/InputField";
import { useForm } from "react-hook-form";

export default function SecuritySettingsPage() {
  useSettingsMetadata({
    title: "Security Settings",
    description: "Manage your password and account security",
  });

  const form = useForm();

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <CustomFormField
        control={form.control}
        fieldType="password"
        name="currentPassword"
        label="Current Password"
      />
      {/* More fields */}
    </form>
  );
}
```

## Features

✅ **Dynamic Title & Description**: Child components control what appears in the header
✅ **Route-Based Fallback**: Uses the route to determine a default title if none is set
✅ **Active State Styling**: Sidebar highlights the current settings section
✅ **Clean Navigation**: Improved back button with better styling
✅ **Responsive Design**: Works on mobile and desktop
✅ **TypeScript Support**: Fully typed hooks and components

## Component Structure

```
Settings Layout
├── Sidebar (Navigation)
│   ├── Edit Profile
│   ├── KYC Verification
│   ├── Cards & Accounts
│   ├── Security
│   └── Logout
└── Main Content
    ├── Header (Dynamic Title & Description)
    └── Children (Route-specific content)
```

## Styling

All components use Tailwind CSS classes:

- Colors respect your design system (primary_one_600, gray-\* colors)
- Smooth transitions for hovering and active states
- Proper spacing and typography conventions
- Mobile-friendly responsive design

## Notes

- The `useSettingsMetadata` hook automatically resets the metadata when the component unmounts
- If a component doesn't set metadata, the layout falls back to the route-based default
- The sidebar shows which section is currently active based on the current pathname

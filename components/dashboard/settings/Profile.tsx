"use client";

import { EditIcon } from "../../svg";
import ProfileField from "./ProfileField";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";

const profileData = {
  firstName: "John",
  email: "john.doe@example.com",
  phone: "+234 80 1234 5678",
};

const ProfileComponent = () => {
  return (
    <PageTransitionWrapper>
      <div className="space-y-8">
        {/* Profile Header */}
        <div className="flex items-center gap-4 md:pb-6 pb-0">
          <div className="bg-primary-one-600 relative md:w-16 md:h-16 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-semibold text-white">
              {profileData.firstName.charAt(0).toUpperCase()}
            </span>
            <button
              className="absolute bottom-0 right-0 rounded-full p-0 flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
              onClick={() => console.log("Edit profile picture")}
            >
              <EditIcon />
            </button>
          </div>
          <div>
            <h2 className="font-montserrat text-[17px] font-[600] text-neutral-950 md:mb-1 mb-0">
              Profile
            </h2>
            <p className="text-[14px]">
              Access your profile details
            </p>
          </div>
        </div>

        <ProfileField
          label="First Name"
          value={profileData.firstName}
          disabled={true}
        />
        <ProfileField
          label="Email Address"
          value={profileData.email}
          linkHref={"/dashboard/settings/profile/change-email"}
        />
        <ProfileField
          label="Phone Number"
          value={profileData.phone}
          linkHref={"/dashboard/settings/profile/change-phone"}
        />
      </div>
    </PageTransitionWrapper>
  );
};

export default ProfileComponent;

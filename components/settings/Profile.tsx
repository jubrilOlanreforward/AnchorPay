"use client";

import { EditIcon } from "../svg";
import ProfileField from "./ProfileField";

const profileData = {
  firstName: "John",
  email: "john.doe@example.com",
  phone: "+234 80 1234 5678",
};

const ProfileComponent = () => {
  const handleEditFirstName = () => {
    // TODO: Implement edit first name logic
    console.log("Edit first name");
  };

  return (
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
          <h2 className="font-montserrat md:text-[24px] text-[22px] font-[600] text-neutral-950 md:mb-2 mb-0">
            Profile
          </h2>
          <p className="md:text-[16px] text-[15px] text-gray-600">
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
        onEdit={() => console.log("Edit email")}
      />
      <ProfileField
        label="Phone Number"
        value={profileData.phone}
        onEdit={() => console.log("Edit phone")}
      />
    </div>
  );
};

export default ProfileComponent;

import { useEffect } from "react";
import { useStore } from "@/store/useStore";

interface UseSettingsMetadataProps {
  title?: string;
  description?: string;
}

/**
 * Hook to set dynamic title and description in the settings layout
 * @param title - The title to display in the settings layout header
 * @param description - The description to display under the title
 *
 * @example
 * ```tsx
 * const EditProfile = () => {
 *   useSettingsMetadata({
 *     title: "Edit Profile",
 *     description: "Update your personal information"
 *   });
 *   return <div>...</div>;
 * };
 * ```
 */
export const useSettingsMetadata = ({
  title,
  description,
}: UseSettingsMetadataProps) => {
  const setSettingsMetadata = useStore((state) => state.setSettingsMetadata);

  useEffect(() => {
    setSettingsMetadata({
      title,
      description,
    });

    // Optional: Reset metadata when component unmounts
    return () => {
      setSettingsMetadata({
        title: undefined,
        description: undefined,
      });
    };
  }, [title, description, setSettingsMetadata]);
};

"useClient";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import AddBvnIcon from "@/components/SVGs/addBvn";
import AddNinIcon from "@/components/SVGs/addNin";
import AddAddressIcon from "@/components/SVGs/addAddress";
import ChevronIcon from "@/components/SVGs/chevronDown";
import Link from "next/link";
import KycField from "./KycField";

const kycData = [
  {
    link: "/dashboard/settings/verify-bvn",
    icon: <AddBvnIcon />,
    label: "Done",
    labelBg: "bg-[#2AA63C]",
    title: "Add & Verify your BVN",
  },
  {
    link: "/dashboard/settings/verify-nin",
    icon: <AddNinIcon />,
    label: "Done",
    labelBg: "bg-[#2AA63C]",
    title: "Add & Verify your NIN",
  },
  {
    link: "/dashboard/settings/verify-address",
    icon: <AddAddressIcon />,
    label: "Not Done",
    labelBg: "bg-[#FF9500]",
    title: "Verify your Address",
  },
];

const KycVerification = () => {
  return (
    <PageTransitionWrapper>
      <div className='flex flex-col gap-2 flex-1 overflow-y-auto font-poppins'>
        {kycData.map((item) => (
          <KycField
            key={item.title}
            label={item.label}
            labelBg={item.labelBg}
            value={item.title}
            icon={item.icon}
            linkHref={item.link}
          />
        ))}
      </div>
    </PageTransitionWrapper>
  );
};

export default KycVerification;

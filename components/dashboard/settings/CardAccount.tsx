"useClient";
import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import {AddBvnIcon, AddCardIcon} from "@/components/svg";
import KycField from "./KycField";

const cardAccountData = [
  {
    link: "/settings/cards-accounts/add-card",
    icon: <AddCardIcon />,
    label: "Not Done",
    labelBg: "bg-[#FF9500]",
    title: "Link Your Debit Card",
  },
  {
    link: "/settings/cards-accounts/add-bank",
    icon: <AddBvnIcon />,
    label: "Not Done",
    labelBg: "bg-[#FF9500]",
    title: "Link Your Bank Account",
  },
];

const CardAccount = () => {
  return (
    <PageTransitionWrapper>
      <div className='flex flex-col gap-2 flex-1 overflow-y-auto font-poppins'>
        {cardAccountData.map((item) => (
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

export default CardAccount;

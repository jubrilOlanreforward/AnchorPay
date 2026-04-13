"use client";

import PageTransitionWrapper from "@/components/shared/PageTransitionWrapper";
import LinkCardField, { maskNumber } from "./LinkCardField";
import UnionImage from "@/public/images/banklogo/UBNLogo_Container.png";
import GtbImage from "@/public/images/banklogo/GTBankLogo_Container.png";
import { MasterCardIcon, VisaIcon } from "@/components/svg";
import CustomButton from "@/components/ui/shared/CustomButton";
import Link from "next/link";

const LinkBankData = [
  {
    title: "Union Bank of Nigeria",
    image: UnionImage,
    cardno: "019687989777549077",
    edit: true,
  },
  {
    title: "GTBank",
    image: GtbImage,
    cardno: "019687989777549077",
    edit: true,
  },
];

const LinkCardData = [
  {
    title: "Union Bank of Nigeria",
    icon: <MasterCardIcon />,
    cardno: "019687989777549077",
    edit: true,
  },
  {
    title: "GTBank",
    icon: <VisaIcon />,
    cardno: "019687989777549077",
    edit: true,
  },
];

const LinkBankCard = () => {
  return (
    <PageTransitionWrapper>
      <div className='flex flex-col gap-4 flex-1 overflow-y-auto font-poppins'>
        {LinkBankData.map((item) => (
          <LinkCardField
            key={item.title}
            title={item.title}
            description={item.cardno}
            image={item.image}
            showEdit={item.edit}
            onEdit={() => alert(`Edit clicked for ${item.title}`)}
          />
        ))}
        <Link href='/dashboard/settings/cards-accounts/add-bank'>
          <CustomButton title='Add Another Account' type='submit' className='w-full' />
        </Link>
      </div>
      <div className='flex flex-col gap-4 flex-1 overflow-y-auto font-poppins mt-5'>
        {LinkCardData.map((item) => (
          <LinkCardField
            key={item.title}
            title={item.title}
            description={item.cardno}
            icon={item.icon}
            showEdit={item.edit}
            onEdit={() => alert(`Edit clicked for ${item.title}`)}
          />
        ))}
        <Link href='/dashboard/settings/cards-accounts/add-card'>
          <CustomButton title='Add Another Card' type='submit' className='w-full' />
        </Link>
      </div>
    </PageTransitionWrapper>
  );
};

export default LinkBankCard;

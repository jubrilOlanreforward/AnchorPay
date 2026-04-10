import Image from "next/image";
import React from "react";
import { EditIcon2 } from "@/components/svg";
import { StaticImageData } from "next/image";

interface LinkCardFieldProps {
  title: string;
  description: string;
  image?: string | StaticImageData;
  icon?: React.ReactNode;
  className?: string;
  showEdit?: boolean;
  onEdit?: () => void;
}

export function maskNumber(value: string | number): string {
  const str = String(value);

  if (str.length <= 8) {
    return str;
  }

  const firstFour = str.slice(0, 4);
  const lastFour = str.slice(-4);
  const middleLength = str.length - 8;
  const maskedMiddle = "*".repeat(middleLength);

  return `${firstFour}${maskedMiddle}${lastFour}`;
}

const LinkCardField: React.FC<LinkCardFieldProps> = ({
  title,
  description,
  image,
  icon,
  className,
  showEdit = false,
  onEdit,
}) => {
  return (
    <div
      className={`bg-[#F7F8F9] rounded-xl flex items-center justify-between px-4 py-3 cursor-pointer transition hover:opacity-90 ${className}`}
    >
      {/* Render image or icon */}

      <div className='flex gap-2 items-center'>
        {image ? (
          <Image src={image} alt={title} width={30} height={30} className='object-contain' />
        ) : icon ? (
          <div className='w-16 h-16 flex items-center justify-center'>{icon}</div>
        ) : null}

        {/* Title */}
        <div className='flex flex-col gap-0.5'>
          <h3 className='text-base font-semibold text-gray-800'>{title}</h3>

          {/* Description */}
          <p className='text-gray-500 text-sm'>{maskNumber(description)}</p>
        </div>
      </div>

      {/* ✅ Edit Icon */}
      {showEdit && (
        <button
          type='button'
          title='edit'
          onClick={onEdit}
          className='p-2 rounded-full hover:bg-gray-100 transition'
        >
          <EditIcon2 />
        </button>
      )}
    </div>
  );
};

export default LinkCardField;

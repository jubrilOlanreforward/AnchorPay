"use client";

import { SuccesIcon } from "../svg";
import CustomButton from "../ui/shared/CustomButton";
import { CustomModal } from "../ui/shared/Modal";

interface SuccessModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  setOpen: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  title,
  description,
  isOpen,
  setOpen,
}: SuccessModalProps) => {
  return (
    <CustomModal open={isOpen} setOpen={setOpen}>
      <div className="flex flex-col gap-2 py-8 items-center justify-center">
        <div className="mb-2 p-4 flex items-center justify-center bg-green-50 rounded-full w-[100px] h-[100px]">
          <SuccesIcon />
        </div>
        <h2 className="text-[15px] font-semibold text-gray-950">{title}</h2>

        <div className=" w-[75%] mb-3 flex flex-col items-center justify-center text-center gap-3">
          <p className="text-center text-[12px] text-gray-600">{description}</p>
        </div>
        <CustomButton
          onClick={setOpen}
          title="Okay Got it!"
          className="w-full mt-4"
        />
      </div>
    </CustomModal>
  );
};

export default SuccessModal;

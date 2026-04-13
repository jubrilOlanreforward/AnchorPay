import { ReactNode } from "react";

export interface ActionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  onClick: () => void;
}

const ActionCard: React.FC<ActionCardProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-light-primary md:p-[25px] p-[20px] rounded-[25px] flex flex-col items-start gap-3 p-6 cursor-pointer hover:bg-gray-100 transition text-left"
    >
      <div className="mb-5">{icon}</div>
      <h3 className="font-[500] text-[15px]">{title}</h3>
      <p className="font-[400] text-[13px] tracking-[-0.1%] text-gray_400">
        {description}
      </p>
    </button>
  );
};

export default ActionCard;

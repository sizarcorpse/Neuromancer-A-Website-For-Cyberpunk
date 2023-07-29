import { FC, ReactNode } from "react";
import { MdOutlineEast } from "react-icons/md";

interface NrButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  styles?: {
    color?: "light" | "dark";
    size?: "xs" | "full";
    icon?: boolean;
    iconName?: string;
    iconPosition?: "start" | "end";
  };
}

const NrButton: FC<NrButtonProps> = ({ children, styles, type }) => {
  const { icon, size } = styles || {};

  return (
    <button
      type={type || "button"}
      className={`flex items-center gap-x-sm ${
        size === "xs" ? "py-md px-5" : "py-lg px-10"
      } ${
        size === "full" ? "w-full justify-center" : ""
      } text-center duration-500 bg-[length:200%_auto] text-nr-light rounded-md font-semibold shadow-button-shadow bg-button-gradient cursor-pointer select-none touch-manipulation hover:bg-right-top focus-rose`}
    >
      {children}
      {icon === true && <MdOutlineEast className="inline-block ml-2" />}
    </button>
  );
};

export default NrButton;

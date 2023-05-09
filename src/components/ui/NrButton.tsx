import { MdOutlineEast } from "react-icons/md";
type NrButtonProps = {
  children: React.ReactNode;
  styles?: {
    color?: "light" | "dark";
    size?: "xs" | "sm";
    icon?: boolean;
    iconName?: string;
    iconPosition?: "start" | "end";
  };
};

const NrButton: React.FC<NrButtonProps> = ({ children, styles }) => {
  const { icon, size } = styles || {};

  return (
    <button
      className={`flex items-center gap-x-sm ${
        size === "xs" ? "py-md px-5" : "py-lg px-10"
      } text-center duration-500 bg-[length:200%_auto] text-light rounded-md font-semibold shadow-button-shadow bg-button-gradient cursor-pointer select-none touch-manipulation hover:bg-right-top`}
    >
      {children}
      {icon === true && <MdOutlineEast className="inline-block ml-2" />}
    </button>
  );
};

export default NrButton;

import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { MdOutlineCircle } from "react-icons/md";

type NrListItemProps = {
  children: ReactNode;
  style: {
    icon?: boolean;
    iconSource?: string;
    iconPosition?: "start" | "end";
    color?: "light" | "dark";
    fontSize?: "xs" | "sm";
    columnCount?: 2 | 3;
  };
};

const NrListItem = ({ children, style }: NrListItemProps) => {
  const { icon, iconSource, iconPosition, color, fontSize, columnCount } =
    style;

  return (
    <li
      className={`${columnCount === 2 && "basis-column-2-gap-2 grow-0"} ${
        columnCount === 3 && "basis-column-2-gap-2 lg:basis-column-3-gap-2"
      }`}
    >
      <Link
        href={"#"}
        className={`flex items-center gap-x-2 pointer-events-none
        ${
          iconPosition === "end"
            ? "flex-row-reverse justify-between"
            : "flex-row"
        }`}
      >
        {icon === true && iconSource ? (
          <Image src={iconSource} width={16} height={16} alt="icon" />
        ) : (
          <MdOutlineCircle size={"1em"} className="text-rose" />
        )}
        <p
          className={`${color === "dark" ? "text-darker" : "text-light"} ${
            fontSize === "xs" ? "text-xs" : "text-sm"
          }`}
        >
          {children}
        </p>
      </Link>
    </li>
  );
};
export default NrListItem;

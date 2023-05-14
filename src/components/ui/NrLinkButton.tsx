import Link from "next/link";
import { MdEast } from "react-icons/md";
type NrLinkButtonProps = {
  href: string;
  styles?: {
    icon?: boolean;
    iconUrl?: string;
    placement?: string;
    size?: "xs" | "sm" | "base" | "lg";
    color?: "light" | "dark" | "amber" | "rose" | "gray";
    css?: string;
  };
  children: any;
};

const NrLinkButton = ({ href, styles, children }: NrLinkButtonProps) => {
  const { placement, color, icon, iconUrl, size, css } = styles || {};
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2
      ${placement === "left" ? "flex-row-reverse" : "flex-row"} 
      ${color ? `text-${color}` : "text-light"}
      ${size ? `text-${size}` : "text-sm"}
      ${size === "xs" ? "font-medium" : "font-semibold"}
      ${css ? `${css}` : ""}
      hover:text-amber
      `}
    >
      <span>{children}</span>
      {icon && <MdEast className={`${size ? `text-${size}` : "text-base"}`} />}
    </Link>
  );
};

export default NrLinkButton;

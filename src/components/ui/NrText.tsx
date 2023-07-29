import { cx } from "@/utils/cx";
import { FC, ReactNode } from "react";
interface NrTextProps {
  children: ReactNode;
  styles?: {
    align?: "left" | "center" | "right" | "justify";
    color?:
      | "light"
      | "dark"
      | "rose"
      | "amber"
      | "gray"
      | "nr-light"
      | "nr-dark"
      | "nr-rose"
      | "nr-amber"
      | "nr-gray";
    size?: "xs" | "sm";
    css?: string;
  };
}

const NrText: FC<NrTextProps> = ({ children, styles }) => {
  const { align, color, size, css } = styles ?? {};
  return (
    <p
      className={cx(
        `
      ${color ? `text-${color}` : "text-nr-light"}
      ${align ? `text-${align}` : "text-left"}
      ${size ? `text-${size}` : "text-base"}
      `,
        css
      )}
    >
      {children}
    </p>
  );
};
export default NrText;

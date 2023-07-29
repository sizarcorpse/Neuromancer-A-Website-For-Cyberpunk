import { cx } from "@/utils/cx";
import { FC, ReactNode } from "react";
interface NrTitleProps {
  children: ReactNode;
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  styles?: {
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
    align?: "left" | "center" | "right" | "justify";
    css?: string;
  };
}

const NrTitle: FC<NrTitleProps> = ({ children, component, styles }) => {
  const { color, align, css } = styles ?? {};
  const Element = component || "h2";
  return (
    <Element
      className={cx(
        `
      ${color ? `text-${color}` : "text-nr-light"}
      ${align ? `text-${align}` : "text-left"}`,
        css
      )}
    >
      {children}
    </Element>
  );
};

export default NrTitle;

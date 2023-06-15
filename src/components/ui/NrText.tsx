interface NrTextProps {
  children: React.ReactNode;
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

const NrText: React.FC<NrTextProps> = ({ children, styles }) => {
  const { align, color, size, css } = styles ?? {};
  return (
    <p
      className={`
        ${color ? `text-${color}` : "text-white"}
        ${align ? `text-${align}` : "text-left"}
        ${size ? `text-${size}` : "text-base"}
        ${css ? `${css}` : ""}`}
    >
      {children}
    </p>
  );
};
export default NrText;

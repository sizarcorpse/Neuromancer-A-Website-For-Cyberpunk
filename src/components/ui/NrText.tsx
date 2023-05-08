type NrTextProps = {
  children: React.ReactNode;
  styles?: {
    align?: "left" | "center" | "right" | "justify";
    color?: "light" | "dark";
    size?: "sm";
  };
};

const NrText: React.FC<NrTextProps> = ({ children, styles }) => {
  const { align, color, size } = styles ?? {};
  return (
    <p
      className={`
        ${color === "dark" ? "text-darker" : "text-light"}
        ${align ? `text-${align}` : "text-left"}
        ${size && `text-${size}`}
  `}
    >
      {children}
    </p>
  );
};
export default NrText;

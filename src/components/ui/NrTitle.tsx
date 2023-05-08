type NrTitleProps = {
  children: React.ReactNode;
  component: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  styles?: {
    color?: "light" | "dark";
    align?: "left" | "center" | "right" | "justify";
    css?: string;
  };
};

const NrTitle: React.FC<NrTitleProps> = ({ children, component, styles }) => {
  const { color, align, css } = styles ?? {};
  const Element = component || "h1";
  return (
    <Element
      className={`
        ${color === "dark" ? "text-darker" : "text-light"}
        ${align ? `text-${align}` : "text-left"}
        ${css ? `${css}` : " "}
      `}
    >
      {children}
    </Element>
  );
};

export default NrTitle;

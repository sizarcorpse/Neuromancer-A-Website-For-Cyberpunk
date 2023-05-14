import { ReactNode } from "react";

type NrContainerProps = {
  children: ReactNode;
  styles?: {
    css?: string;
    size?: "sm" | "md" | "lg";
  };
};

const NrContainer: React.FC<NrContainerProps> = ({ children, styles }) => {
  const { css, size } = styles || {};

  return (
    <div
      className={`container mx-auto px-6 py-6 ${
        size === "md"
          ? "lg:max-w-screen-xl px-xl"
          : "sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl"
      } ${css ? css : ""} sm:py-10 md:py-14 lg:py-20`}
    >
      {children}
    </div>
  );
};

export default NrContainer;

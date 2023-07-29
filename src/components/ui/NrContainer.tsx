import { cx } from "@/utils/cx";
import { FC, ReactNode } from "react";

interface NrContainerProps {
  children: ReactNode;
  styles?: {
    css?: string;
    size?: "md";
  };
}

const NrContainer: FC<NrContainerProps> = ({ children, styles }) => {
  const { css, size } = styles || {};

  return (
    <div
      className={cx(
        `container mx-auto px-6 py-6 ${
          size === "md"
            ? "lg:max-w-screen-xl px-xl"
            : "sm:max-w-screen-md md:max-w-screen-lg lg:max-w-screen-xl xl:max-w-screen-2xl"
        } sm:py-10 md:py-14 lg:py-20`,
        css
      )}
    >
      {children}
    </div>
  );
};

export default NrContainer;

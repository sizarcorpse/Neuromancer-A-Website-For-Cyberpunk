import { ReactNode } from "react";

type NrContainerProps = {
  children: ReactNode;
};

const NrContainer: React.FC<NrContainerProps> = ({ children }) => {
  return (
    <div
      className={`bg-slate-200 container px-6 py-6 sm:py-7 md:py-10 lg:py-14`}
    >
      {children}
    </div>
  );
};

export default NrContainer;

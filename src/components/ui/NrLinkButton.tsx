import Link from "next/link";
import { MdEast } from "react-icons/md";
type NrLinkButtonProps = {
  href: string;
  styles: {
    icon: boolean;
    position: string;
    color: "light" | "dark" | "amber";
  };
  children: any;
};

const NrLinkButton = ({ href, styles, children }: NrLinkButtonProps) => {
  return (
    <Link
      href={href}
      className={`inline-flex ${
        styles.position === "left" ? "flex-row-reverse" : "flex-row"
      } items-center justify-center gap-2 font-semibold`}
    >
      <span className={styles.color === "amber" ? "text-amber" : "text-rose"}>
        {children}
      </span>
      {styles.icon && (
        <MdEast
          size={"1.25em"}
          className={styles.color === "amber" ? "text-amber" : "text-rose"}
        />
      )}
    </Link>
  );
};

export default NrLinkButton;

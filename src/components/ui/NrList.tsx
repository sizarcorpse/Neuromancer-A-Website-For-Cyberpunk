import { NrListItem } from "@/components/ui";
type ListProps = {
  items: {
    icon: string;
    title: string;
  }[];
  styles?: {
    listDirection?: "horizontal" | "vertical";
    columnCount?: 2 | 3;
    icon?: boolean;
    iconName?: string;
    iconPosition?: "start" | "end";
    color?: "light" | "dark";
    fontSize?: "xs" | "sm";
  };
};

const NrList = ({ items, styles }: ListProps) => {
  const { listDirection } = styles || {};
  return (
    <ul
      className={`flex ${
        listDirection === "horizontal"
          ? "flex-row flex-wrap gap-x-3 gap-y-3"
          : "flex-col gap-y-3"
      }
        `}
    >
      {items.map((item, index) => (
        <NrListItem
          key={index}
          style={{
            iconSource: `${item.icon}`,
            ...styles,
          }}
        >
          {item.title}
        </NrListItem>
      ))}
    </ul>
  );
};

export default NrList;

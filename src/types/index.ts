export type NrEvent = {
  uuid: string;
  preset: "social" | "corporate" | "vr" | "game";
  galleries: {
    src: string;
    alt: string;
  }[];
  icon: string;
  title: string;
  status?: "Coming Soon" | "Live" | "Ended" | "Cancelled";
  description: string;
  features?: {
    icon: string;
    title: string;
  }[];
  action?: {
    type: "link" | "button";
    label: string;
    href: string;
  };
  share?: {
    enabled: boolean;
  };
};

export type NrEvents = NrEvent[];

export interface DropdownProps {
  featured: NrEvents;
  socials?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    soundcloud?: string;
  };
  actionLink?: string;
  styles?: {
    footer?: boolean;
  };
}
export type DrawerProps = {
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    soundcloud?: string;
  };
  actionLink?: string;
};

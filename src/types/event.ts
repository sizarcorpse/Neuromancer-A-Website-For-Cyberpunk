export type NrEvent = {
  uuid: string;
  preset: "social" | "corporate" | "vr" | "game";
  galleries: {
    src: string;
    alt: string;
  }[];
  icon: string;
  title: string;
  status?:
    | "Coming Soon"
    | "Live"
    | "Ended"
    | "Cancelled"
    | "Escape Room"
    | "Free Play"
    | "Free Roam"
    | "";
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

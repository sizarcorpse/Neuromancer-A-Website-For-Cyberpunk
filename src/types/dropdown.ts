import { NrEvents } from "@/types/event";

export type DropdownExplore = {
  exploreData: NrEvents;
  socialData?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    soundcloud?: string;
  };
  actionLink?: string;
  styles?: {
    footer?: boolean;
  };
};

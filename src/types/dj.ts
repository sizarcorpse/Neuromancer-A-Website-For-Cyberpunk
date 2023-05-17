export type Dj = {
  name: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  social: any;
};
export type Djs = Dj[];
export type DjCard = {
  item: Dj;
  styles?: {};
};

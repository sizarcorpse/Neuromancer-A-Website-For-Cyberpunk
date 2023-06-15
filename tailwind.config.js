/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["text-gray", "text-nr-gray"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: "#f4f4f5",
        dark: "#18181b",
        darker: "#09090b",
        amber: "#fbbf24",
        rose: "#f43f5e",
        gray: "#a1a1aa",
        "amber-light": "#fef3c7",
        "rose-light": "#ffe4e6",
        "blue-dark": "#0f172a",
        "blue-gray": "#1e293b",
        xxxx: "#00000",
        "nr-black": "#020617",
        "nr-light": "#f4f4f5",
        "nr-dark": "#18181b",
        "nr-darker": "#09090b",
        "nr-amber": "#fbbf24",
        "nr-rose": "#f43f5e",
        "nr-gray": "#a1a1aa",
        "nr-amber-light": "#fef3c7",
        "nr-rose-light": "#ffe4e6",
        "nr-blue-dark": "#0f172a",
        "nr-blue-gray": "#1e293b",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      padding: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        xxl: "32px",
      },
      margin: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        xxl: "32px",
      },
      borderRadius: {
        none: "0px",
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      gap: {
        none: "0px",
        sm: "4px",
        md: "8px",
        lg: "16px",
      },
      flexBasis: {
        "column-2-gap-2": "calc(100% / 2 - 8px)",
        "column-3-gap-2": "calc(100% / 3 - 8px)",
        "column-4-gap-2": "calc(100% / 4 - 8px)",
        "column-2-gap-4": "calc(100% / 2 - 16px)",
        "column-3-gap-4": "calc(100% / 3 - 16px)",
        "column-4-gap-4": "calc(100% / 4 - 16px)",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)",
        "event-vr-gradient":
          "linear-gradient(206.78deg, #FFCE31 2.92%, #B46B4D 26.52%, #670569 77.4%)",
        "home-hero-bgi":
          "linear-gradient(0deg, rgba(15,23,42,1) 0%, rgba(9,9,121,0) 50%), url('/assets/images/bg-p.svg'),url('/assets/images/home-hero.jpg')",
        "home-explore-bgi":
          "url('/assets/images/bg-p.png'), linear-gradient(180deg, rgba(15,23,42,1) 50%, rgba(9,9,11,1) 100%)",
        "home-corporate-bgi":
          "radial-gradient(#0b0d14 2px, #00000000 2px), linear-gradient(180deg, rgba(9,9,11,1) 50%, rgba(15,23,42,1) 100%)",
        "dj-hero-bgi":
          "linear-gradient(180deg, rgba(15,23,42,0.5) 80%, rgba(9,9,11,1) 100%), url('/assets/images/dj-hero.jpg')",
      },
      backgroundPosition: {
        "home-hero-bgp": "bottom center, center, center",
      },
      backgroundSize: {
        "home-hero-bgs": "100% 30%, cover, cover",
        "home-corporate-bgs": "40px 40px, cover",
      },
      boxShadow: {
        "button-shadow":
          "rgba(0, 0, 0, 0.3) 0px 2px 4px, rgba(245, 158, 11, 0.2) 0px 7px 13px -3px, rgba(245, 158, 11, 0.15) 0px -3px 0px inset;",

        "dropdown-shadow": "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        "event-vr-shadow":
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;",
      },
    },
  },
  plugins: [],
};

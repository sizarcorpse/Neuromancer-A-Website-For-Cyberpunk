/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        light: "#f4f4f5",
        dark: "#18181b",
        darker: "#09090b",
        amber: "#fbbf24",
        "amber-light": "#fef3c7",
        rose: "#f43f5e",
        "rose-light": "#ffe4e6",
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
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)",
        "event-vr-gradient":
          "linear-gradient(206.78deg, #FFCE31 2.92%, #B46B4D 26.52%, #670569 77.4%)",
      },
      boxShadow: {
        "button-shadow":
          "rgba(0, 0, 0, 0.3) 0px 2px 4px, rgba(245, 158, 11, 0.2) 0px 7px 13px -3px, rgba(245, 158, 11, 0.15) 0px -3px 0px inset;",
      },
    },
  },
  plugins: [],
};

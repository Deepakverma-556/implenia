import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightYellow: "#eba82c",
        darkYellow: "#febe32",
        customRed: "#ff132d",
        lightGray: "#f5f5f5",
        customGray: "#8F9090",
        lightBlack: "#00000040",
        customBlue: "#009FE3",
      },
      screens: {
        lg: "1025px",
        md: "770px",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#800020",
        secondary: "#6B5A00",
        background: "#FBFBFB",
      },
      boxShadow: {
        header: "0.5px 2px 2px 0px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [nextui()],
};
export default config;

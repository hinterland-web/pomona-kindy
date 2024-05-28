import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      backgroundImage: {
        // "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gradient-conic":
        //   "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        base: {
          50: "",
          // expand palette to contrast well with base content and with similar hue
          100: "",
          200: "",
          300: "",
        },
        // backgrounds and H1
        "base-content": "",

        // to create text hierarchy
        "base-content-secondary": "",

        //CTA colors
        primary: {
          text: "",
          "primary-content": "",
        },
      },
    },
  },
  plugins: [],
};
export default config;

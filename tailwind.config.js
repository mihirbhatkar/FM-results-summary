/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "hsl(var(--pri-light-red) / <alpha-value>)",
        primaryOrange: "hsl(var(--pri-orangey-yellow) / <alpha-value>)",
        primaryGreen: "hsl(var(--pri-green-teal) / <alpha-value>)",
        primaryCobalt: "hsl(var(--pri-cobalt-blue) / <alpha-value>)",

        gradLSB: "hsl(var(--grad-light-slate-blue) / <alpha-value>)",
        gradLRB: "hsl(var(--grad-light-royal-blue) / <alpha-value>)",
        gradVB: "hsla(var(--grad-violet-blue), 1)",
        gradPB: "hsla(var(--grad-persian-blue), 0)",

        neuPaleBlue: "hsl(var(--neu-pale-blue) / <alpha-value>)",
        neuLightLavender: "hsl(var(--neu-light-lavender) / <alpha-value>)",
        neuDarkGreyBlue: "hsl(var(--neu-dark-gray-blue) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};

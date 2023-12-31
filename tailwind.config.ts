import type { Config } from 'tailwindcss';
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      'desktop': '1280px',
      'tablet': '768px'
    },
    extend: {
      gridTemplateColumns: {
        "responsive": "repeat(auto-fit, minmax(min(150px, 100%), 1fr))",
      }
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            background: '#FAFAFA',
            foreground: '#29A19C',
            primary: {
              DEFAULT: '#29A19C',
              foreground: '#FFFFFF'
            },
            secondary: {
              DEFAULT: "#FFFFFF"
            }
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            background: '#222831',
            foreground: '#29A19C',
            primary: {
              DEFAULT: '#29A19C',
              foreground: '#FFFFFF'
            },
            secondary: {
              DEFAULT: "#2C3440"
            }
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
}
export default config

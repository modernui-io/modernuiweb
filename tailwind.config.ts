import typographyPlugin from "@tailwindcss/typography";
import scrollbarPlugin from "tailwind-scrollbar";
import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class"],
  content: ["src/**/*.{ts,tsx,mdx}", ".storybook/**/*.{ts,tsx}"],
  plugins: [typographyPlugin, scrollbarPlugin, animatePlugin],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xs: "1rem",
        sm: "2rem",
        lg: "3rem",
      },
      screens: {
        xxs: "380px",
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      fontSize: {
        md: [".9rem", "18px"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        btn: {
          background: "hsl(var(--btn-background))",
          "background-hover": "hsl(var(--btn-background-hover))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
          50: "hsl(var(--teal-50))",
          100: "hsl(var(--teal-100))",
          200: "hsl(var(--teal-200))",
          300: "hsl(var(--teal-300))",
          400: "hsl(var(--teal-400))",
          500: "hsl(var(--teal-500))",
          600: "hsl(var(--teal-600))",
          700: "hsl(var(--teal-700))",
          800: "hsl(var(--teal-800))",
          900: "hsl(var(--teal-900))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(var(--slate-50))",
          100: "hsl(var(--slate-100))",
          200: "hsl(var(--slate-200))",
          300: "hsl(var(--slate-300))",
          400: "hsl(var(--slate-400))",
          500: "hsl(var(--slate-500))",
          600: "hsl(var(--slate-600))",
          700: "hsl(var(--slate-700))",
          800: "hsl(var(--slate-800))",
          900: "hsl(var(--slate-900))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        bc: {
          high: "rgba(0,0,0,0.04)",
          primary: "rgba(0,0,0,0.04)",
          secondary: "rgba(0,0,0,0.04)",
          tertiary: "rgba(0,0,0,0.08)",
        },
        glassmorphism: "rgba(16, 16, 18, 0.60)",
        // tremor
        // light mode
        tremor: {
          brand: {
            faint: "#eff6ff", // blue-50
            muted: "#bfdbfe", // blue-200
            subtle: "#60a5fa", // blue-400
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#1d4ed8", // blue-700
            inverted: "#ffffff", // white
          },
          background: {
            muted: "#f9fafb", // gray-50
            subtle: "#f3f4f6", // gray-100
            DEFAULT: "hsl(var(--background))",
            emphasis: "#374151", // gray-700
          },
          border: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          ring: {
            DEFAULT: "#e5e7eb", // gray-200
          },
          content: {
            subtle: "#9ca3af", // gray-400
            DEFAULT: "#6b7280", // gray-500
            emphasis: "#374151", // gray-700
            strong: "#111827", // gray-900
            inverted: "#ffffff", // white
          },
        },
        highlight: {
          default: "var(--highlight-default)",
          purple: "var(--highlight-purple)",
          red: "var(--highlight-red)",
          yellow: "var(--highlight-yellow)",
          blue: "var(--highlight-blue)",
          green: "var(--highlight-green)",
          orange: "var(--highlight-orange)",
          pink: "var(--highlight-pink)",
          gray: "var(--highlight-gray)",
        },
        shiki: {
          class: "var(--sh-class)",
          identifier: "var(--sh-identifier)",
          sign: "var(--sh-sign)",
          string: "var(--sh-string)",
          keyword: "var(--sh-keyword)",
          comment: "var(--sh-comment)",
          jsxliterals: "var(--sh-jsxliterals)",
          property: "var(--sh-property)",
          entity: "var(--sh-entity)",
        },

        // dark mode
        "dark-tremor": {
          brand: {
            faint: "#0B1229", // custom
            muted: "#172554", // blue-950
            subtle: "#1e40af", // blue-800
            DEFAULT: "#3b82f6", // blue-500
            emphasis: "#60a5fa", // blue-400
            inverted: "#030712", // gray-950
          },
          background: {
            muted: "#131A2B", // custom
            subtle: "#1f2937", // gray-800
            DEFAULT: "hsl(var(--background))",
            emphasis: "#d1d5db", // gray-300
          },
          border: {
            DEFAULT: "#1f2937", // gray-800
          },
          ring: {
            DEFAULT: "#1f2937", // gray-800
          },
          content: {
            subtle: "#4b5563", // gray-600
            DEFAULT: "#6b7280", // gray-600
            emphasis: "#e5e7eb", // gray-200
            strong: "#f9fafb", // gray-50
            inverted: "#000000", // black
          },
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "var(--font-geist-sans)",
          ...fontFamily.sans,
        ],
        heading: [
          "var(--font-sans)",
          "var(--font-geist-sans)",
          ...fontFamily.serif,
        ],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
      },
      boxShadow: {
        high: "0 8px 28px rgba(0,0,0,0.28)",
        primary: "0 6px 20px rgba(0,0,0,0.2)",
        secondary: "0 6px 16px rgba(0,0,0,0.12)",
        tertiary: "0 2px 4px rgba(0,0,0,0.18)",
        entry: "rgb(176, 176, 176) 0px 0px 0px 1px inset",
        faint: "0 20px 42px 0 rgba(105, 143, 183, 0.1)",
        modal:
          "0 0 3px rgba(4,4,52,.09), 0 12px 16px rgba(4,4,52,.01), 0 22px 28px rgba(4,4,52,.04)",
        button:
          "0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)",

        // tremor
        // light
        "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        // dark
        "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        "dark-tremor-card":
          "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "dark-tremor-dropdown":
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "16": "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
        example: "repeat(auto-fill, minmax(200px, 1fr))",
        actions:
          "minmax(max-content,1fr) minmax(max-content,auto) minmax(130px,1fr)",
      },
      keyframes: {
        "collapsible-down": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "collapsible-up": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        blink: {
          "0%": { opacity: "0.2" },
          "20%": { opacity: "1" },
          "100%": { opacity: "0.2" },
        },
        moveUp: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-20px)" },
        },
        moveUpSmall: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        expand: {
          "0%": {
            opacity: "0",
            transform: "scale(1)",
          },
          "30%": {
            opacity: "1",
          },
          "80%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(30)",
            opacity: "0",
          },
        },
        "expand-large": {
          "0%": {
            opacity: "0",
            transform: "scale(1)",
          },
          "30%": {
            opacity: "1",
          },
          "80%": {
            opacity: "0.5",
          },
          "100%": {
            transform: "scale(96)",
            opacity: "0",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: "1",
          },
          "40%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: "0",
            transform: "translate(2rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },
        fadeOutLeft: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
        wiggle: {
          "0%": { transform: "rotate(10deg)" },
          "25%": { transform: "rotate(-10deg)" },
          "50%": { transform: "rotate(20deg)" },
          "75%": { transform: "rotate(-5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        marquee: {
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        "spin-reverse": {
          to: {
            transform: "rotate(-360deg)",
          },
        },
      },
      animation: {
        "collapsible-down": "collapsible-down 0.2s ease-out",
        "collapsible-up": "collapsible-up 0.2s ease-out",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        blink: "blink 1.4s infinite both;",
        "move-up": "moveUp 500ms infinite alternate",
        "move-up-small": "moveUpSmall 500ms infinite alternate",
        "scale-up": "scaleUp 500ms infinite alternate",
        "drip-expand": "expand 500ms ease-in forwards",
        "drip-expand-large": "expand-large 600ms ease-in forwards",
        "toast-enter": "fadeInRight 300ms ease-out",
        "toast-leave": "fadeOutLeft 300ms ease-in forwards",
        wiggle: "wiggle .5s ease-in-out",
      },
      transitionTimingFunction: {
        "curve-standard": "cubic-bezier(0.2,0,0,1)",
        "curve-enter": "cubic-bezier(0.1,0.9,0.2,1)",
        "curve-exit": "cubic-bezier(0.4,0,1,1)",
        "curve-linear": "cubic-bezier(0,0,1,1)", // mostly used for opacity transitions
        "curve-magnetic": "cubic-bezier(1,0,0.86,1)",
        "curve-elastic": "cubic-bezier(0,0,0.1,1)",
        "curve-organic": "cubic-bezier(0.35,0,0.65,1)",
      },
    },
    // tremor
    safelist: [
      {
        pattern:
          /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ["hover", "ui-selected"],
      },
      {
        pattern:
          /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ["hover", "ui-selected"],
      },
      {
        pattern:
          /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
        variants: ["hover", "ui-selected"],
      },
      {
        pattern:
          /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
      {
        pattern:
          /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
      {
        pattern:
          /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      },
    ],
  },
} satisfies Config;

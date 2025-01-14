import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
export const darkMode = ['class']
export const safelist = ['dark']
export const prefix = ''
export const content = [
  './pages/**/*.{ts,tsx,vue}',
  './components/**/*.{ts,tsx,vue}',
  './app/**/*.{ts,tsx,vue}',
  './src/**/*.{ts,tsx,vue}',
]
export const theme = {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px',
      xl: '1200px',
      lg: '960px',
      md: '720px',
      sm: '640px',
      '2sm': '480px',
      '4sm': '320px',
    },
  },
  extend: {
    fontFamily: {
      sans: ['Quicksand', 'sans-serif'],
    },
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
        50: 'hsl(217 91% 95%)',
        100: 'hsl(217 91% 90%)',
        200: 'hsl(217 91% 80%)',
        300: 'hsl(217 91% 70%)',
        400: 'hsl(217 91% 60%)',
        500: 'hsl(217 91% 50%)',
        600: 'hsl(217 91% 40%)',
        700: 'hsl(217 91% 30%)',
        800: 'hsl(217 91% 20%)',
        900: 'hsl(217 91% 10%)',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
        50: 'hsl(250 91% 95%)',
        100: 'hsl(250 91% 90%)',
        200: 'hsl(250 91% 80%)',
        300: 'hsl(250 91% 70%)',
        400: 'hsl(250 91% 60%)',
        500: 'hsl(250 91% 50%)',
        600: 'hsl(250 91% 40%)',
        700: 'hsl(250 91% 30%)',
        800: 'hsl(250 91% 20%)',
        900: 'hsl(250 91% 10%)',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
        50: 'hsl(152 76% 95%)',
        100: 'hsl(152 76% 90%)',
        200: 'hsl(152 76% 80%)',
        300: 'hsl(152 76% 70%)',
        400: 'hsl(152 76% 60%)',
        500: 'hsl(152 76% 50%)',
        600: 'hsl(152 76% 40%)',
        700: 'hsl(152 76% 30%)',
        800: 'hsl(152 76% 20%)',
        900: 'hsl(152 76% 10%)',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      xl: 'calc(var(--radius) + 4px)',
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
      'collapsible-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-collapsible-content-height)' },
      },
      'collapsible-up': {
        from: { height: 'var(--radix-collapsible-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'collapsible-down': 'collapsible-down 0.2s ease-in-out',
      'collapsible-up': 'collapsible-up 0.2s ease-in-out',
    },
  },
}
export const plugins = [animate]

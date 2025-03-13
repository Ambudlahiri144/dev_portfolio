// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', 
    './src/app/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["var(--raleway)"],
        kanit: ["var(--kanit)"],
        montserrat: ["var(--montserrat)"],
        lugrasimo: ["var(--lugrasimo)"],
        sans: ['"Helvetica Neue"', 'sans-serif'],
        bodoni: ["var(--bodoni)"],
        inter: ['"Inter"', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        times: ['"Times New Roman"', 'serif'],
      },
      colors: {
        'custom-beige': '#f5ebe1',
      },
      keyframes: {
        fadeInSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInSlideDown: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(20px)' },
        },
        fadeInPeriod: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideUpOverlay: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        slideDownOverlay: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        
        popOut: {
          '0%': { opacity: '0',transform: 'scale(0.9)'},  
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        
      },
      animation: {  
        'fade-in-period': 'fadeInPeriod 5s ease-out forwards',
        'fade-in-slide-up': 'fadeInSlideUp 2s ease-out forwards',
        'slide-up-overlay': 'slideUpOverlay 0.8s ease-out forwards',
        'slide-down-overlay': 'slideDownOverlay 0.8s ease-out forwards',
        'pop-out': 'popOut 2s ease-out forwards',
        'pop-out-delayed': 'popOut 2s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;

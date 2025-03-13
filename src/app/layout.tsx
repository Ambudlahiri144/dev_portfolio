// src/app/layout.tsx
import { Kanit, Montserrat, Raleway, Lugrasimo, Bodoni_Moda,Newsreader } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--kanit",
  display: 'swap',
  adjustFontFallback: false,
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--raleway",
  display: 'swap',
  adjustFontFallback: false,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: "--montserrat",
  display: 'swap',
  adjustFontFallback: false,
});

const lugrasimo = Lugrasimo({
  subsets: ['latin'],
  weight: ['400'], 
  variable: "--lugrasimo",
  display: 'swap',
  adjustFontFallback: false,
});

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: "--bodoni",
  display: 'swap',
  adjustFontFallback: false,
});


export const metadata = {
  icons: {
    icon: '/images/logo.png',
  },
  title: 'Ambud Lahiri',
  description: 'A portfolio showcasing my work',
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={`${bodoni.variable} ${lugrasimo.variable} ${montserrat.variable} ${kanit.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}

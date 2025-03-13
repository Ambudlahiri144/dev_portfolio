// src/app/layout.tsx
import { Kanit, Montserrat, Raleway, Lugrasimo, Bodoni_Moda } from 'next/font/google';
import './globals.css';

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--kanit"
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--raleway"
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: "--montserrat"
});

const lugrasimo = Lugrasimo({
  subsets: ['latin'],
  weight: ['400'], 
  variable: "--lugrasimo"
});

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  // Remove style override; it defaults to 'normal'
  // style: ['normal'], 
  variable: "--bodoni"
});

export const metadata = {
  title: 'My Portfolio',
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

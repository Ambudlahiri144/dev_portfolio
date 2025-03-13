// src/app/layout.tsx
import { Kanit,Montserrat,Raleway,Lugrasimo,Bodoni_Moda } from 'next/font/google';
import './globals.css';

// Import Bodoni Moda for the large headings (WORK, ABOUT, CONTACT)
const kanit = Kanit({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--kanit"  // Adjust weights as needed
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--raleway"  // Adjust weights as needed
});

// Import Montserrat for the description
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: "--montserrat" // Use light and regular for description
});
const lugrasimo = Lugrasimo({
  subsets: ['latin'],
  weight: ['400'], 
  variable: "--lugrasimo"  // Adjust weights as needed
});
const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400','500','600','700','800','900'], 
  variable: "--bodoni"  // Adjust weights as needed
});
export const metadata = {
  title: 'My Portfolio',
  description: 'A portfolio showcasing my work',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodoni.variable} ${lugrasimo.variable} ${montserrat.variable} ${kanit.variable} ${raleway.variable}`}>
        {children}
      </body>
    </html>
  );
}

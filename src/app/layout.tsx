import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Poppins({ 
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});
 
export const metadata: Metadata = {
  title: 'StanCodes | Software Engineer',
  description: 'Creative Software Engineer with 3+years of experience, specializing in web development, app development,  cloud computing, and game development. Building scalable products with great user experiences.',
  keywords: ['Software Engineer', 'Web Development', 'App Development', 'Cloud Computing', 'Game Development', 'Backend Developer', 'StanCodes'],
  authors: [{ name: 'StanCodes' }],
  creator: 'StanCodes',
  publisher: 'StanCodes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stancodess.vercel.app/',
    siteName: 'StanCodes Portfolio',
    title: 'StanCodes | Software Engineer',
    description: 'Creative Software Engineer specializing in web development, app development,  and cloud computing. Building scalable products with great user experiences.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Stanley Ugochukwu - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stanley Ugochukwu | Software Engineer',
    description: 'Creative Software Engineer building scalable products with great user experiences.',
    creator: '@Stan_Coder',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: '#6f1cd7',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Stanley Ugochukwu',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

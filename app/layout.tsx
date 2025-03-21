import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import '@/assets/styles/globals.css'
import { NEXT_APP_DESCRIPTION, NEXT_APP_NAME } from "@/lib/constant";
import {ThemeProvider} from 'next-themes'

const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: NEXT_APP_NAME,
  description: NEXT_APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} antialiased`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        
      </body>
    </html>
  );
}

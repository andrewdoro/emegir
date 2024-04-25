import { cn } from "@/lib/utils";
import "./globals.css";
import { Noto_Sans_Cuneiform } from "next/font/google";
import localFont from "next/font/local";

import { ThemeProvider } from "./_components/theme-provider";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";

export const metadata = {
  metadataBase: new URL("https://postgres-drizzle.vercel.app"),
  title: "Vercel Postgres Demo with Drizzle",
  description: "A simple Next.js app with Vercel Postgres as the database and Drizzle as the ORM",
};

const fontSans = localFont({
  src: "../public/fonts/OverusedGrotesk-VF.woff2",
  variable: "--font-sans",
});

const ptSans = Noto_Sans_Cuneiform({
  subsets: ["latin"],
  variable: "--font-main",
  weight: "400",
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          ptSans.variable
        )}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <div className='px-6 max-w-7xl mx-auto'>
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

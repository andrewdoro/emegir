import { cn } from "@/lib/utils";
import "./globals.css";
import { Inter as FontSans, Lugrasimo } from "next/font/google";
import { ThemeProvider } from "./_components/theme-provider";
import Navbar from "./_components/navbar";

export const metadata = {
  metadataBase: new URL("https://postgres-drizzle.vercel.app"),
  title: "Vercel Postgres Demo with Drizzle",
  description: "A simple Next.js app with Vercel Postgres as the database and Drizzle as the ORM",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ptSans = Lugrasimo({
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
          <div>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

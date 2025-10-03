import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Senior Frontend Engineer | Performance & Accessibility",
  description:
    "Frontend engineer specialized in React/Next.js, performance engineering, and AI-assisted development.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Senior Frontend Engineer | Performance & Accessibility",
    description:
      "Frontend engineer specialized in React/Next.js, performance engineering, and AI-assisted development.",
    type: "website",
    url: "https://example.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Frontend Engineer | Performance & Accessibility",
    description:
      "Frontend engineer specialized in React/Next.js, performance engineering, and AI-assisted development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AOSInit from "./components/AOSInit";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const barlow = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AyaTech – Project-Based Coding, AI & Robotics Labs for Builders",
  description:
    "Ship real code, real robots, real AI agents. Project-based labs for students and AI-native professionals. Book a free discovery call.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${barlow.variable} h-full antialiased`}
    >
      <body className="bg-white text-black min-h-full flex flex-col" style={{ fontFamily: "var(--font-jakarta), system-ui, sans-serif" }}>
        <AOSInit />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

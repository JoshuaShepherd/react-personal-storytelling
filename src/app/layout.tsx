import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { StoryHeader } from "@/components/story/story-header";
import { StoryFooter } from "@/components/story/story-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Personal Story & Coaching",
  description: "Authentic personal coaching and storytelling services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} font-sans antialiased bg-warm-50 text-warm-900`}
      >
        <StoryHeader />
        <main className="min-h-screen">
          {children}
        </main>
        <StoryFooter />
      </body>
    </html>
  );
}

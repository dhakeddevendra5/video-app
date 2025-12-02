import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Video Chat App | Devendra Dhaked",
  description: "A video chat application where users can join a room and chat. Built with Next.js, TypeScript, Tailwind CSS, and WebRTC.",
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },authors: [
    {
      name: "Devendra Dhaked",
      url: "",
    },
  ],  creator: "Devendra Dhaked",
  openGraph: {
    title: "Video Chat App | Devendra Dhaked",
    description: "A video chat application where users can join a room and chat. Built with Next.js, TypeScript, Tailwind CSS, and WebRTC.",
    url: "https://video-chat-app-devendradhaked.vercel.app/",
    siteName: "Video Chat App",
    images: [
      {
        url: "https://video-chat-app-devendradhaked.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Video Chat App",
      },
    ],
    locale: "en_US",
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

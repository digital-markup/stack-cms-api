import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueMon = localFont({
  src: [
    {
      path: "./fonts/NeueMontreal-Regular.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/NeueMontreal-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMon.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

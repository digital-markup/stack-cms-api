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

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Stack CMS",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMon.variable} antialiased`}>{children}</body>
    </html>
  );
}

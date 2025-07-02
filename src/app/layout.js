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

export const metadata = {
  title: "John Doe - Developer Portfolio | WhatsApp Style",
  description: "Full-Stack Developer Portfolio showcased in WhatsApp style interface. Explore my projects, skills, and experience through an interactive chat-like experience.",
  keywords: "developer, portfolio, full-stack, javascript, react, nextjs, whatsapp",
  author: "John Doe",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
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

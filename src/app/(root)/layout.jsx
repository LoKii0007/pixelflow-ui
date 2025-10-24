import { Geist, Geist_Mono } from "next/font/google";
import "../global.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixelflow UI",
  description:
    "PixelFlow UI is a fast, lightweight, and customizable React component library designed for building beautiful, responsive web applications. Featuring pre-built UI elements, seamless animations, dark mode support, and optimized performance, PixelFlow UI enhances your development workflow. Perfect for modern web projects. Get started today!",
};

export default function RootLayout({ children }) {
  return <>{children}</>;
}

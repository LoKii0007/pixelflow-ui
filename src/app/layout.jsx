import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ZustandProvider } from "@/stores/provider";
import "./global.css";

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
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://silentpulse.vercel.app/script.js"
          data-website-id="f52fe790-74fa-47fe-a858-aa6f384ac197"
        ></script>
      </head>
      <body
        className={` ${geistSans.variable} ${geistMono.variable} antialiased w-full bg-zinc-950`}
      >
        <ZustandProvider>
          <Navbar />
          {children}
        </ZustandProvider>
      </body>
    </html>
  );
}

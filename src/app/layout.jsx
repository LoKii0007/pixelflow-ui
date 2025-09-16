import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import { ZustandProvider } from "@/stores/provider";
import "./global.css";
import "./app.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
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
          data-website-id={process.env.UMAMI_TRACKING_ID}
        ></script>
      </head>
      <body
        className={` ${manrope.variable} antialiased w-full bg-zinc-950 font-manrope`}
      >
        <ZustandProvider>
          <Navbar />
          {children}
        </ZustandProvider>
      </body>
    </html>
  );
}

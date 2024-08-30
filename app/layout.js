import { Outfit } from "next/font/google";
import "./globals.css";

const inter = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "My Blogs",
  description: "Made by @shubhrajps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

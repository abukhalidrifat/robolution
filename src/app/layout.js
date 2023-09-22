import "./globals.css";
import { Mooli } from "next/font/google";

const inter = Mooli({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Robolution",
  description: "The Ultimate Robots Competition",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-slate-100">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}

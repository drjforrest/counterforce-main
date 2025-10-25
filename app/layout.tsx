import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import NavBar from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Counterforce",
  description: "Real-time detection and mitigation of information warfare",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

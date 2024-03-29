import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/ui/header/Header";
import Footer from "../../components/Footer";
import Sidebar from "../../components/ui/sidebar/Sidebar";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="layout">
          <div className="header">
            <Header />
          </div>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="body">{children}</div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

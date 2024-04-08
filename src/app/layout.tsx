import { Inter } from "next/font/google";
import "./globals.css";
import '@floating-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from "@/components/navbar";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Client Manager",
  description: "Client manager created by Fajorezo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="es">
      
      
      <body className={inter.className}>
      <Navbar />
      <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center mt-4">
          <h1></h1>
        </div>
      </div>
      
        {children}
        </body>
      
      
    </html>
  );
}

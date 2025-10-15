import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "@/components/common/Navbar";

const inter = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "EU Career CRM",
  description: "A simple CRM to manage your career applications",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactLenis root>
        <body className={`${inter.className} antialiased`}>
          <AuthProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Toaster richColors position="top-right" />
          </AuthProvider>
        </body>
      </ReactLenis>
    </html>
  );
}

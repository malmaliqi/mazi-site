import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/CartProvider";

// We import the specific font weights we need from Montserrat.
const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700", "900"] });

export const metadata: Metadata = {
  title: "MA'ZI Collective",
  description: "Mal Maliqi, Grey Lenses, Yoda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <CartProvider>
          <Navbar />
          {/* We add a main tag that pushes down the content below our fixed navbar */}
          <main className="pt-[80px] min-h-screen">
            {children}
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

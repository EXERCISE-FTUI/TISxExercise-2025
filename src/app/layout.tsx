import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PopupProvider } from "@/contexts/PopupContext";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TIS FTUI 2025",
  description: "TIS FTUI 2025 X EXERCISE FTUI 2025",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="min-h-screen w-full flex justify-center items-center">
          <div className="w-full flex flex-col max-w-[2100px] overflow-x-hidden">
            <PopupProvider>
              <Header />
              {children}
              <Footer />
            </PopupProvider>
          </div>
        </div>
      </body>
    </html>
  );
}

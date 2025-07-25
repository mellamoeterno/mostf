import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from './contexts/CartContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mostf",
  description: "Mostf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}

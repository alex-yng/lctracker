import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leetcode Tracker",
  description: "Track your Leetcode progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "white",
          colorTextOnPrimaryBackground: "black",
        },
      }}
    >
      <html lang='en'>
        <body className={`${inter.className} antialiased bg-black`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}

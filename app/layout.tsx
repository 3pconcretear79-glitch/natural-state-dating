import type { Metadata } from "next";
import "./globals.css";
import { PayPalProviderWrapper } from "@/components/PayPalProviderWrapper";

export const metadata: Metadata = {
  title: "PorchSwing — Natural State Dating",
  description: "Authentic connections rooted in Arkansas values. Get Verified and find your match.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PayPalProviderWrapper>{children}</PayPalProviderWrapper>
      </body>
    </html>
  );
}

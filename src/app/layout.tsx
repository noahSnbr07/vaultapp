import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Vault Community",
  description: "Collaborative Management Tool",
  keywords: ["Vault", "Vault Community", "Vault App Community", "vault", "vault app", "vault app community"],
  creator: "Noah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-background text-foreground`}>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
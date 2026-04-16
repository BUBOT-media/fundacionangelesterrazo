import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Fundación Ángeles Terrazo | Premio Literario Anual",
  description: "Fundación literaria dedicada a reconocer y premiar la excelencia en la literatura. Entregamos anualmente un premio a un escritor reconocido.",
  keywords: ["fundación literaria", "premio literario", "literatura", "escritores", "Ángeles Terrazo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased min-h-screen flex flex-col">
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}

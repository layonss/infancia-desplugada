// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import LayoutWrapper from "@/components/LayoutWrapper";

// O SEO fica aqui, pois este é um Server Component
export const metadata: Metadata = {
  title: "Infância (Des)plugada | Pensamento Computacional Sem Telas",
  description: "Projeto de Iniciação Científica focado no desenvolvimento do pensamento computacional sem o uso de telas.",
  openGraph: {
    title: "Infância (Des)plugada",
    description: "Desenvolvendo o pensamento computacional sem telas.",
    images: ["/og-image.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      {/* icon.png na pasta app é detectado automaticamente aqui */}
      <body className="antialiased">
        {/* Chamamos o Wrapper que vai cuidar de toda a lógica visual */}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
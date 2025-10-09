import './globals.css';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Henrique Nascimento - Desenvolvedor FullStack',
  description:
    'Desenvolvedor FullStack especializado em Node.js, Next.js, TypeScript e tecnologias modernas. Criando soluções elegantes e eficientes.',
  keywords: 'desenvolvedor, fullstack, nodejs, nextjs, typescript, react, programador, fortaleza',
  authors: [{ name: 'Henrique Nascimento' }],
  creator: 'Henrique Nascimento',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://seudominio.com',
    title: 'Henrique Nascimento - Desenvolvedor FullStack',
    description:
      'Desenvolvedor FullStack especializado em Node.js, Next.js, TypeScript e tecnologias modernas.',
    siteName: 'Henrique Nascimento Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henrique Nascimento - Desenvolvedor FullStack',
    description:
      'Desenvolvedor FullStack especializado em Node.js, Next.js, TypeScript e tecnologias modernas.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

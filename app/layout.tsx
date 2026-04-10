import './globals.css';
import { ThemeProvider } from 'next-themes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://henriquedev.vercel.app'),
  title: 'Henrique Nascimento | Full Stack Engineer',
  description:
    'Portfólio de Henrique Nascimento, engenheiro full stack com foco em produtos digitais, arquitetura backend, interfaces modernas e operações em produção.',
  keywords:
    'Henrique Nascimento, desenvolvedor full stack, typescript, next.js, node.js, react, nestjs, fortaleza',
  authors: [{ name: 'Henrique Nascimento' }],
  creator: 'Henrique Nascimento',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://henriquedev.vercel.app',
    title: 'Henrique Nascimento | Full Stack Engineer',
    description:
      'Engenharia full stack para produtos digitais, plataformas SaaS, automações e aplicações web modernas.',
    siteName: 'Henrique Nascimento Portfolio',
    images: [
      {
        url: '/images/profile/henrique-profile.webp',
        width: 800,
        height: 600,
        alt: 'Henrique Nascimento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Henrique Nascimento | Full Stack Engineer',
    description:
      'Portfólio com cases em SaaS, telehealth, automação de documentos, web apps e mobile.',
    images: ['/images/profile/henrique-profile.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import Providers from '@/components/Providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          enableColorScheme
        >
          <Providers>{children}</Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}

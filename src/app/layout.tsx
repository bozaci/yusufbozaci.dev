import type { Metadata, Viewport } from 'next';
import { ViewTransitions } from 'next-view-transitions';
import { Analytics } from '@vercel/analytics/next';
import Config from '@/config.json';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/shared/header'));
const Footer = dynamic(() => import('@/components/shared/footer'));

import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '@/styles/main.scss';

export const metadata: Metadata = {
  title: Config.meta.general.title,
  description: Config.meta.general.description,
  openGraph: {
    title: Config.meta.general.title,
    description: Config.meta.general.description,
    siteName: Config.meta.general.prefix,
    images: [
      {
        url: `${process.env.APP_BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: Config.meta.general.description,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@yusufbzci',
    creator: '@yusufbzci',
    title: Config.meta.general.title,
    description: Config.meta.general.description,
    images: [`${process.env.APP_BASE_URL}/og-image.jpg`],
  },
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
          <Header />
          <div className="main spacing-lg spacing-dr-top">{children}</div>
          <Footer />
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}

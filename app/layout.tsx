import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'NEXORA — Every tool. Zero friction.',
  description: 'A beautifully crafted collection of free, useful online tools. Weather, currency conversion, country explorer, QR codes, text tools and more — all in one workspace.',
  applicationName: 'NEXORA',
  keywords: ['free online tools','weather','currency converter','QR generator','country explorer','text tools'],
  openGraph: { title: 'NEXORA — Every tool. Zero friction.', description: 'Your everyday toolkit, reimagined.', type: 'website' },
  robots: { index: true, follow: true }
};
export const viewport: Viewport = { themeColor: '#08090d', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

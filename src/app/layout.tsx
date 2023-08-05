import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import DashboardMenu from './components/DashboardMenu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rajat Rawat Portfolio',
  description: 'Rajat Rawat portfolio website with all the updates',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DashboardMenu>{children}</DashboardMenu>
      </body>
    </html>
  );
}

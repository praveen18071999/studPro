'use client';

import { usePathname } from 'next/navigation';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import { Toaster } from '@/components/ui/toaster';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuthPage = pathname === '/authentication';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <main className={`flex-grow ${!isAuthPage ? 'mt-16 mb-16' : ''}`}>
        {children}
      </main>
      <Toaster />
      {!isAuthPage && <Footer />}
    </>
  );
}
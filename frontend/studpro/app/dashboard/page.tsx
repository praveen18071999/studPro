'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function DashboardPage() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('access_token') == null) {
        router.push('/authentication');
      }
    }
  }, [router]);
  return (
    <></>
  );
}
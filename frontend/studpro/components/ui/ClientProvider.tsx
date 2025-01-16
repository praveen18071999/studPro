/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'

export function ClientProviders({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
    // if(usePathname() == '/authentication'){
    //     return null;
    // }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}

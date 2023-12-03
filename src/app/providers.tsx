'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider
        attribute='class'
        defaultTheme='light'
        themes={['light', 'dark']}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
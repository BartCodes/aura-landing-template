"use client";

import {HeroUIProvider} from '@heroui/react'
import {ToastProvider} from "@heroui/toast";

export default function Providers({children}: {children: React.ReactNode}) {
  return (
    <HeroUIProvider>
      <ToastProvider
        placement="top-center"
        toastOffset={70}
      />
      {children}
    </HeroUIProvider>
  )
}
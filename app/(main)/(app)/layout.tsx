'use client'
import Menu from '@/components/menu/menu'
import { Button } from '@heroui/button'
import { Icon } from '@iconify/react'
import React from 'react'
import { useMenuStore } from '@/components/menu/store'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const onOpen = useMenuStore(store => store.onOpen)
  return <>
    <div className="!border-r-small border-divider">
      <Menu />
    </div>
    <div className="w-full flex-1 flex-col overflow-y-auto p-4">
      <header className="rounded-medium border-small border-divider flex items-center gap-3 p-4">
        <Button
          isIconOnly
          className="flex sm:hidden"
          size="sm"
          variant="light"
          onPress={onOpen}
        >
          <Icon
            className="text-default-500"
            height={24}
            icon="solar:hamburger-menu-outline"
            width={24}
          />
        </Button>
        <h2 className="text-medium text-default-700 font-medium">
          Overview
        </h2>
      </header>
      <main className="mt-4 h-full w-full overflow-visible">
        {children}
      </main>
    </div>
  </>
}

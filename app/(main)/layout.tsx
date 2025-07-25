'use client'
import Header from '@/components/header'
import Menu from '@/components/menu/menu'
import { Button } from '@heroui/button'
import { Icon } from '@iconify/react'
import React from 'react'
import { useMenuStore } from '@/components/menu/store'

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const onOpen = useMenuStore(store => store.onOpen)
  console.log('ServiceLayout')
  return (
    <div className="flex h-screen flex-col">
      <div className="shrink-0">
        <Header />
      </div>
      <div className="h-full w-full flex-1 overflow-auto">
        <div className="flex h-full w-full">
          <Menu />
          <div className="w-full flex-1 flex-col overflow-y-scroll p-4">
            <header className="rounded-medium border-small border-divider flex h-16 items-center gap-2 px-4">
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
            <main className="mt-4 box-border h-full w-full overflow-visible">
              <div className="rounded-medium border-small border-divider flex h-[90%] w-full flex-col gap-4">
                {children}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}

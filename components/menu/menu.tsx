'use client'

import React from 'react'
import { Divider, ScrollShadow } from '@heroui/react'

import SidebarDrawer from '@/components/sidebar/sidebar-drawer'

import Sidebar from '@/components/sidebar/sidebar'

import MenuHeader from './menu-header'
import MenuFooter from './menu-footer'
import { useMenuStore } from '@/components/menu/store'

export const Menu = React.forwardRef<HTMLElement>(
  ({ ...props }, ref) => {
    const { ...store } = useMenuStore(store => store)
    console.log(store)
    return (
      <SidebarDrawer
        className="!border-r-small border-divider overflow-y-auto"
        isOpen={store.isOpen}
        onOpenChange={store.onOpenChange}
      >
        <div className="border-r-1 relative flex h-full w-56 flex-1 flex-col">
          {/* Header */}
          <div className="h-36 shrink-0 grow-0 overflow-y-auto">
            {store.customHeaderContent ? (
              <MenuHeader customHeaderContent={store.customHeaderContent} />
            ) : store.title ? (
              <MenuHeader title={store.title} description={store.description} />
            ) : null}
          </div>
          <Divider />
          {/* Sidebar */}
          <ScrollShadow className="h-full max-h-full py-6">
            <Sidebar
              defaultSelectedKey={store.defaultSelectedKey}
              items={store.items}
              ref={ref}
            />
          </ScrollShadow>
          {/* Footer */}
          <div className="max-h-36 shrink-0 grow-0 overflow-y-auto">
            <MenuFooter customFooterContent={store.customFooterContent} />
          </div>
        </div>
      </SidebarDrawer>
    )
  },
)

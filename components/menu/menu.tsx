'use client'

import React from 'react'
import { Divider, ScrollShadow } from '@heroui/react'

import SidebarDrawer from '@/components/sidebar/sidebar-drawer'

import Sidebar from '@/components/sidebar/sidebar'

import MenuHeader from './menu-header'
import MenuFooter from './menu-footer'
import { useMenuStore } from '@/components/menu/store'
import { useShallow } from 'zustand/react/shallow'
// import { useShallow } from 'zustand/shallow'

type MenuProps = {
  ref?: React.Ref<HTMLAnchorElement>
  tt?: string
}

const Menu: React.FC<MenuProps> = ({ ref, ...props }: MenuProps) => {
  const {
    title,
    items,
    customFooterContent,
    customHeaderContent,
    defaultSelectedKey,
    description,
    isOpen,
    onOpenChange,
  } = useMenuStore(useShallow(state => ({
    title: state.title,
    items: state.items,
    isOpen: state.isOpen,
    onOpenChange: state.onOpenChange,
    customHeaderContent: state.customHeaderContent,
    description: state.description,
    defaultSelectedKey: state.defaultSelectedKey,
    customFooterContent: state.customFooterContent,
  })))
  console.log(title)
  return (
      <SidebarDrawer
          className="!border-r-small border-divider overflow-y-auto"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
      >
        <div className="border-r-1 relative flex h-full w-56 flex-1 flex-col">
          {/* Header */}
          <div className="h-36 shrink-0 grow-0 overflow-y-auto">
            {customHeaderContent ? (
                <MenuHeader customHeaderContent={customHeaderContent} />
            ) : title ? (
                <MenuHeader title={title} description={description} />
            ) : null}
          </div>
          <Divider />
          {/* Sidebar */}
          <ScrollShadow className="h-full max-h-full py-6">
            <Sidebar
                defaultSelectedKey={defaultSelectedKey}
                items={items}
                isCompact={true}
                ref={ref}
            />
          </ScrollShadow>
          {/* Footer */}
          <div className="max-h-36 shrink-0 grow-0 overflow-y-auto">
            <MenuFooter customFooterContent={customFooterContent} />
          </div>
        </div>
      </SidebarDrawer>
  )
}
export default React.memo(Menu)

'use client'

import React from 'react'
import {
  Button,
  Divider,
  ScrollShadow,
  cn,
} from '@heroui/react'

import SidebarDrawer from '@/components/sidebar/sidebar-drawer'

import Sidebar from '@/components/sidebar/sidebar'

import MenuHeader from './menu-header'
import MenuFooter from './menu-footer'
import { useMenuStore } from '@/components/menu/store'
import { useShallow } from 'zustand/react/shallow'
import { Icon } from '@iconify/react'
import { useMediaQuery } from 'usehooks-ts'

type MenuProps = {
  ref?: React.Ref<HTMLAnchorElement>;
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
  } = useMenuStore(
    useShallow(state => ({
      title: state.title,
      items: state.items,
      isOpen: state.isOpen,
      onOpenChange: state.onOpenChange,
      customHeaderContent: state.customHeaderContent,
      description: state.description,
      defaultSelectedKey: state.defaultSelectedKey,
      customFooterContent: state.customFooterContent,
    })),
  )
  console.log(title)

  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const isCompact = isCollapsed || isMobile

  const onToggle = () => {
    console.log(isCollapsed)
    setIsCollapsed(prev => !prev)
  }

  return (
    <>
      <SidebarDrawer
        className="!border-r-small border-divider overflow-y-auto"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        sidebarWidth={300}
      >
        <div className="relative flex h-full w-56 flex-col">
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
              ref={ref}
            />
          </ScrollShadow>
          {/* Footer */}
          <div className="max-h-36 shrink-0 grow-0 overflow-y-auto">
            <MenuFooter customFooterContent={customFooterContent} />
          </div>
        </div>
      </SidebarDrawer>

      <div
        className={cn(
          'border-r-1 transition-width relative flex h-full w-56 flex-col',
          {
            'w-16 items-center': isCompact,
          },
        )}
      >
        <div
          className={cn(
            'h-36 shrink-0 grow-0 overflow-y-auto',

            {
              'justify-center gap-0': isCompact,
            },
          )}
        >
          {customHeaderContent ? (
            <MenuHeader customHeaderContent={customHeaderContent} />
          ) : title ? (
            <MenuHeader title={title} description={description} />
          ) : null}
        </div>

        <div className="shrink-0">
          <Button fullWidth={true} className="min-w-0" variant="light" onPress={onToggle}>
            <Icon
              className="text-default-500"
              height={24}
              icon={isCompact ? 'tabler:arrow-bar-right' : 'tabler:arrow-bar-left'}
              width={24}
            />
          </Button>
        </div>

          <ScrollShadow className="h-full py-6">
            <Sidebar
              defaultSelectedKey="home"
              isCompact={isCompact}
              items={items}
            />
          </ScrollShadow>

         {/* Footer */}
        <div className="max-h-36 shrink-0 grow-0 overflow-y-auto">
          <MenuFooter customFooterContent={customFooterContent} />
        </div>
      </div>
    </>
  )
}
export default React.memo(Menu)

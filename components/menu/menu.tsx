'use client'

import React from 'react'
import { Button, Divider, ScrollShadow, cn } from '@heroui/react'
import SidebarDrawer from './sidebar/sidebar-drawer'

import Sidebar from './sidebar/sidebar'

import MenuHeader from './menu-header'
import MenuFooter from './menu-footer'
import { useMenuStore } from '@/components/menu/store'
import { useShallow } from 'zustand/react/shallow'
import { Icon } from '@iconify/react'
import { useMediaQuery } from 'usehooks-ts'

type MenuProps = {
  ref?: React.Ref<HTMLAnchorElement>;
}

const Menu: React.FC = ({ ref, ...props }: MenuProps) => {
  const {
    title,
    items,
    customFooterContent,
    customHeaderContent,
    description,
    isOpen,
    onOpenChange,
    isLoaded,
  } = useMenuStore(
    useShallow(state => ({
      title: state.title,
      items: state.items,
      isOpen: state.isOpen,
      onOpenChange: state.onOpenChange,
      customHeaderContent: state.customHeaderContent,
      description: state.description,
      customFooterContent: state.customFooterContent,
      isLoaded: state.isLoaded,
    })),
  )

  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const isCompact = isCollapsed || isMobile

  const onToggle = () => {
    setIsCollapsed(prev => !prev)
  }
  console.log(isLoaded)

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
            <MenuHeader customHeaderContent={customHeaderContent} title={title} description={description} isLoaded={isLoaded}/>
          </div>
          <Divider />
          {/* Sidebar */}
          <ScrollShadow className="h-full max-h-full py-6">
            <Sidebar items={items} ref={ref} isLoaded={isLoaded}/>
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
          <MenuHeader customHeaderContent={customHeaderContent} title={title} description={description} isLoaded={isLoaded}/>
        </div>

        <div className="shrink-0">
          <Button
            fullWidth={true}
            className="min-w-0"
            variant="light"
            onPress={onToggle}
          >
            <Icon
              className="text-default-500"
              height={24}
              icon={
                isCompact ? 'tabler:arrow-bar-right' : 'tabler:arrow-bar-left'
              }
              width={24}
            />
          </Button>
        </div>

        <ScrollShadow className="h-full py-6">
          <Sidebar
            isCompact={isCompact}
            items={items}
            ref={ref}
            isLoaded={isLoaded}
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

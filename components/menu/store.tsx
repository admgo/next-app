'use client'

import { create } from 'zustand'
import type { SidebarProps } from '@/components/sidebar/sidebar'
import type { MenuHeaderProps } from '@/components/menu/menu-header'
import type { MenuFooterProps } from '@/components/menu/menu-footer'

export type MenuProps = SidebarProps & MenuHeaderProps & MenuFooterProps

type Action = {
  setMenu: (menu: MenuProps) => void;
}

export const useMenuStore = create<
    MenuProps
    & Action & {
      isOpen: boolean;
      onOpen: () => void;
      onOpenChange: () => void;
    }
>(set => ({
  // return {
    title: undefined,
    description: undefined,
    customHeaderContent: undefined,
    customFooterContent: undefined,
    items: [],
    defaultSelectedKey: 'home',
    setMenu: (menu) => {
      set({
        title: menu.title,
        description: menu.description,
        customHeaderContent: menu.title ? menu.customHeaderContent : undefined,
        customFooterContent: menu.customFooterContent,
        items: menu.items,
        defaultSelectedKey: menu.defaultSelectedKey,
      })
    },
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onOpenChange: () => set({ isOpen: false }),
  // }
}))

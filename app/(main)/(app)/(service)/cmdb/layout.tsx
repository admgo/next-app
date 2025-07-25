'use client'
import { useMenuStore } from '@/components/menu/store'
import { menu } from '@/app/(main)/(app)/(service)/cmdb/menu'

export default function CMDBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useMenuStore.setState(
    {
      title: menu.title,
      items: menu.items,
      defaultSelectedKey: menu.defaultSelectedKey,
      description: menu.description,
      customHeaderContent: menu.title ? menu.customHeaderContent : undefined,
      customFooterContent: menu.customFooterContent,
    },
  )
  return <div>{children}</div>
}

'use client'
import { menu } from '@/app/(main)/home/menu'
import { useMenuStore } from '@/components/menu/store'
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('HomeServiceLayout')
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
  return (
    <>
      {children}
    </>
  )
}

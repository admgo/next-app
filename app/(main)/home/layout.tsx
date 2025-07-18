'use client'
import { menu } from '@/app/(main)/home/menu'
import { useMenuStore } from '@/components/menu/store'
export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const setMenu = useMenuStore(s => s.setMenu)
  setMenu(menu)
  return (
    <>
      {children}
    </>
  )
}

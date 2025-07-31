'use client'
import Menu from '@/components/menu/menu'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { cn } from '@heroui/react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])
  const isCompact = isCollapsed || isMobile

  const onToggle = () => {
    setIsCollapsed(prev => !prev)
  }

  if (!isMounted) return null
  return (
    <>
      <div
        className={cn(
          'transition-width border-r-small border-divider flex h-full w-56 flex-col',
          {
            'w-16 items-center': isCompact,
          },
        )}
      >
        <Menu isCompact={isCompact} onToggle={onToggle}/>
      </div>
      <div className="w-full flex-1 flex-col overflow-y-auto">{children}</div>
    </>
  )
}

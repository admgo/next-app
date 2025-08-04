'use client'
import Menu from '@/components/menu/menu'
import React from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { cn } from '@heroui/react'
import AppHeader from '@/components/app-header/app-header'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')
  const [isCompact, setIsCompact] = React.useState(isCollapsed || isMobile)

  React.useMemo(() => {
    setIsCompact(isMobile)
  }, [isMobile])
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const onToggle = () => {
    setIsCompact(prev => !prev)
  }

  if (!isMounted) return null
  return (
    <>
      <div
        className={cn(
          'transition-width border-r-small border-divider hidden h-full w-56 flex-col sm:block',
          {
            'w-16 items-center': isCompact,
          },
        )}
      >
        <Menu isCompact={isCompact} onToggle={onToggle} />
      </div>
      <div className="flex h-full w-full flex-1 flex-col">
        <div className="shrink-0">
          <AppHeader />
        </div>
        <main className="h-full w-full overflow-y-auto">
          <div className="m-auto h-full w-full max-w-[1296px]">
            <div className="p-6">{children}</div>
          </div>
        </main>
      </div>
    </>
  )
}

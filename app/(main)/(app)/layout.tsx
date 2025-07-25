'use client'
import Menu from '@/components/menu/menu'
import React from 'react'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="!border-r-small border-divider">
        <Menu />
      </div>
      <div className="w-full flex-1 flex-col overflow-y-auto p-4">
        {children}
      </div>
    </>
  )
}

'use client'

import React from 'react'
import { Button, Tab, Tabs, useDisclosure } from '@heroui/react'
import { Icon } from '@iconify/react'
import { useMediaQuery } from 'usehooks-ts'
export default function CMDBLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpen, onOpenChange } = useDisclosure()
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const isMobile = useMediaQuery('(max-width: 768px)')

  const onToggle = React.useCallback(() => {
    setIsCollapsed(prev => !prev)
  }, [])

  return (
    <div className="w-full max-w-2xl flex-1 p-4">
      {/* Title */}
      <div className="flex items-center gap-x-3">
        <Button
          isIconOnly
          className="sm:hidden"
          size="sm"
          variant="flat"
          onPress={() => {
            setIsCollapsed(false)
            onOpenChange()
          }}
        >
          <Icon
            className="text-default-500"
            icon="solar:sidebar-minimalistic-linear"
            width={20}
          />
        </Button>
        <h1 className="text-default-foreground text-3xl font-bold leading-9">
          Settings
        </h1>
      </div>
      <h2 className="text-small text-default-500 mt-2">
        Customize settings, email preferences, and web appearance.
      </h2>
      {/*  Tabs */}
      <Tabs
        fullWidth
        classNames={{
          base: 'mt-6',
          cursor: 'bg-content1 dark:bg-content1',
          panel: 'w-full p-0 pt-4',
        }}
      >
        <Tab key="profile" title="Profile">
          tab-1
        </Tab>
        <Tab key="appearance" title="Appearance">
          tab-2
        </Tab>
        <Tab key="account" title="Account">
          tab-3
        </Tab>
        <Tab key="billing" title="Billing">
          tab-4
        </Tab>
      </Tabs>
    </div>
  )
}

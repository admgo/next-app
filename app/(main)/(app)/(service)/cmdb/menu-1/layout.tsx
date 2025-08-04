'use client'

import { Button } from '@heroui/button'
import { Tab, Tabs } from '@heroui/tabs'
// import { useTheme } from 'next-themes'
export default function Menu1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { theme, setTheme } = useTheme()
  return (
    <div className="w-full max-w-2xl flex-1 p-4">
      {/* Title */}
      <div className="flex items-center gap-x-3">
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
      {/*<div>*/}
      {/*  The current theme is: {theme}*/}
      {/*  <Button onPress={() => setTheme('light')}>Light Mode</Button>*/}
      {/*  <Button onPress={() => setTheme('dark')}>Dark Mode</Button>*/}
      {/*</div>*/}
    </div>
  )
}

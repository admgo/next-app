'use client'
import { Chip } from '@heroui/react'
import { Icon } from '@iconify/react'
import type { MenuProps } from '@/components/menu/store'

import type {
  SidebarItem,
} from '@/components/sidebar_bk/sidebar'

export const items: SidebarItem[] = [
  {
    key: 'menu-1',
    href: '/cmdb/menu-1',
    icon: 'solar:home-2-linear',
    title: 'overview',
  },
  {
    key: 'menu-2',
    href: '/cmdb/menu-2',
    icon: 'solar:widget-2-outline',
    title: 'list',
    endContent: (
      <Icon
        className="text-default-400"
        icon="solar:add-circle-line-duotone"
        width={24}
      />
    ),
  },
  {
    key: 'tasks',
    href: '#',
    icon: 'solar:checklist-minimalistic-outline',
    title: 'task',
    endContent: (
      <Icon
        className="text-default-400"
        icon="solar:add-circle-line-duotone"
        width={24}
      />
    ),
  },
  {
    key: 'team',
    href: '#',
    icon: 'solar:users-group-two-rounded-outline',
    title: 'plugin',
  },
  {
    key: 'tracker',
    href: '#',
    icon: 'solar:sort-by-time-linear',
    title: 'Tracker',
    endContent: (
      <Chip size="sm" variant="flat">
        New
      </Chip>
    ),
  },
  {
    key: 'analytics',
    href: '#',
    icon: 'solar:chart-outline',
    title: 'Analytics',
  },
  {
    key: 'perks',
    href: '#',
    icon: 'solar:gift-linear',
    title: 'Perks',
    endContent: (
      <Chip size="sm" variant="flat">
        3
      </Chip>
    ),
  },
  {
    key: 'expenses',
    href: '#',
    icon: 'solar:bill-list-outline',
    title: 'Expenses',
  },
  {
    key: 'settings',
    href: '#',
    icon: 'solar:settings-outline',
    title: 'Settings',
  },
]

export const menu: MenuProps = {
  title: 'test',
  description: 'test description is so long,  very very very lonnnnnnng',
  defaultSelectedKey: 'menu-1',
  items,
  customFooterContent: (<div>ppp</div>),
}

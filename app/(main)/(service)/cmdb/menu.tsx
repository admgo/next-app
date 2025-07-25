'use client'
import { Chip } from '@heroui/react'
import { Icon } from '@iconify/react'
import type { MenuProps } from '@/components/menu/store'

import type {
  SidebarItem,
} from '@/components/sidebar/sidebar'

export const items: SidebarItem[] = [
  {
    key: 'home',
    href: '/home/access',
    icon: 'solar:home-2-linear',
    title: '模型概览',
  },
  {
    key: 'projects',
    href: '/home/my',
    icon: 'solar:widget-2-outline',
    title: '模型',
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
    title: '新建模型',
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
    title: '集市',
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
  title: 'cmdb',
  description: 'cmdb的描述',
  defaultSelectedKey: 'home',
  items,
  customFooterContent: (<div>ppp</div>),
}

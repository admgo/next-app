import React from 'react'
import { Spacer } from '@heroui/react'

export type MenuHeaderProps
  = | {
      customHeaderContent: React.ReactNode;
      title?: never;
      description?: never;
    }
  | {
      customHeaderContent?: undefined;
      title: string;
      description?: string;
    }

const MenuHeader: React.FC<MenuHeaderProps> = ({
  ...props
}) => {
  if (props.customHeaderContent)
    return <div className="sidebar-header">{props.customHeaderContent}</div>

  return (
    <div className="h-full gap-3 p-6">
      <div className="flex h-full flex-col">
        <h1 className="text-medium text-default-900 font-bold">{props.title}</h1>
        <Spacer y={3} />
        <h2 className="text-tiny text-default-500">{props.description}</h2>
      </div>
    </div>

  )
}

export default MenuHeader

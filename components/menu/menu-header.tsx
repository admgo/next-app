import React from 'react'
import { Spacer } from '@heroui/react'
import { Skeleton } from '@heroui/skeleton'

export type MenuHeaderProps
  = {
      customHeaderContent?: undefined;
      isLoaded?: boolean;
      title?: string;
      description?: string;
    }

const MenuHeader: React.FC<MenuHeaderProps> = ({
  ...props
}) => {
  console.log(props)
  if (props.customHeaderContent) {
    return <div className="sidebar-header">{props.customHeaderContent}</div>
  }
  else {
     return (
          <div className="h-full gap-3 p-6">
            <div className="flex h-full flex-col">
              <Skeleton isLoaded={props.isLoaded} className="rounded-lg">
              <h1 className="text-medium text-default-900 min-h-[24px] font-bold">{props.title}</h1>
              </Skeleton>
              <Spacer y={3} />
              <Skeleton isLoaded={props.isLoaded} className="w-4/5 rounded-lg">
              <h2 className="text-tiny text-default-500 min-h-[16px]">{props.description}</h2>
              </Skeleton>
            </div>
          </div>
     )
}
}

export default MenuHeader

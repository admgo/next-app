'use client'

import {
  Accordion,
  AccordionItem,
  type ListboxProps,
  type ListboxSectionProps,
  type Selection,
} from '@heroui/react'
import { Skeleton } from '@heroui/skeleton'
import React from 'react'
import { Listbox, ListboxItem, ListboxSection, Tooltip } from '@heroui/react'
import { Icon } from '@iconify/react'
import { cn } from '@heroui/react'
import { useMenuStore } from '@/components/menu/store'

export enum SidebarItemType {
  Nest = 'nest',
}

export type SidebarItem = {
  key: string;
  title: string;
  icon?: string;
  href?: string;
  type?: SidebarItemType.Nest;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  items?: SidebarItem[];
  className?: string;
}

export type SidebarProps = Omit<ListboxProps<SidebarItem>, 'children'> & {
  items: SidebarItem[];
  isCompact?: boolean;
  isLoaded?: boolean;
  hideEndContent?: boolean;
  iconClassName?: string;
  sectionClasses?: ListboxSectionProps['classNames'];
  classNames?: ListboxProps['classNames'];
  defaultSelectedKey: string;
  onSelect?: (key: string) => void;
}

const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
  (
    {
      items,
      isCompact,
      // defaultSelectedKey,
      onSelect,
      hideEndContent,
      sectionClasses: sectionClassesProp = {},
      itemClasses: itemClassesProp = {},
      iconClassName,
      classNames,
      className,
      isLoaded,
      ...props
    },
    ref,
  ) => {
    const defaultSelectedKey = useMenuStore(
      state => state.defaultSelectedKey,
    )
    // const setSelectKey = (key: any) => {
    //   useMenuStore.setState(
    //     {
    //       defaultSelectedKey: key as string,
    //     },
    //   )
    // }
    console.log(defaultSelectedKey)
    const sectionClasses = {
      ...sectionClassesProp,
      base: cn(sectionClassesProp?.base, 'w-full', {
        'p-0 max-w-[44px]': isCompact,
      }),
      group: cn(sectionClassesProp?.group, {
        'flex flex-col gap-1': isCompact,
      }),
      heading: cn(sectionClassesProp?.heading, {
        hidden: isCompact,
      }),
    }

    const itemClasses = {
      ...itemClassesProp,
      base: cn(itemClassesProp?.base, {
        'w-11 h-11 gap-0 p-0': isCompact,
      }),
    }

    const renderNestItem = React.useCallback(
      (item: SidebarItem) => {
        const isNestType
          = item.items
          && item.items?.length > 0
          && item?.type === SidebarItemType.Nest

        if (isNestType) {
          // Is a nest type item , so we need to remove the href
          delete item.href
        }

        return (
          <ListboxItem
            {...item}
            key={item.key}
            classNames={{
              base: cn(
                {
                  'h-auto p-0': !isCompact && isNestType,
                },
                {
                  'inline-block w-11': isCompact && isNestType,
                },
              ),
            }}
            endContent={
              isCompact || isNestType || hideEndContent
                ? null
                : (item.endContent ?? null)
            }
            startContent={
              isCompact || isNestType ? null : item.icon ? (
                <Icon
                  className={cn(
                    'text-default-500 group-data-[selected=true]:text-foreground',
                    iconClassName,
                  )}
                  icon={item.icon}
                  width={24}
                />
              ) : (
                (item.startContent ?? null)
              )
            }
            title={isCompact || isNestType ? null : item.title}
          >
            {isCompact ? (
              <Tooltip content={item.title} placement="right">
                <div className="flex w-full items-center justify-center">
                  {item.icon ? (
                    <Icon
                      className={cn(
                        'text-default-500 group-data-[selected=true]:text-foreground',
                        iconClassName,
                      )}
                      icon={item.icon}
                      width={24}
                    />
                  ) : (
                    (item.startContent ?? null)
                  )}
                </div>
              </Tooltip>
            ) : null}
            {!isCompact && isNestType ? (
              <Accordion className={'p-0'}>
                <AccordionItem
                  key={item.key}
                  aria-label={item.title}
                  classNames={{
                    heading: 'pr-3',
                    trigger: 'p-0',
                    content: 'py-0 pl-4',
                  }}
                  title={
                    item.icon ? (
                      <div
                        className={'flex h-11 items-center gap-2 px-2 py-1.5'}
                      >
                        <Icon
                          className={cn(
                            'text-default-500 group-data-[selected=true]:text-foreground',
                            iconClassName,
                          )}
                          icon={item.icon}
                          width={24}
                        />
                        <span className="text-small text-default-500 group-data-[selected=true]:text-foreground font-medium">
                          {item.title}
                        </span>
                      </div>
                    ) : (
                      (item.startContent ?? null)
                    )
                  }
                >
                  {item.items && item.items?.length > 0 ? (
                    <Listbox
                      className={'mt-0.5'}
                      classNames={{
                        list: cn('border-default-200 border-l pl-4'),
                      }}
                      items={item.items}
                      variant="flat"
                    >
                      {/* eslint-disable-next-line ts/no-use-before-define */}
                      {item.items.map(renderItem)}
                    </Listbox>
                  ) : (
                    // eslint-disable-next-line ts/no-use-before-define
                    renderItem(item)
                  )}
                </AccordionItem>
              </Accordion>
            ) : null}
          </ListboxItem>
        )
      },

      [isCompact, hideEndContent, iconClassName, items],
    )

    const renderItem = React.useCallback(
      (item: SidebarItem) => {
        const isNestType
          = item.items
          && item.items?.length > 0
          && item?.type === SidebarItemType.Nest

        if (isNestType) return renderNestItem(item)

        return (
          <ListboxItem
            {...item}
            key={item.key}
            endContent={
              isCompact || hideEndContent ? null : (item.endContent ?? null)
            }
            startContent={
              isCompact ? null : item.icon ? (
                <Icon
                  className={cn(
                    'text-default-500 group-data-[selected=true]:text-foreground',
                    iconClassName,
                  )}
                  icon={item.icon}
                  width={24}
                />
              ) : (
                (item.startContent ?? null)
              )
            }
            textValue={item.title}
            title={isCompact ? null : item.title}
          >
            {isCompact ? (
              <Tooltip content={item.title} placement="right">
                <div className="flex w-full items-center justify-center">
                  {item.icon ? (
                    <Icon
                      className={cn(
                        'text-default-500 group-data-[selected=true]:text-foreground',
                        iconClassName,
                      )}
                      icon={item.icon}
                      width={24}
                    />
                  ) : (
                    (item.startContent ?? null)
                  )}
                </div>
              </Tooltip>
            ) : null}
          </ListboxItem>
        )
      },

      [isCompact, hideEndContent, iconClassName, itemClasses?.base],
    )

    const skeletonLength = Array.from({ length: 6 })

    return (
      <>
        {isLoaded ? (
          <Listbox
            key={isCompact ? 'compact' : 'default'}
            ref={ref}
            hideSelectedIcon
            aria-label="sidebar"
            as="nav"
            className={cn('list-none', className)}
            classNames={{
              ...classNames,
              list: cn('items-center', classNames?.list),
            }}
            color="default"
            itemClasses={{
              ...itemClasses,
              base: cn(
                'rounded-large data-[selected=true]:bg-default-100 h-[44px] min-h-11 px-3',
                itemClasses?.base,
              ),
              title: cn(
                'text-small text-default-500 group-data-[selected=true]:text-foreground font-medium',
                itemClasses?.title,
              ),
            }}
            items={items}
            selectedKeys={[defaultSelectedKey] as unknown as Selection}
            selectionMode="single"
            variant="flat"
            onSelectionChange={(keys) => {
              const key = Array.from(keys)[0]
              // setSelectKey(key)
              onSelect?.(key as string)
            }}
            {...props}
          >
            {(item) => {
              return item.items
                && item.items?.length > 0
                && item?.type === SidebarItemType.Nest ? (
                renderNestItem(item)
              ) : item.items && item.items?.length > 0 ? (
                <ListboxSection
                  key={item.key}
                  classNames={sectionClasses}
                  showDivider={isCompact}
                  title={item.title}
                >
                  {item.items.map(renderItem)}
                </ListboxSection>
              ) : (
                renderItem(item)
              )
            }}
          </Listbox>
        ) : (
          <>
            <div className="w-full p-1">
              {skeletonLength.map((_, index) => (
                <div key={index} className="pt-0.5">
                  <Skeleton className="rounded-lg">
                    <div className="h-[44px] min-h-11" />
                  </Skeleton>
                </div>
              ))}
            </div>
          </>
        )}
      </>
    )
  },
)

Sidebar.displayName = 'Sidebar'

export default Sidebar

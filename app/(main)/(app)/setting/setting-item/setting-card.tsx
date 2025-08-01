import React from 'react'
import { Card, CardBody, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'

type SettingItemProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const SettingCard = ({ title, description, children }: SettingItemProps) => {
  return (
    <>
      <Card shadow="none" radius="sm" className="border-small border-foreground-300">
        <CardHeader>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-tiny text-default-500">{description}</p>
          </div>
        </CardHeader>
        <Divider/>
        <CardBody className="bg-foreground-50">
          {children}
        </CardBody>
      </Card>
    </>
  )
}

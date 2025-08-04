import React from 'react'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import {
  SettingCard,
  SettingCardContent,
  SettingCardItem,
} from '../setting-card'
import { Spacer } from '@heroui/spacer'
import { cn } from '@heroui/react'

const Account: React.FC = ({ className, ...props }: { className?: string }) => {
  const timeZoneOptions = [
    {
      label: 'Coordinated Universal Time (UTC-3)',
      value: 'utc-3',
      description: 'Coordinated Universal Time (UTC-3)',
    },
    {
      label: 'Coordinated Universal Time (UTC-4)',
      value: 'utc-4',
      description: 'Coordinated Universal Time (UTC-4)',
    },
    {
      label: 'Coordinated Universal Time (UTC-5)',
      value: 'utc-5',
      description: 'Coordinated Universal Time (UTC-5)',
    },
  ]
  return (
    <div className={cn('', className)} {...props}>
      {/* Full name */}
      <SettingCard
        title="Change Username"
        description="change your username, username is unique."
      >
        <SettingCardContent>
          <SettingCardItem title="Username" description="Your username">
            <Input
              className="rounded-small mt-2"
              classNames={{
                innerWrapper: 'bg-foreground-50',
                inputWrapper: 'bg-foreground-50',
              }}
              placeholder="e.g Kate Moore"
              variant="faded"
            />
          </SettingCardItem>
          <SettingCardItem title="Username" description="Your username">
            <Input
              className="rounded-small mt-2"
              classNames={{
                innerWrapper: 'bg-foreground-50',
                inputWrapper: 'bg-foreground-50',
              }}
              placeholder="e.g Kate Moore"
              variant="faded"
            />
          </SettingCardItem>
          <SettingCardItem title="Username" description="Your username">
            <Input
              className="rounded-small mt-2"
              classNames={{
                innerWrapper: 'bg-foreground-50',
                inputWrapper: 'bg-foreground-50',
              }}
              placeholder="e.g Kate Moore"
              variant="faded"
            />
          </SettingCardItem>
        </SettingCardContent>
      </SettingCard>
      <Spacer y={8} />
      {/* Username */}
      <SettingCard title="Full name" description="Your full name">
        <SettingCardContent>
          <SettingCardItem title="Username" description="Your username">
            <Input
              className="rounded-small mt-2"
              classNames={{
                innerWrapper: 'bg-foreground-50',
                inputWrapper: 'bg-foreground-50',
              }}
              placeholder="e.g Kate Moore"
              variant="faded"
            />
          </SettingCardItem>
        </SettingCardContent>
      </SettingCard>
      <Spacer y={8} />
      {/* Email Address */}
      <SettingCard title="Full name" description="Your full name">
        <Input className="rounded-small mt-2" placeholder="e.g Kate Moore" />
      </SettingCard>
      <Spacer y={8} />
      <Button className="bg-default-foreground text-background" size="sm">
        Update Account
      </Button>
    </div>
  )
}
export default Account

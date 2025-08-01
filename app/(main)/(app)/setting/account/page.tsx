import React from 'react'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import { SettingItem } from '../setting-item'
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
    <div className={cn('p-2', className)} {...props}>
      {/* Full name */}
      <SettingItem title="Full name" description="Your full name">
        <Input className="mt-2" placeholder="e.g Kate Moore" />
      </SettingItem>
      <Spacer y={2} />
      {/* Username */}
      <div>
        <p className="text-default-700 text-base font-medium">Username</p>
        <p className="text-default-400 mt-1 text-sm font-normal">
          Nickname or first name.
        </p>
        <Input className="mt-2" placeholder="kate.moore" />
      </div>
      <Spacer y={2} />
      {/* Email Address */}
      <div>
        <p className="text-default-700 text-base font-medium">Email Address</p>
        <p className="text-default-400 mt-1 text-sm font-normal">
          The email address associated with your account.
        </p>
        <Input className="mt-2" placeholder="e.g kate.moore@acme.com" />
      </div>
      <Spacer y={2} />
      {/* Timezone */}
      {/* <section> */}
      {/*  <div> */}
      {/*    <p className="text-default-700 text-base font-medium">Timezone</p> */}
      {/*    <p className="text-default-400 mt-1 text-sm font-normal"> */}
      {/*      Set your current timezone. */}
      {/*    </p> */}
      {/*  </div> */}
      {/*  <Select className="mt-2" defaultSelectedKeys={['utc-3']}> */}
      {/*    {timeZoneOptions.map(timeZoneOption => ( */}
      {/*      <SelectItem key={timeZoneOption.value}> */}
      {/*        {timeZoneOption.label} */}
      {/*      </SelectItem> */}
      {/*    ))} */}
      {/*  </Select> */}
      {/* </section> */}
      <Spacer y={2} />
      <Button className="bg-default-foreground text-background mt-4" size="sm">
        Update Account
      </Button>
    </div>
  )
}
export default Account

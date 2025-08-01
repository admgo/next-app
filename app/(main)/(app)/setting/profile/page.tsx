import React from 'react'
import { Button } from '@heroui/button'
import { Input } from '@heroui/input'
import {
  SettingCard,
  SettingCardContent,
  SettingCardGroup,
  SettingCardItem,
} from '../setting-card'
import { Avatar } from '@heroui/avatar'
import { Divider } from '@heroui/divider'

const Profile: React.FC = ({ className, ...props }: { className?: string }) => {
  return (
    <SettingCardGroup>
      {/* Avator */}
      <SettingCard title="Avator" description="your Avator.">
        <SettingCardContent>
          <SettingCardItem title="Upload Avator">
            <div className="flex h-24 gap-6">
              <Avatar
                className="text-large h-24 w-24 shrink-0"
                src="https://i.pravatar.cc/150?u=a04258114e29026708c"
              />
              <div className="flex flex-col justify-center gap-2">
                <Button
                  className="bg-foreground-50 border-small max-w-16 shrink-0 font-medium"
                  variant="bordered"
                  size="sm"
                  disableAnimation={true}
                >
                  Upload
                </Button>
                <span className="text-default-500 text-xs">
                  zui jia chi cun{' '}
                  <span className="text-default-foreground font-medium">
                    192 * 192
                  </span>{' '}
                  px, max file size is 200 KiB. zui jia chi cun{' '}
                  <span className="text-default-foreground font-medium">
                    192 * 192
                  </span>{' '}
                  px, max file size is{' '}
                  <span className="text-default-foreground font-medium">
                    200
                  </span>{' '}
                  KiB.
                </span>
              </div>
            </div>
          </SettingCardItem>
        </SettingCardContent>
      </SettingCard>
      {/* Full name */}
      <SettingCard title="Profile" description="your profile information.">
        <SettingCardContent>
          <SettingCardItem title="Name" description="Your name">
            <Input
              className="rounded-small mt-2 max-w-xl"
              radius="sm"
              classNames={{
                innerWrapper: 'bg-foreground-50',
                inputWrapper: 'bg-foreground-50',
              }}
              placeholder="username"
              variant="faded"
            />
          </SettingCardItem>
          <Divider />
          <SettingCardItem title="Localtime" description="Your localtime">
            <Input
              className="rounded-small mt-2 max-w-xl"
              radius="sm"
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
      <Button className="bg-default-foreground text-background" size="sm">
        Update Profile
      </Button>
    </SettingCardGroup>
  )
}
export default Profile

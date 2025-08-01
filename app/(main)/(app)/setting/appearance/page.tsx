import React from 'react'
import { Button } from '@heroui/button'
import {
  SettingCard,
  SettingCardContent,
  SettingCardItem,
} from '../setting-card'
import { Spacer } from '@heroui/spacer'
import { RadioGroup } from '@heroui/radio'
import { cn } from '@heroui/react'
import { ThemeCustomRadio } from './theme-custom-radio'
import { Divider } from '@heroui/divider'

const Appearance: React.FC = ({ className, ...props }: { className?: string }) => {
  return (
    <div className={cn('', className)} {...props}>
      {/* Theme */}
      <SettingCard title="Full name" description="Your full name">
        <SettingCardContent>
          {/* Theme radio group */}
          <SettingCardItem title="Theme" description="Change the appearance of the web.">
            <RadioGroup className="flex-wrap" orientation="horizontal">
              <ThemeCustomRadio value="free" variant="light">
                Light
              </ThemeCustomRadio>
              <ThemeCustomRadio value="pro" variant="dark">
                Dark
              </ThemeCustomRadio>
            </RadioGroup>
          </SettingCardItem>
          <Divider />
          <SettingCardItem title="Theme" description="Change the appearance of the web.">
            <RadioGroup className="flex-wrap" orientation="horizontal">
              <ThemeCustomRadio value="free" variant="light">
                Light
              </ThemeCustomRadio>
              <ThemeCustomRadio value="pro" variant="dark">
                Dark
              </ThemeCustomRadio>
            </RadioGroup>
          </SettingCardItem>

        </SettingCardContent>
      </SettingCard>
      <Spacer y={8} />
      <Button className="bg-default-foreground text-background" size="sm">
        Update Appearance
      </Button>
    </div>
  )
}
export default Appearance

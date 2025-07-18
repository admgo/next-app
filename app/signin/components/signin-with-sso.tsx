import { Button } from '@heroui/react'
import { Icon } from '@iconify/react'
import React from 'react'
import { Test } from '@/service/test'

export default function SigninWithSSO() {
  const click = () => {
    console.log('click')
    const a = Test({ username: '1', uid: '12' })
  }
  return (
    <Button
      disableAnimation={true}
      startContent={<Icon icon="flat-color-icons:google" width={24} />}
      variant="bordered"
      onPress={click}
    >
      <span className="font-semibold">
              Continue with Google
      </span>
    </Button>
  )
}

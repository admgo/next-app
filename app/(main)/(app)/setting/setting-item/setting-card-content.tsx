import React from 'react'

type SettingContentProps = {
  children: React.ReactNode;
}

export const SettingCardContent = ({ children }: SettingContentProps) => {
  return (
    <>
     <div className="flex flex-col gap-3">
       {children}
     </div>
    </>
  )
}

import React from 'react'

type SettingItemCardProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export const SettingCardItem = ({ title, description, children }: SettingItemCardProps) => {
  return (
    <>
      <div className="flex flex-col gap-0.5">
        <p className="text-small font-semibold">{title}</p>
        <p className="text-tiny">{description}</p>
        <div>
          {children}
        </div>
      </div>
    </>
  )
}

import React from 'react'

type SettingItemProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export const SettingItem = ({ title, description, children }: SettingItemProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-default-700 text-2xl font-semibold">{title}</p>
      <p className="text-default-400 mt-1 text-sm font-normal">
        {description}
      </p>
      {children}
    </div>
  )
}

import React from 'react'
import { Navbar, NavbarContent } from '@heroui/navbar'
import { BreadcrumbItem, Breadcrumbs } from '@heroui/breadcrumbs'

const ServiceLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <header className="rounded-medium border-small border-divider flex items-center gap-3 p-4">
      <h2 className="text-medium text-default-700 font-medium">Overview</h2>
    </header>

    <Navbar className="border-b-1.5 items-start justify-start overflow-x-auto bg-amber-50" maxWidth="full">
      <NavbarContent className="w-full flex-1 grow">
      <Breadcrumbs key="s" variant="solid">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Music</BreadcrumbItem>
        <BreadcrumbItem>Artist</BreadcrumbItem>
        <BreadcrumbItem>Album</BreadcrumbItem>
        <BreadcrumbItem>Song</BreadcrumbItem>
      </Breadcrumbs>
      </NavbarContent>
    </Navbar>
    <main className="mt-4 h-full w-full overflow-visible">{children}</main>
  </>
)
export default ServiceLayout

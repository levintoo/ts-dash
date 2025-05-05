"use client"

import {type LucideIcon} from "lucide-react"

import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {Link} from "@inertiajs/react";

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
    isActive?: boolean
    badge?: string
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
        {items.map((item) => (
            <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                    <Link href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                    </Link>
                </SidebarMenuButton>
                {item?.badge && (<SidebarMenuBadge>{item.badge}</SidebarMenuBadge>)}
            </SidebarMenuItem>
        ))}
    </SidebarGroup>
  )
}

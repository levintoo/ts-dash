"use client"

import {MailIcon} from "lucide-react"

import { SearchForm } from "@/components/search-form"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {SidebarTrigger, useSidebar} from "@/components/ui/sidebar"
import * as React from "react";
import {UserDropdown} from "@/components/user-dropdown";

const user = {
    name: "Test User",
        email: "test@example.com",
        avatar: "/avatar.png",
}

export function AppHeader() {
    const { toggleSidebar } = useSidebar()

    return (
        <>
            <header className="flex justify-between h-14 shrink-0 items-center gap-2 border-b">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1"/>
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"/>
                    <SearchForm />
                </div>
                <div className="flex items-center gap-2 px-4">
                    <Button
                        data-sidebar="trigger"
                        data-slot="sidebar-trigger"
                        variant="ghost"
                        size="icon"
                        className="size-7"
                    >
                        <MailIcon />
                        <span className="sr-only">Open Emails</span>
                    </Button>
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"/>
                    <UserDropdown user={user} />
                </div>
            </header>
        </>
    )
}

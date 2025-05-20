"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Bell, Search } from "lucide-react"
import { UserAvatar } from "./user-avatar"

export function InternalAuditorDashboardHeader() {
  const [notifications, setNotifications] = useState(3)
  const router = useRouter()

  const handleLogout = () => {
    // Add any logout logic here (clearing tokens, etc.)
    router.push('/')
  }

  return (
    <header className="h-14 border-b flex items-center px-6 gap-4 sticky top-0 bg-background z-10">
      <div className="flex-1 flex items-center">
        <form className="relative w-full max-w-sm mr-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search audits, tasks..." className="w-full pl-8 bg-background" />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-green-600 text-white rounded-md px-2 py-1.5 text-sm font-medium">Internal Auditor</div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] font-medium text-white flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>New audit task assigned</DropdownMenuItem>
            <DropdownMenuItem>Evidence review requested</DropdownMenuItem>
            <DropdownMenuItem>Compliance deadline approaching</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative rounded-full h-8 w-8">
              <UserAvatar fallback="IA" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

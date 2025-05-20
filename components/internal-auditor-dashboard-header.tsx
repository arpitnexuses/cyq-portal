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
import { Bell, Search, Loader2 } from "lucide-react"
import { UserAvatar } from "./user-avatar"

export function InternalAuditorDashboardHeader() {
  const [notifications, setNotifications] = useState(3)
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const router = useRouter()

  const handleLogout = async () => {
    setIsLoggingOut(true)
    // Add any logout logic here (clearing tokens, etc.)
    await new Promise(resolve => setTimeout(resolve, 3000)) // 3 seconds delay
    router.push('/')
  }

  return (
    <>
      {isLoggingOut && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
            <Loader2 className="animate-spin h-8 w-8 text-black" />
            <p className="text-lg font-medium">Logging out...</p>
          </div>
        </div>
      )}
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
              <DropdownMenuItem onClick={handleLogout} disabled={isLoggingOut}>
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  )
}

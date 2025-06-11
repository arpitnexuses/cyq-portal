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
import { Bell, Search, Newspaper, HelpCircle } from "lucide-react"
import { UserAvatar } from "./user-avatar"

export function InternalAuditorDashboardHeader() {
  const [newsCount, setNewsCount] = useState(3)
  const router = useRouter()

  const handleLogout = () => {
    // Add any logout logic here (clearing tokens, etc.)
    router.push('/')
  }

  const navigateToProfile = () => {
    router.push('/dashboard/internal-auditor/my-account')
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
        
        {/* What's News button */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="relative">
              <Newspaper className="h-4 w-4" />
              {newsCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-blue-500 text-[10px] font-medium text-white flex items-center justify-center">
                  {newsCount}
                </span>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>What's News</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-auto">
              <div className="p-3 border-b">
                <div className="font-medium text-sm">New Compliance Framework Added</div>
                <div className="text-xs text-muted-foreground mt-1">Updated framework for financial compliance is now available.</div>
                <div className="text-xs text-muted-foreground mt-1">2 hours ago</div>
              </div>
              <div className="p-3 border-b">
                <div className="font-medium text-sm">System Maintenance</div>
                <div className="text-xs text-muted-foreground mt-1">The system will be under maintenance on Sunday, June 15th from 2-4 AM EST.</div>
                <div className="text-xs text-muted-foreground mt-1">Yesterday</div>
              </div>
              <div className="p-3">
                <div className="font-medium text-sm">Training Resources Updated</div>
                <div className="text-xs text-muted-foreground mt-1">New training videos for the audit management process are now available.</div>
                <div className="text-xs text-muted-foreground mt-1">2 days ago</div>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="justify-center">View All Updates</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Help & Support button */}
        <Button variant="outline" size="sm" className="gap-1">
          <HelpCircle className="h-4 w-4" />
          <span>Help & Support</span>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative rounded-full h-8 w-8">
              <UserAvatar fallback="IA" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Profile</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={navigateToProfile}>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

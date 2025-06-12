"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Settings, Lock, Activity, MessageSquare } from "lucide-react"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-6">
        <Settings className="mr-2 h-5 w-5" />
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 space-y-1">
          <SettingsNavItem 
            href="/dashboard/internal-auditor/settings/password-security" 
            icon={Lock} 
            title="Password Security"
            isActive={pathname === "/dashboard/internal-auditor/settings/password-security"}
          />
          <SettingsNavItem 
            href="/dashboard/internal-auditor/settings/activity-logs" 
            icon={Activity} 
            title="Activity Logs"
            isActive={pathname === "/dashboard/internal-auditor/settings/activity-logs"}
          />
          <SettingsNavItem 
            href="/dashboard/internal-auditor/requests" 
            icon={MessageSquare} 
            title="Requests"
            isActive={pathname.includes("/dashboard/internal-auditor/requests")}
          />
        </div>
        <div className="flex-1 bg-white rounded-lg shadow">
          {children}
        </div>
      </div>
    </div>
  )
}

function SettingsNavItem({ 
  href, 
  icon: Icon, 
  title, 
  isActive 
}: { 
  href: string
  icon: React.ElementType
  title: string
  isActive: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
        isActive 
          ? "bg-slate-100 text-slate-900" 
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <Icon className="h-4 w-4" />
      <span>{title}</span>
    </Link>
  )
} 
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart3,
  ClipboardCheck,
  FileText,
  Home,
  LogOut,
  Users,
  Calendar,
  FileSearch,
  Shield,
  User,
  AlertTriangle,
  BarChart,
  PieChart,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  Settings,
  Activity,
  Bug,
  BadgeInfo,
  Layers,
  Database,
  Bomb,
  Truck,
  Lock,
  RefreshCw,
  FileBarChart2,
  ArrowRightLeft,
  PlusCircle,
  Eye,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

export function ManagementSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    myProfile: false,
    riskExposure: false,
    compliance: false,
    auditManagement: false,
    settings: false,
    gettingStarted: false,
  })

  // Initialize open sections based on current path
  useEffect(() => {
    const newOpenSections = { ...openSections }
    
    if (pathname.includes('/my-account')) {
      newOpenSections.myProfile = true
    }
    if (pathname.includes('/risk-exposure')) {
      newOpenSections.riskExposure = true
    }
    if (pathname.includes('/compliance-maturity')) {
      newOpenSections.compliance = true
    }
    if (pathname.includes('/audit-management')) {
      newOpenSections.auditManagement = true
    }
    if (pathname.includes('/settings')) {
      newOpenSections.settings = true
    }
    if (pathname.includes('/getting-started')) {
      newOpenSections.gettingStarted = true
    }

    setOpenSections(newOpenSections)
  }, [pathname])

  // Update document with a custom property to handle sidebar state
  useEffect(() => {
    // Set the CSS variable for sidebar width
    document.documentElement.style.setProperty("--sidebar-width", collapsed ? "4.5rem" : "16rem")

    // Add a small delay to allow the DOM to settle before any potential resize observations
    const resizeTimeout = setTimeout(() => {
      // Force a single reflow to ensure all resize observations are processed
      window.dispatchEvent(new Event("resize"))
    }, 300)

    return () => {
      clearTimeout(resizeTimeout)
    }
  }, [collapsed])

  const toggleSection = (section: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handleLogout = () => {
    // Add any logout logic here (clearing tokens, etc.)
    router.push('/')
  }

  return (
    <div
      className={`bg-gradient-to-b from-[#006064] to-[#004D40] flex flex-col h-screen fixed top-0 left-0 z-10 shadow-xl ${
        collapsed ? "w-[4.5rem]" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="h-16 flex items-center px-4 justify-between border-b border-white/10 backdrop-blur-sm bg-gradient-to-r from-white/10 to-transparent">
        {!collapsed && (
          <div className="flex items-center">
            <span className="font-bold text-lg tracking-wide whitespace-nowrap bg-gradient-to-r from-white via-teal-100 to-teal-200 bg-clip-text text-transparent">
              Management Portal
            </span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
            collapsed ? "mx-auto" : "",
            "rounded-full"
          )}
        >
          {collapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
        </Button>
      </div>
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="px-3 py-4">
          <nav className="space-y-2" onClick={(e) => e.stopPropagation()}>
            {/* My Profile Section */}
            <Collapsible 
              open={openSections.myProfile}
              onOpenChange={(open) => {
                setOpenSections(prev => ({ ...prev, myProfile: open }))
              }}
            >
              <CollapsibleTrigger
                onClick={(e) => toggleSection("myProfile", e)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.myProfile && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-3" />
                  {!collapsed && <span>My Profile</span>}
                </div>
                {!collapsed &&
                  (openSections.myProfile ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5" onClick={(e) => e.stopPropagation()}>
                  <SidebarItem
                    icon={User}
                    label="My Account"
                    href="/dashboard/management/my-account"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/my-account"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Dashboard - Direct link */}
            <SidebarItem
              icon={Home}
              label="My Dashboard"
              href="/dashboard/management"
              collapsed={collapsed}
              isActive={pathname === "/dashboard/management"}
              className="mt-1"
            />

            {/* Risk Exposure - Nested */}
            <Collapsible 
              open={openSections.riskExposure}
              onOpenChange={(open) => {
                setOpenSections(prev => ({ ...prev, riskExposure: open }))
              }}
            >
              <CollapsibleTrigger
                onClick={(e) => toggleSection("riskExposure", e)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.riskExposure && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <AlertTriangle className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Risk Exposure</span>}
                </div>
                {!collapsed &&
                  (openSections.riskExposure ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5" onClick={(e) => e.stopPropagation()}>
                  <SidebarItem
                    icon={AlertTriangle}
                    label="Regulatory Risks"
                    href="/dashboard/management/risk-exposure/regulatory-risks"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/risk-exposure/regulatory-risks"}
                  />
                  <SidebarItem
                    icon={AlertTriangle}
                    label="Compliance Risks"
                    href="/dashboard/management/risk-exposure/compliance-risks"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/risk-exposure/compliance-risks"}
                  />
                  <SidebarItem
                    icon={AlertTriangle}
                    label="Cyber Risks"
                    href="/dashboard/management/risk-exposure/cyber-risks"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/risk-exposure/cyber-risks"}
                  />
                  <SidebarItem
                    icon={RefreshCw}
                    label="Business Continuity"
                    href="/dashboard/management/risk-exposure/business-continuity"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/risk-exposure/business-continuity"}
                  />
                  <SidebarItem
                    icon={Database}
                    label="Data Breach"
                    href="/dashboard/management/risk-exposure/data-breach"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/risk-exposure/data-breach"}
                  />
                  <SidebarItem
                    icon={Truck}
                    label="Supply Chain"
                    href="/dashboard/management/risk-exposure/supply-chain"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/risk-exposure/supply-chain"}
                  />
                  <SidebarItem
                    icon={Eye}
                    label="Individual Risks View"
                    href="/dashboard/management/risk-exposure/individual-risks"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/risk-exposure/individual-risks"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Compliance Maturity - Nested */}
            <Collapsible open={openSections.compliance}>
              <CollapsibleTrigger
                onClick={() => toggleSection("compliance")}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.compliance && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <BarChart className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Compliance Maturity</span>}
                </div>
                {!collapsed &&
                  (openSections.compliance ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5">
                  <SidebarItem
                    icon={Shield}
                    label="ISO 27001"
                    href="/dashboard/management/compliance-maturity/iso-27001"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/compliance-maturity/iso-27001"}
                  />
                  <SidebarItem
                    icon={Shield}
                    label="SEBI"
                    href="/dashboard/management/compliance-maturity/sebi"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/compliance-maturity/sebi"}
                  />
                  <SidebarItem
                    icon={Shield}
                    label="NIST"
                    href="/dashboard/management/compliance-maturity/nist"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/compliance-maturity/nist"}
                  />
                  <SidebarItem
                    icon={Shield}
                    label="CIS"
                    href="/dashboard/management/compliance-maturity/cis"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/compliance-maturity/cis"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Posture Maturity - Direct Link */}
            <SidebarItem
              icon={Shield}
              label="Posture Maturity"
              href="/dashboard/management/posture-maturity"
              collapsed={collapsed}
              isActive={pathname === "/dashboard/management/posture-maturity" || pathname.includes("/dashboard/management/posture-maturity/")}
              className="mt-1"
            />

            {/* Audit Management */}
            <Collapsible open={openSections.auditManagement}>
              <CollapsibleTrigger
                onClick={() => toggleSection("auditManagement")}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.auditManagement && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <ClipboardCheck className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Audit Management</span>}
                </div>
                {!collapsed &&
                  (openSections.auditManagement ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5">
                  <SidebarItem
                    icon={FileText}
                    label="Audit Plan"
                    href="/dashboard/management/audit-management/audit-plan"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/audit-plan"}
                  />
                  <SidebarItem
                    icon={Calendar}
                    label="Audit Schedule"
                    href="/dashboard/management/audit-management/audit-schedule"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/audit-schedule"}
                  />
                  <SidebarItem
                    icon={Calendar}
                    label="Compliance Calendar"
                    href="/dashboard/management/audit-management/compliance-calendar"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/compliance-calendar"}
                  />
                  <SidebarItem
                    icon={Users}
                    label="Participants"
                    href="/dashboard/management/audit-management/participants"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/participants"}
                  />
                  <SidebarItem
                    icon={PlusCircle}
                    label="Initiate Audit"
                    href="/dashboard/management/audit-management/initiate-audit"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/initiate-audit"}
                  />
                  <SidebarItem
                    icon={FileSearch}
                    label="Evidence Lifecycle"
                    href="/dashboard/management/audit-management/evidence-lifecycle"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/evidence-lifecycle"}
                  />
                  <SidebarItem
                    icon={RefreshCw}
                    label="Review & Revalidation"
                    href="/dashboard/management/audit-management/review-revalidation"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/review-revalidation"}
                  />
                  <SidebarItem
                    icon={FileBarChart2}
                    label="Report & Recommendation"
                    href="/dashboard/management/audit-management/report-recommendation"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/report-recommendation"}
                  />
                  <SidebarItem
                    icon={ArrowRightLeft}
                    label="Follow-up"
                    href="/dashboard/management/audit-management/follow-up"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/audit-management/follow-up"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Settings */}
            <Collapsible open={openSections.settings}>
              <CollapsibleTrigger
                onClick={() => toggleSection("settings")}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.settings && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <Settings className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Settings</span>}
                </div>
                {!collapsed &&
                  (openSections.settings ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5">
                  <SidebarItem
                    icon={Lock}
                    label="Password Security"
                    href="/dashboard/management/settings/password-security"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/settings/password-security"}
                  />
                  <SidebarItem
                    icon={Activity}
                    label="Activity Logs"
                    href="/dashboard/management/settings/activity-logs"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/settings/activity-logs"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Getting Started */}
            <Collapsible open={openSections.gettingStarted}>
              <CollapsibleTrigger
                onClick={() => toggleSection("gettingStarted")}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.gettingStarted && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <BadgeInfo className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Getting Started</span>}
                </div>
                {!collapsed &&
                  (openSections.gettingStarted ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5">
                  <SidebarItem
                    icon={BadgeInfo}
                    label="Overview"
                    href="/dashboard/management/getting-started"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/management/getting-started"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>
          </nav>
        </div>
      </ScrollArea>
      <div className="p-3 mt-auto">
        <Button
          variant="ghost"
          className={cn(
            "w-full justify-start text-white hover:bg-white/10 hover:text-white",
            collapsed ? "px-2" : "px-3",
          )}
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-3" />
          {!collapsed && <span>Log out</span>}
        </Button>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  collapsed: boolean
  className?: string
  isActive?: boolean
  onClick?: () => void
}

function SidebarItem({ icon: Icon, label, href, collapsed, className, isActive, onClick }: SidebarItemProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
        }
        e.stopPropagation()
      }}
      className={cn(
        "flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
        isActive 
          ? "bg-white/20 text-white" 
          : "text-white/80 hover:bg-white/10 hover:text-white",
        collapsed ? "justify-center" : "",
        className
      )}
    >
      <Icon className="h-4 w-4" />
      {!collapsed && <span className="ml-3">{label}</span>}
    </Link>
  )
} 
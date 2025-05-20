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
  RefreshCw,
  FileBarChart2,
  ArrowRightLeft,
  Shield,
  User,
  Lock,
  AlertTriangle,
  BarChart,
  PieChart,
  List,
  Eye,
  MessageSquare,
  PlusCircle,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { cn } from "@/lib/utils"
import { usePathname, useRouter } from "next/navigation"

export function InternalAuditorSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    personal: false,
    myDashboard: false,
    regulatory: false,
    compliance: false,
    overview: false,
    complianceCalendar: false,
    auditManagement: false,
    requests: false,
  })

  // Initialize open sections based on current path
  useEffect(() => {
    const newOpenSections = { ...openSections }
    
    if (pathname.includes('/my-account') || pathname.includes('/password-security')) {
      newOpenSections.personal = true
    }
    if (pathname.includes('/regulatory-exposure')) {
      newOpenSections.myDashboard = true
      newOpenSections.regulatory = true
    }
    if (pathname.includes('/compliance-maturity')) {
      newOpenSections.myDashboard = true
      newOpenSections.compliance = true
    }
    if (pathname.includes('/overview')) {
      newOpenSections.overview = true
    }
    if (pathname.includes('/compliance-calendar')) {
      newOpenSections.complianceCalendar = true
    }
    if (pathname.includes('/audit-management')) {
      newOpenSections.auditManagement = true
    }
    if (pathname.includes('/requests')) {
      newOpenSections.requests = true
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
      className={`bg-gradient-to-b from-[#1560BD] to-[#1a4b8c] flex flex-col h-screen fixed top-0 left-0 z-10 shadow-xl ${
        collapsed ? "w-[4.5rem]" : "w-64"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="h-16 flex items-center px-4 justify-between border-b border-white/10 backdrop-blur-sm bg-gradient-to-r from-white/10 to-transparent">
        {!collapsed && (
          <div className="flex items-center">
            <span className="font-bold text-lg tracking-wide whitespace-nowrap bg-gradient-to-r from-white via-blue-100 to-blue-200 bg-clip-text text-transparent">
              Audit Portal
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
            {/* Personal Section */}
            <Collapsible 
              open={openSections.personal}
              onOpenChange={(open) => {
                setOpenSections(prev => ({ ...prev, personal: open }))
              }}
            >
              <CollapsibleTrigger
                onClick={(e) => toggleSection("personal", e)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.personal && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Personal</span>}
                </div>
                {!collapsed &&
                  (openSections.personal ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5" onClick={(e) => e.stopPropagation()}>
                  <SidebarItem
                    icon={User}
                    label="My Account"
                    href="/dashboard/internal-auditor/my-account"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/my-account"}
                  />
                  <SidebarItem
                    icon={Lock}
                    label="Password Security"
                    href="/dashboard/internal-auditor/password-security"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/password-security"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* My Dashboard */}
            <Collapsible 
              open={openSections.myDashboard}
              onOpenChange={(open) => {
                setOpenSections(prev => ({ ...prev, myDashboard: open }))
              }}
            >
              <CollapsibleTrigger
                onClick={(e) => toggleSection("myDashboard", e)}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.myDashboard && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-3" />
                  {!collapsed && <span>My Dashboard</span>}
                </div>
                {!collapsed &&
                  (openSections.myDashboard ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5" onClick={(e) => e.stopPropagation()}>
                  <SidebarItem
                    icon={Home}
                    label="Dashboard Home"
                    href="/dashboard/internal-auditor"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor"}
                  />

                  {/* Regulatory Exposure - Nested */}
                  <Collapsible 
                    open={openSections.regulatory}
                    onOpenChange={(open) => {
                      setOpenSections(prev => ({ ...prev, regulatory: open }))
                    }}
                  >
                    <CollapsibleTrigger
                      onClick={(e) => toggleSection("regulatory", e)}
                      className={cn(
                        "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                        "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                        openSections.regulatory && "bg-white/10 text-white",
                      )}
                    >
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-3" />
                        {!collapsed && <span>Regulatory Exposure</span>}
                      </div>
                      {!collapsed &&
                        (openSections.regulatory ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        ))}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="pl-6 space-y-1.5 pt-1.5" onClick={(e) => e.stopPropagation()}>
                        <SidebarItem
                          icon={FileText}
                          label="Findings"
                          href="/dashboard/internal-auditor/regulatory-exposure/findings"
                          collapsed={collapsed}
                          isActive={pathname === "/dashboard/internal-auditor/regulatory-exposure/findings"}
                        />
                        <SidebarItem
                          icon={BarChart}
                          label="Risks"
                          href="/dashboard/internal-auditor/regulatory-exposure/risks"
                          collapsed={collapsed}
                          isActive={pathname === "/dashboard/internal-auditor/regulatory-exposure/risks"}
                        />
                        <SidebarItem
                          icon={BarChart}
                          label="Impacts"
                          href="/dashboard/internal-auditor/regulatory-exposure/impacts"
                          collapsed={collapsed}
                          isActive={pathname === "/dashboard/internal-auditor/regulatory-exposure/impacts"}
                        />
                        <SidebarItem
                          icon={FileSearch}
                          label="Compliance Mapping"
                          href="/dashboard/internal-auditor/regulatory-exposure/compliance-mapping"
                          collapsed={collapsed}
                          isActive={pathname === "/dashboard/internal-auditor/regulatory-exposure/compliance-mapping"}
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
                          label="ISO 2700"
                          href="/dashboard/internal-auditor/compliance-maturity/iso-2700"
                          collapsed={collapsed}
                          isActive={pathname === "/dashboard/internal-auditor/compliance-maturity/iso-2700"}
                        />
                        <SidebarItem
                          icon={Shield}
                          label="NIST"
                          href="/dashboard/internal-auditor/compliance-maturity/nist"
                          collapsed={collapsed}
                          isActive={pathname === "/dashboard/internal-auditor/compliance-maturity/nist"}
                        />
                        <SidebarItem
                          icon={Shield}
                          label="CIS"
                          href="/dashboard/internal-auditor/compliance-maturity/cis"
                          collapsed={collapsed}
                          isActive={pathname === "/dashboard/internal-auditor/compliance-maturity/cis"}
                        />
                        <SidebarItem
                          icon={Shield}
                          label="SEBI"
                          href="/dashboard/internal-auditor/compliance-maturity/sebi"
                          collapsed={collapsed}
                          isActive={pathname === "/dashboard/internal-auditor/compliance-maturity/sebi"}
                        />
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Posture Maturity */}
            <SidebarItem
              icon={PieChart}
              label="Posture Maturity"
              href="/dashboard/internal-auditor/posture-maturity"
              collapsed={collapsed}
              isActive={pathname === "/dashboard/internal-auditor/posture-maturity"}
            />

            {/* Overview */}
            <Collapsible open={openSections.overview}>
              <CollapsibleTrigger
                onClick={() => toggleSection("overview")}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.overview && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Overview</span>}
                </div>
                {!collapsed &&
                  (openSections.overview ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5">
                  <SidebarItem
                    icon={BarChart3}
                    label="Current Audit Status"
                    href="/dashboard/internal-auditor/overview/current-audit-status"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/overview/current-audit-status"}
                  />
                  <SidebarItem
                    icon={List}
                    label="Table"
                    href="/dashboard/internal-auditor/overview/table"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/overview/table"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Compliance Calendar */}
            <Collapsible open={openSections.complianceCalendar}>
              <CollapsibleTrigger
                onClick={() => toggleSection("complianceCalendar")}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.complianceCalendar && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Compliance Calendar</span>}
                </div>
                {!collapsed &&
                  (openSections.complianceCalendar ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5">
                  <SidebarItem
                    icon={Calendar}
                    label="Overall Schedule"
                    href="/dashboard/internal-auditor/compliance-calendar/overall-schedule"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/compliance-calendar/overall-schedule"}
                  />
                  <SidebarItem
                    icon={Calendar}
                    label="Task/Compliance Calendar"
                    href="/dashboard/internal-auditor/compliance-calendar/task-calendar"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/compliance-calendar/task-calendar"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

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
                    href="/dashboard/internal-auditor/audit-management/audit-plan"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/audit-management/audit-plan"}
                  />
                  <SidebarItem
                    icon={Calendar}
                    label="Audit Schedule"
                    href="/dashboard/internal-auditor/audit-management/audit-schedule"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/audit-management/audit-schedule"}
                  />
                  <SidebarItem
                    icon={FileSearch}
                    label="Audit Scope"
                    href="/dashboard/internal-auditor/audit-management/audit-scope"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/audit-management/audit-scope"}
                  />
                  <SidebarItem
                    icon={Users}
                    label="Participants"
                    href="/dashboard/internal-auditor/audit-management/participants"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/audit-management/participants"}
                  />
                  <SidebarItem
                    icon={PlusCircle}
                    label="Initiate Audit"
                    href="/dashboard/internal-auditor/audit-management/initiate-audit"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/audit-management/initiate-audit"}
                  />
                  <SidebarItem
                    icon={FileSearch}
                    label="Evidence Lifecycle"
                    href="/dashboard/internal-auditor/evidence-lifecycle"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/evidence-lifecycle"}
                  />
                  <SidebarItem
                    icon={RefreshCw}
                    label="Review & Revalidation"
                    href="/dashboard/internal-auditor/review-revalidation"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/review-revalidation"}
                  />
                  <SidebarItem
                    icon={FileBarChart2}
                    label="Report & Recommendation"
                    href="/dashboard/internal-auditor/report-recommendation"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/report-recommendation"}
                  />
                  <SidebarItem
                    icon={ArrowRightLeft}
                    label="Follow-up"
                    href="/dashboard/internal-auditor/follow-up"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/follow-up"}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Requests */}
            <Collapsible open={openSections.requests}>
              <CollapsibleTrigger
                onClick={() => toggleSection("requests")}
                className={cn(
                  "flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium",
                  "text-white/90 hover:bg-white/10 hover:text-white transition-all duration-200",
                  openSections.requests && "bg-white/10 text-white",
                )}
              >
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-3" />
                  {!collapsed && <span>Requests</span>}
                </div>
                {!collapsed &&
                  (openSections.requests ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1.5 pt-1.5">
                  <SidebarItem
                    icon={Eye}
                    label="View Request"
                    href="/dashboard/internal-auditor/requests/view"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/requests/view"}
                  />
                  <SidebarItem
                    icon={PlusCircle}
                    label="Create Request"
                    href="/dashboard/internal-auditor/requests/create"
                    collapsed={collapsed}
                    isActive={pathname === "/dashboard/internal-auditor/requests/create"}
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
}

function SidebarItem({ icon: Icon, label, href, collapsed, className, isActive }: SidebarItemProps) {
  return (
    <Link
      href={href}
      onClick={(e) => {
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

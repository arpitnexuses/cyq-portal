import type React from "react"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div
        className="flex-1 flex flex-col transition-all duration-300"
        style={{ width: "calc(100% - var(--sidebar-width))", marginLeft: "var(--sidebar-width)" }}
      >
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}

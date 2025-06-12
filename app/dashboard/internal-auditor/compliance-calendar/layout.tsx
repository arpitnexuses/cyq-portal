"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { usePathname, useRouter } from "next/navigation"

export default function ComplianceCalendarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  
  const handleTabChange = (value: string) => {
    if (value === "overall") {
      router.push("/dashboard/internal-auditor/compliance-calendar/overall-schedule")
    } else if (value === "task") {
      router.push("/dashboard/internal-auditor/compliance-calendar/task-calendar")
    }
  }

  const getActiveTab = () => {
    if (pathname.includes("/overall-schedule")) {
      return "overall"
    } else if (pathname.includes("/task-calendar")) {
      return "task"
    }
    return "overall"
  }

  return (
    <div className="flex-1 space-y-4 p-0">
      <div className="flex items-center pt-6 px-6">
        <Tabs
          defaultValue={getActiveTab()}
          value={getActiveTab()}
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList>
            <TabsTrigger value="overall">Overall Schedule</TabsTrigger>
            <TabsTrigger value="task">Task Calendar</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {children}
    </div>
  )
} 
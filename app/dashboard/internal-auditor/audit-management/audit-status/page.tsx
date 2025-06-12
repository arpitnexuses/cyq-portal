import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileDown, ChevronLeft, Eye, FileEdit } from "lucide-react"
import Link from "next/link"

export default function AuditStatusPage() {
  // Mock data for demonstration
  const auditStatuses = [
    {
      id: "AUD-2023-001",
      name: "IT Security Assessment",
      type: "Internal",
      startDate: "10 Jan 2023",
      endDate: "25 Jan 2023",
      status: "Completed",
    },
    {
      id: "AUD-2023-002",
      name: "Financial Controls Review",
      type: "Compliance",
      startDate: "15 Feb 2023",
      endDate: "28 Feb 2023",
      status: "In Progress",
    },
    {
      id: "AUD-2023-003",
      name: "Operational Process Review",
      type: "Operational",
      startDate: "05 Mar 2023",
      endDate: "20 Mar 2023",
      status: "Planning",
    },
    {
      id: "AUD-2023-004",
      name: "Vendor Compliance Audit",
      type: "External",
      startDate: "12 Apr 2023",
      endDate: "28 Apr 2023",
      status: "Pending Approval",
    },
    {
      id: "AUD-2023-005",
      name: "Data Privacy Assessment",
      type: "Compliance",
      startDate: "03 May 2023",
      endDate: "17 May 2023",
      status: "Draft",
    }
  ]

  // Function to get badge color based on status
  const getStatusBadgeColor = (status) => {
    switch(status) {
      case "Completed": return "bg-green-100 text-green-800"
      case "In Progress": return "bg-blue-100 text-blue-800"
      case "Planning": return "bg-purple-100 text-purple-800"
      case "Pending Approval": return "bg-yellow-100 text-yellow-800"
      case "Draft": return "bg-slate-100 text-slate-800"
      default: return "bg-slate-100 text-slate-800"
    }
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/internal-auditor/audit-management/initiate-audit">
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">Audit Status</h1>
            </div>
            <Button>
              <FileDown className="h-4 w-4 mr-2" />
              Download Report
            </Button>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Current Audit Status</CardTitle>
              <CardDescription>View and track the status of all audits</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Audit ID</TableHead>
                    <TableHead>Audit Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditStatuses.map((audit) => (
                    <TableRow key={audit.id}>
                      <TableCell className="font-medium">{audit.id}</TableCell>
                      <TableCell>{audit.name}</TableCell>
                      <TableCell>{audit.type}</TableCell>
                      <TableCell>{audit.startDate}</TableCell>
                      <TableCell>{audit.endDate}</TableCell>
                      <TableCell>
                        <Badge className={getStatusBadgeColor(audit.status)}>
                          {audit.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {(audit.status === "Draft" || audit.status === "Planning") && (
                            <Button variant="ghost" size="icon">
                              <FileEdit className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Status Summary</CardTitle>
              <CardDescription>Overview of audit statuses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                <div className="border rounded-md p-4 min-w-[200px]">
                  <div className="text-sm text-muted-foreground">Total Audits</div>
                  <div className="text-3xl font-bold mt-1">5</div>
                </div>
                <div className="border rounded-md p-4 min-w-[200px] bg-green-50">
                  <div className="text-sm text-green-800">Completed</div>
                  <div className="text-3xl font-bold text-green-800 mt-1">1</div>
                </div>
                <div className="border rounded-md p-4 min-w-[200px] bg-blue-50">
                  <div className="text-sm text-blue-800">In Progress</div>
                  <div className="text-3xl font-bold text-blue-800 mt-1">1</div>
                </div>
                <div className="border rounded-md p-4 min-w-[200px] bg-purple-50">
                  <div className="text-sm text-purple-800">Planning</div>
                  <div className="text-3xl font-bold text-purple-800 mt-1">1</div>
                </div>
                <div className="border rounded-md p-4 min-w-[200px] bg-yellow-50">
                  <div className="text-sm text-yellow-800">Pending Approval</div>
                  <div className="text-3xl font-bold text-yellow-800 mt-1">1</div>
                </div>
                <div className="border rounded-md p-4 min-w-[200px] bg-slate-50">
                  <div className="text-sm text-slate-800">Draft</div>
                  <div className="text-3xl font-bold text-slate-800 mt-1">1</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
} 
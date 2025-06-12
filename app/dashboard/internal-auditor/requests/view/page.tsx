import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Download, Clock, CheckCircle, AlertTriangle, MessageSquare, FileText } from "lucide-react"
import Link from "next/link"

export default function ViewRequestPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">View Requests</h1>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button asChild>
            <Link href="/dashboard/internal-auditor/requests/create">
              <MessageSquare className="h-4 w-4 mr-2" />
              New Request
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search requests..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in-progress">In Progress</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Requests</TabsTrigger>
          <TabsTrigger value="my">My Requests</TabsTrigger>
          <TabsTrigger value="assigned">Assigned to Me</TabsTrigger>
          <TabsTrigger value="unassigned">Unassigned</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Request List</CardTitle>
              <CardDescription>View and manage all requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted px-4 py-2 text-sm font-medium">
                  <div>ID</div>
                  <div className="col-span-2">Subject</div>
                  <div>Requester</div>
                  <div>Status</div>
                  <div>Last Updated</div>
                </div>
                {[
                  {
                    id: "REQ-001",
                    subject: "Access to Financial Records",
                    requester: "Sarah Williams",
                    status: "Open",
                    lastUpdated: "2 hours ago",
                  },
                  {
                    id: "REQ-002",
                    subject: "Additional Evidence for IT Security Assessment",
                    requester: "Michael Chen",
                    status: "In Progress",
                    lastUpdated: "1 day ago",
                  },
                  {
                    id: "REQ-003",
                    subject: "Extension Request for Compliance Documentation",
                    requester: "Jessica Lee",
                    status: "In Progress",
                    lastUpdated: "3 days ago",
                  },
                  {
                    id: "REQ-004",
                    subject: "Clarification on Audit Findings",
                    requester: "Robert Wilson",
                    status: "Resolved",
                    lastUpdated: "5 days ago",
                  },
                  {
                    id: "REQ-005",
                    subject: "Request for Additional Resources",
                    requester: "Emily Davis",
                    status: "Closed",
                    lastUpdated: "1 week ago",
                  },
                ].map((request, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 px-4 py-3 text-sm border-t hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="font-medium">{request.id}</div>
                    <div className="col-span-2">{request.subject}</div>
                    <div>{request.requester}</div>
                    <div>
                      <Badge
                        variant="outline"
                        className={
                          request.status === "Open"
                            ? "bg-blue-50 text-blue-700 border-blue-200"
                            : request.status === "In Progress"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : request.status === "Resolved"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-gray-50 text-gray-700 border-gray-200"
                        }
                      >
                        {request.status === "Open" && <AlertTriangle className="h-3 w-3 mr-1" />}
                        {request.status === "In Progress" && <Clock className="h-3 w-3 mr-1" />}
                        {request.status === "Resolved" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {request.status === "Closed" && <FileText className="h-3 w-3 mr-1" />}
                        {request.status}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground">{request.lastUpdated}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="my" className="mt-6">
          {/* My Requests content */}
          <Card>
            <CardHeader>
              <CardTitle>My Requests</CardTitle>
              <CardDescription>Requests you have submitted</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>You have not submitted any requests yet.</p>
                <Button className="mt-4" asChild>
                  <Link href="/dashboard/internal-auditor/requests/create">
                    Create New Request
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assigned" className="mt-6">
          {/* Assigned to Me content */}
          <Card>
            <CardHeader>
              <CardTitle>Assigned to Me</CardTitle>
              <CardDescription>Requests assigned to you for action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted px-4 py-2 text-sm font-medium">
                  <div>ID</div>
                  <div className="col-span-2">Subject</div>
                  <div>Requester</div>
                  <div>Status</div>
                  <div>Last Updated</div>
                </div>
                {[
                  {
                    id: "REQ-002",
                    subject: "Additional Evidence for IT Security Assessment",
                    requester: "Michael Chen",
                    status: "In Progress",
                    lastUpdated: "1 day ago",
                  },
                  {
                    id: "REQ-003",
                    subject: "Extension Request for Compliance Documentation",
                    requester: "Jessica Lee",
                    status: "In Progress",
                    lastUpdated: "3 days ago",
                  },
                ].map((request, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 px-4 py-3 text-sm border-t hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="font-medium">{request.id}</div>
                    <div className="col-span-2">{request.subject}</div>
                    <div>{request.requester}</div>
                    <div>
                      <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                        <Clock className="h-3 w-3 mr-1" />
                        {request.status}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground">{request.lastUpdated}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="unassigned" className="mt-6">
          {/* Unassigned content */}
          <Card>
            <CardHeader>
              <CardTitle>Unassigned Requests</CardTitle>
              <CardDescription>Requests that need to be assigned</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <div className="grid grid-cols-6 bg-muted px-4 py-2 text-sm font-medium">
                  <div>ID</div>
                  <div className="col-span-2">Subject</div>
                  <div>Requester</div>
                  <div>Status</div>
                  <div>Last Updated</div>
                </div>
                {[
                  {
                    id: "REQ-001",
                    subject: "Access to Financial Records",
                    requester: "Sarah Williams",
                    status: "Open",
                    lastUpdated: "2 hours ago",
                  },
                ].map((request, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 px-4 py-3 text-sm border-t hover:bg-muted/50 cursor-pointer"
                  >
                    <div className="font-medium">{request.id}</div>
                    <div className="col-span-2">{request.subject}</div>
                    <div>{request.requester}</div>
                    <div>
                      <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        {request.status}
                      </Badge>
                    </div>
                    <div className="text-muted-foreground">{request.lastUpdated}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  )
}

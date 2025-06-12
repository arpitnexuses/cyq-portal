import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, CheckCircle2, ChevronLeft, FileText } from "lucide-react"
import Link from "next/link"
import { DialogHeader, DialogFooter, Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function NewAuditPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">Initiate New Audit</h1>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>New Audit Plan</CardTitle>
              <CardDescription>Create a new audit plan to initiate the audit process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="audit-type">Audit Type</Label>
                  <Select>
                    <SelectTrigger id="audit-type">
                      <SelectValue placeholder="Select audit type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="internal">Internal</SelectItem>
                      <SelectItem value="external">External</SelectItem>
                      <SelectItem value="compliance">Compliance</SelectItem>
                      <SelectItem value="financial">Financial</SelectItem>
                      <SelectItem value="operational">Operational</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="audit-objective">Audit Objective</Label>
                  <Textarea id="audit-objective" placeholder="Enter the objective of this audit" />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid gap-2">
                  <Label>Audit Period</Label>
                  <div className="flex gap-4">
                    <div className="grid gap-1.5 flex-1">
                      <Label htmlFor="start-date" className="text-xs">Start Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="grid gap-1.5 flex-1">
                      <Label htmlFor="end-date" className="text-xs">End Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            <span>Pick a date</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar mode="single" />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="audit-scope">Scope</Label>
                  <Textarea id="audit-scope" placeholder="Define the scope of this audit" />
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Self Approval</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select approval method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="authorized">I'm Authorized</SelectItem>
                    <SelectItem value="upload">Upload Approval</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">Save as Draft</Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Submit for Approval</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Confirm Audit Plan Submission</DialogTitle>
                    </DialogHeader>
                    <div className="py-4">
                      <p>Are you sure you want to submit this audit plan for approval?</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        Once submitted, the plan will be sent to management for review and approval.
                      </p>
                    </div>
                    <DialogFooter>
                      <Button variant="outline">Cancel</Button>
                      <Button>Submit</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
} 
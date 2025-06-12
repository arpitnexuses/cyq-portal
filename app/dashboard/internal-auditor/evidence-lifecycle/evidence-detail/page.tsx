import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, FileDown, FileText, Check, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"

export default function EvidenceDetailPage() {
  // Mock data for demonstration
  const evidence = {
    id: "EV-002",
    controlId: "AC-2",
    question: "Are password complexity requirements enforced?",
    evidence: "Password_Policy_Screenshot.png",
    auditeeAnswer: "Yes, enforced through Active Directory",
    auditeeScore: 5,
    auditeeRemarks: "Screenshot of Active Directory password policy settings",
    weightage: 4,
    auditorScore: null,
    auditorNotes: "",
    finalScore: null,
    status: "Pending Review",
    finding: "",
    domain: "Access Control",
    technology: "Active Directory",
    department: "IT Security",
    uploadedBy: "John Smith",
    uploadedDate: "15 May 2023"
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/internal-auditor/evidence-lifecycle">
                  <ChevronLeft className="h-4 w-4" />
                  Back to Evidence List
                </Link>
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">Evidence Details</h1>
            </div>
            <Button>
              <FileDown className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Evidence Information</CardTitle>
                      <CardDescription>Details of the evidence item</CardDescription>
                    </div>
                    <Badge 
                      className="bg-amber-100 text-amber-800"
                    >
                      {evidence.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-muted-foreground text-sm">Control ID</Label>
                      <div className="font-medium mt-1">{evidence.controlId}</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-sm">Domain</Label>
                      <div className="font-medium mt-1">{evidence.domain}</div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-muted-foreground text-sm">Question</Label>
                    <div className="font-medium mt-1">{evidence.question}</div>
                  </div>

                  <div>
                    <Label className="text-muted-foreground text-sm">Evidence</Label>
                    <div className="flex items-center mt-1 border p-3 rounded-md bg-slate-50">
                      <FileText className="h-5 w-5 mr-2 text-blue-600" />
                      <span>{evidence.evidence}</span>
                      <Button variant="ghost" size="sm" className="ml-auto">View</Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-muted-foreground text-sm">Technology</Label>
                      <div className="font-medium mt-1">{evidence.technology}</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-sm">Department</Label>
                      <div className="font-medium mt-1">{evidence.department}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-muted-foreground text-sm">Uploaded By</Label>
                      <div className="font-medium mt-1">{evidence.uploadedBy}</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-sm">Upload Date</Label>
                      <div className="font-medium mt-1">{evidence.uploadedDate}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Auditee Assessment</CardTitle>
                  <CardDescription>Information provided by the auditee</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 bg-slate-50/50">
                  <div>
                    <Label className="text-muted-foreground text-sm">Assessment Answer</Label>
                    <div className="font-medium mt-1">{evidence.auditeeAnswer}</div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-muted-foreground text-sm">Self Score</Label>
                      <div className="font-medium mt-1">{evidence.auditeeScore}/5</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-sm">Weightage</Label>
                      <div className="font-medium mt-1">{evidence.weightage}</div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-muted-foreground text-sm">Remarks</Label>
                    <div className="font-medium mt-1">{evidence.auditeeRemarks}</div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Auditor Assessment</CardTitle>
                  <CardDescription>Provide your assessment of this evidence</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="auditor-score">Auditor Score</Label>
                    <Select>
                      <SelectTrigger id="auditor-score" className="mt-1">
                        <SelectValue placeholder="Select score" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 - Inadequate</SelectItem>
                        <SelectItem value="2">2 - Needs Improvement</SelectItem>
                        <SelectItem value="3">3 - Satisfactory</SelectItem>
                        <SelectItem value="4">4 - Good</SelectItem>
                        <SelectItem value="5">5 - Excellent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="auditor-notes">Auditor Notes</Label>
                    <Textarea 
                      id="auditor-notes" 
                      placeholder="Add your assessment notes here..." 
                      className="mt-1 min-h-[100px]"
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">Finding</Label>
                    <RadioGroup defaultValue="conformance">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="conformance" id="conformance" />
                        <Label htmlFor="conformance">Conformance</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="observation" id="observation" />
                        <Label htmlFor="observation">Observation</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="non-conformance" id="non-conformance" />
                        <Label htmlFor="non-conformance">Non-conformance</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="flex justify-end gap-3">
                    <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                      <X className="h-4 w-4 mr-2" />
                      Refer Back
                    </Button>
                    <Button className="bg-green-600 hover:bg-green-700">
                      <Check className="h-4 w-4 mr-2" />
                      Approve
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Summary</CardTitle>
                  <CardDescription>Evidence assessment summary</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Control ID:</span>
                    <span className="font-medium">{evidence.controlId}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Status:</span>
                    <Badge 
                      className="bg-amber-100 text-amber-800"
                    >
                      {evidence.status}
                    </Badge>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Auditee Score:</span>
                    <span className="font-medium">{evidence.auditeeScore}/5</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Weightage:</span>
                    <span className="font-medium">{evidence.weightage}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Auditor Score:</span>
                    <span className="font-medium">{evidence.auditorScore ? `${evidence.auditorScore}/5` : '-'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Final Score:</span>
                    <span className="font-medium">{evidence.finalScore || '-'}</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-muted-foreground">Finding:</span>
                    <span className="font-medium">{evidence.finding || '-'}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Related Controls</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="border rounded-md p-3">
                      <div className="font-medium">AC-1: Access Control Policy</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Policy framework for password controls
                      </div>
                    </div>
                    <div className="border rounded-md p-3">
                      <div className="font-medium">AC-3: Account Management</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        User account lifecycle management
                      </div>
                    </div>
                    <div className="border rounded-md p-3">
                      <div className="font-medium">AC-7: Failed Login Attempts</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Handling of consecutive failed login attempts
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      <p>When reviewing password complexity:</p>
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>Check minimum length requirements</li>
                        <li>Verify character complexity rules</li>
                        <li>Review password expiration policy</li>
                        <li>Confirm account lockout thresholds</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
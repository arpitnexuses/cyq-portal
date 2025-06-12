import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Filter, Check, X, Download, Eye, FileText } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function EvidenceLifecyclePage() {
  // Mock data for demonstration
  const evidenceData = [
    {
      id: "EV-001",
      controlId: "AC-1",
      question: "Is there a documented access control policy?",
      evidence: "Access_Control_Policy_v2.1.pdf",
      auditeeAnswer: "Yes, we have implemented a comprehensive access control policy.",
      auditeeScore: 4,
      auditeeRemarks: "Updated policy document with latest approval",
      weightage: 3,
      auditorScore: 3,
      auditorNotes: "Policy exists but lacks some implementation details",
      finalScore: 3.5,
      status: "Approved",
      finding: "Conformance"
    },
    {
      id: "EV-002",
      controlId: "AC-2",
      question: "Are password complexity requirements enforced?",
      evidence: "Password_Policy_Screenshot.png",
      auditeeAnswer: "Yes, enforced through Active Directory",
      auditeeScore: 5,
      auditeeRemarks: "Screenshot of Active Directory password policy settings",
      weightage: 4,
      auditorScore: 4,
      auditorNotes: "Verified policy settings",
      finalScore: 4.5,
      status: "Pending Review",
      finding: ""
    },
    {
      id: "EV-003",
      controlId: "AT-1",
      question: "Is security awareness training conducted annually?",
      evidence: "Training_Completion_Report_2023.xlsx",
      auditeeAnswer: "Yes, training is conducted and tracked",
      auditeeScore: 3,
      auditeeRemarks: "Training completion report for all employees",
      weightage: 3,
      auditorScore: 2,
      auditorNotes: "Some employees have not completed training",
      finalScore: 2.5,
      status: "Referred Back",
      finding: "Observation"
    },
    {
      id: "EV-004",
      controlId: "CM-1",
      question: "Is there a documented change management process?",
      evidence: "Change_Management_Process.pdf",
      auditeeAnswer: "Yes, we follow ITIL-based change management",
      auditeeScore: 4,
      auditeeRemarks: "Process document attached",
      weightage: 3,
      auditorScore: 3,
      auditorNotes: "Process exists but lacks proper enforcement",
      finalScore: 3.5,
      status: "Approved",
      finding: "Conformance"
    },
    {
      id: "EV-005",
      controlId: "IR-1",
      question: "Is there an incident response plan?",
      evidence: "Incident_Response_Plan.docx",
      auditeeAnswer: "Yes, we have a documented IR plan",
      auditeeScore: 2,
      auditeeRemarks: "Plan needs updating",
      weightage: 5,
      auditorScore: 1,
      auditorNotes: "Plan is severely outdated",
      finalScore: 1.5,
      status: "Referred Back",
      finding: "Non-conformance"
    },
  ];

  // Count of evidence by status
  const pendingCount = evidenceData.filter(e => e.status === "Pending Review").length;
  const approvedCount = evidenceData.filter(e => e.status === "Approved").length;
  const referredCount = evidenceData.filter(e => e.status === "Referred Back").length;

  // Domain, technology, and department counts for demonstration
  const domainCount = 5;
  const technologyCount = 4;
  const auditCount = 3;
  const departmentCount = 3;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Evidence Lifecycle</h1>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export Evidence
            </Button>
          </div>

          {/* Tile cards for evidence summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-blue-700">All Evidence</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-700">{evidenceData.length}</div>
                <p className="text-sm text-blue-600">Total evidence items</p>
              </CardContent>
            </Card>
            
            <Card className="bg-purple-50 border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-purple-700">Domains</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-700">{domainCount}</div>
                <p className="text-sm text-purple-600">Control domains</p>
              </CardContent>
            </Card>
            
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-700">Technology</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-700">{technologyCount}</div>
                <p className="text-sm text-green-600">Tech categories</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-amber-700">Audit-wise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-amber-700">{auditCount}</div>
                <p className="text-sm text-amber-600">Active audits</p>
              </CardContent>
            </Card>
            
            <Card className="bg-rose-50 border-rose-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-rose-700">Department</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-rose-700">{departmentCount}</div>
                <p className="text-sm text-rose-600">Departments</p>
              </CardContent>
            </Card>
          </div>

          {/* Search and filter section */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
              <Input 
                type="search" 
                placeholder="Search for People, Domain, Technology-wise, Department-wise..." 
                className="pl-10 pr-4 py-2"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-[220px]">
                <SelectValue placeholder="Filter by Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="people">People</SelectItem>
                <SelectItem value="domain">Domain</SelectItem>
                <SelectItem value="technology">Technology</SelectItem>
                <SelectItem value="department">Department</SelectItem>
                <SelectItem value="audit">Audit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Tabs for different evidence statuses */}
          <Tabs defaultValue="all" className="mb-6">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Evidence</TabsTrigger>
              <TabsTrigger value="pending">
                Pending Review 
                <Badge variant="secondary" className="ml-2 bg-amber-100 text-amber-800">{pendingCount}</Badge>
              </TabsTrigger>
              <TabsTrigger value="approved">
                Approved
                <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">{approvedCount}</Badge>
              </TabsTrigger>
              <TabsTrigger value="referred">
                Referred Back
                <Badge variant="secondary" className="ml-2 bg-red-100 text-red-800">{referredCount}</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <Card className="max-w-[100%]">
                <CardHeader>
                  <CardTitle>Evidence Summary</CardTitle>
                  <CardDescription>All evidence submissions and their status</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ScrollArea className="w-full" type="always">
                    <div className="w-[1200px] p-6">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[50px]">S. No.</TableHead>
                            <TableHead className="w-[80px]">Control ID</TableHead>
                            <TableHead className="w-[180px]">Question</TableHead>
                            <TableHead className="w-[120px]">Evidence</TableHead>
                            <TableHead className="w-[150px]">Assessment</TableHead>
                            <TableHead className="w-[70px]">Auditee Score</TableHead>
                            <TableHead className="w-[100px]">Remarks</TableHead>
                            <TableHead className="w-[70px]">Weightage</TableHead>
                            <TableHead className="w-[70px]">Auditor Score</TableHead>
                            <TableHead className="w-[100px]">Notes</TableHead>
                            <TableHead className="w-[70px]">Final Score</TableHead>
                            <TableHead className="w-[100px]">Status</TableHead>
                            <TableHead className="w-[120px]">Finding</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {evidenceData.map((evidence, index) => (
                            <TableRow key={evidence.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{evidence.controlId}</TableCell>
                              <TableCell className="font-medium">{evidence.question}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <FileText className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0" />
                                  <span className="text-sm truncate" title={evidence.evidence}>{evidence.evidence}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="truncate" title={evidence.auditeeAnswer}>{evidence.auditeeAnswer}</div>
                              </TableCell>
                              <TableCell>{evidence.auditeeScore}/5</TableCell>
                              <TableCell>
                                <div className="truncate" title={evidence.auditeeRemarks}>{evidence.auditeeRemarks}</div>
                              </TableCell>
                              <TableCell>{evidence.weightage}</TableCell>
                              <TableCell>{evidence.auditorScore}/5</TableCell>
                              <TableCell>
                                <div className="truncate" title={evidence.auditorNotes}>{evidence.auditorNotes}</div>
                              </TableCell>
                              <TableCell className="font-medium">{evidence.finalScore}</TableCell>
                              <TableCell>
                                <Badge 
                                  className={
                                    evidence.status === "Approved" 
                                      ? "bg-green-100 text-green-800" 
                                      : evidence.status === "Referred Back" 
                                        ? "bg-red-100 text-red-800"
                                        : "bg-amber-100 text-amber-800"
                                  }
                                >
                                  {evidence.status}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                {evidence.finding && (
                                  <Badge 
                                    className={
                                      evidence.finding === "Conformance" 
                                        ? "bg-green-100 text-green-800" 
                                        : evidence.finding === "Non-conformance" 
                                          ? "bg-red-100 text-red-800"
                                          : "bg-blue-100 text-blue-800"
                                    }
                                  >
                                    {evidence.finding}
                                  </Badge>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pending" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Pending Review</CardTitle>
                  <CardDescription>Evidence awaiting your review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">S. No.</TableHead>
                          <TableHead className="w-[100px]">Control ID</TableHead>
                          <TableHead className="w-[250px]">Question</TableHead>
                          <TableHead className="w-[150px]">Evidence</TableHead>
                          <TableHead className="w-[120px]">Auditee Score</TableHead>
                          <TableHead className="w-[80px]">Weightage</TableHead>
                          <TableHead className="w-[120px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {evidenceData
                          .filter(e => e.status === "Pending Review")
                          .map((evidence, index) => (
                            <TableRow key={evidence.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{evidence.controlId}</TableCell>
                              <TableCell className="font-medium">{evidence.question}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <FileText className="h-4 w-4 mr-2 text-blue-600" />
                                  <span className="text-sm">{evidence.evidence}</span>
                                </div>
                              </TableCell>
                              <TableCell>{evidence.auditeeScore}/5</TableCell>
                              <TableCell>{evidence.weightage}</TableCell>
                              <TableCell>
                                <div className="flex space-x-2">
                                  <Button size="sm" variant="outline">
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
                                    <Check className="h-4 w-4" />
                                  </Button>
                                  <Button size="sm" variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                                    <X className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="approved" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Approved Evidence</CardTitle>
                  <CardDescription>Evidence items that have been approved</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">S. No.</TableHead>
                          <TableHead className="w-[100px]">Control ID</TableHead>
                          <TableHead className="w-[250px]">Question</TableHead>
                          <TableHead className="w-[150px]">Evidence</TableHead>
                          <TableHead className="w-[100px]">Auditor Score</TableHead>
                          <TableHead className="w-[100px]">Final Score</TableHead>
                          <TableHead className="w-[150px]">Finding</TableHead>
                          <TableHead className="w-[100px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {evidenceData
                          .filter(e => e.status === "Approved")
                          .map((evidence, index) => (
                            <TableRow key={evidence.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{evidence.controlId}</TableCell>
                              <TableCell className="font-medium">{evidence.question}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <FileText className="h-4 w-4 mr-2 text-blue-600" />
                                  <span className="text-sm">{evidence.evidence}</span>
                                </div>
                              </TableCell>
                              <TableCell>{evidence.auditorScore}/5</TableCell>
                              <TableCell className="font-medium">{evidence.finalScore}</TableCell>
                              <TableCell>
                                <Badge 
                                  className={
                                    evidence.finding === "Conformance" 
                                      ? "bg-green-100 text-green-800" 
                                      : evidence.finding === "Non-conformance" 
                                        ? "bg-red-100 text-red-800"
                                        : "bg-blue-100 text-blue-800"
                                  }
                                >
                                  {evidence.finding}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button size="sm" variant="outline">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="referred" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Referred Back</CardTitle>
                  <CardDescription>Evidence items that need additional information</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[80px]">S. No.</TableHead>
                          <TableHead className="w-[100px]">Control ID</TableHead>
                          <TableHead className="w-[250px]">Question</TableHead>
                          <TableHead className="w-[150px]">Evidence</TableHead>
                          <TableHead className="w-[150px]">Auditor Notes</TableHead>
                          <TableHead className="w-[150px]">Finding</TableHead>
                          <TableHead className="w-[100px]">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {evidenceData
                          .filter(e => e.status === "Referred Back")
                          .map((evidence, index) => (
                            <TableRow key={evidence.id}>
                              <TableCell>{index + 1}</TableCell>
                              <TableCell>{evidence.controlId}</TableCell>
                              <TableCell className="font-medium">{evidence.question}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <FileText className="h-4 w-4 mr-2 text-blue-600" />
                                  <span className="text-sm">{evidence.evidence}</span>
                                </div>
                              </TableCell>
                              <TableCell>{evidence.auditorNotes}</TableCell>
                              <TableCell>
                                <Badge 
                                  className={
                                    evidence.finding === "Conformance" 
                                      ? "bg-green-100 text-green-800" 
                                      : evidence.finding === "Non-conformance" 
                                        ? "bg-red-100 text-red-800"
                                        : "bg-blue-100 text-blue-800"
                                  }
                                >
                                  {evidence.finding}
                                </Badge>
                              </TableCell>
                              <TableCell>
                                <Button size="sm" variant="outline">
                                  <Eye className="h-4 w-4" />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Task Matrix</CardTitle>
              <CardDescription>Review the pending evidence items</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-amber-800">
                  <strong>Note:</strong> Count of Pending Review: {pendingCount} | Approved: {approvedCount} | Referred Back: {referredCount} evidence to be displayed
                </p>
              </div>
              
              <div className="space-y-2">
                <p><strong>Task Matrix:</strong> to be replaced with Pending Review</p>
                <p><strong>Compliance Item:</strong> to be replaced with Standard Control No. and Domain</p>
                <p><strong>Note:</strong> The section which is prefilled by Auditee has to be Grayed Out for Internal Auditor</p>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}

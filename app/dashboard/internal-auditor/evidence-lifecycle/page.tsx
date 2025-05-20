import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Filter, FileText, CheckCircle, ArrowLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function EvidenceLifecyclePage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Evidence Lifecycle
              </h1>
              <p className="text-slate-600 text-lg">Review and manage evidence submissions</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hover:bg-slate-100 transition-colors">
                Filter by Audit
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                Review Selected
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <Input 
                type="search" 
                placeholder="Search evidence..." 
                className="pl-10 h-12 text-lg border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
              />
            </div>
            <Button variant="outline" size="icon" className="h-12 w-12 hover:bg-slate-100 transition-colors">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="pending" className="space-y-6">
            <TabsList className="bg-white p-1 rounded-xl shadow-sm">
              <TabsTrigger value="pending" className="rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 transition-all duration-200">
                Pending Review
              </TabsTrigger>
              <TabsTrigger value="approved" className="rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 transition-all duration-200">
                Approved
              </TabsTrigger>
              <TabsTrigger value="referred" className="rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 transition-all duration-200">
                Referred Back
              </TabsTrigger>
              <TabsTrigger value="all" className="rounded-lg data-[state=active]:bg-blue-50 data-[state=active]:text-blue-700 transition-all duration-200">
                All Evidence
              </TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="space-y-6 mt-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-200">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-white border-b">
                  <CardTitle className="text-2xl font-semibold text-slate-900">Task Matrix</CardTitle>
                  <CardDescription className="text-slate-600">Evidence submissions awaiting your review</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-8">
                    {[
                      {
                        id: 1,
                        compliance: "Access Control Policy",
                        question: "Is there a documented access control policy?",
                        evidence: "Access_Control_Policy_v2.1.pdf",
                        remarks: "Updated policy document with latest approval",
                        selfScore: 4,
                        status: "Pending",
                      },
                      {
                        id: 2,
                        compliance: "Password Management",
                        question: "Are password complexity requirements enforced?",
                        evidence: "Password_Policy_Screenshot.png",
                        remarks: "Screenshot of Active Directory password policy settings",
                        selfScore: 3,
                        status: "Pending",
                      },
                      {
                        id: 3,
                        compliance: "Security Awareness",
                        question: "Is security awareness training conducted annually?",
                        evidence: "Training_Completion_Report_2025.xlsx",
                        remarks: "Training completion report for all employees",
                        selfScore: 5,
                        status: "Pending",
                      },
                    ].map((item) => (
                      <div key={item.id} className="border border-slate-200 rounded-xl p-6 hover:border-blue-200 transition-all duration-200 bg-white">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          <div>
                            <h3 className="text-sm font-medium text-slate-500 mb-1">Compliance Item</h3>
                            <p className="font-semibold text-slate-900">{item.compliance}</p>
                          </div>
                          <div className="md:col-span-2">
                            <h3 className="text-sm font-medium text-slate-500 mb-1">Question</h3>
                            <p className="font-semibold text-slate-900">{item.question}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                          <div>
                            <h3 className="text-sm font-medium text-slate-500 mb-1">Evidence</h3>
                            <div className="flex items-center mt-1">
                              <FileText className="h-5 w-5 mr-2 text-blue-600" />
                              <span className="text-sm text-slate-700">{item.evidence}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-slate-500 mb-1">Remarks</h3>
                            <p className="text-sm text-slate-700">{item.remarks}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-slate-500 mb-1">Self Score</h3>
                            <div className="flex items-center mt-1">
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                {item.selfScore} / 5
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-slate-200 pt-6 mt-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                              <div className="space-y-2">
                                <Label htmlFor={`weightage-${item.id}`} className="text-slate-700">Weightage Score</Label>
                                <Select>
                                  <SelectTrigger id={`weightage-${item.id}`} className="h-11">
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
                              <div className="space-y-2">
                                <Label htmlFor={`notes-${item.id}`} className="text-slate-700">Auditor Notes</Label>
                                <Textarea 
                                  id={`notes-${item.id}`} 
                                  placeholder="Add your review notes here..." 
                                  className="min-h-[100px] resize-none focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                                />
                              </div>
                            </div>
                            <div className="space-y-6">
                              <div className="space-y-3">
                                <Label className="text-slate-700">Finding Status</Label>
                                <div className="space-y-3 bg-slate-50 p-4 rounded-lg">
                                  <div className="flex items-center space-x-3">
                                    <Checkbox id={`complete-${item.id}`} className="border-slate-300" />
                                    <Label htmlFor={`complete-${item.id}`} className="text-slate-700">Complete</Label>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <Checkbox id={`observation-${item.id}`} className="border-slate-300" />
                                    <Label htmlFor={`observation-${item.id}`} className="text-slate-700">Observation</Label>
                                  </div>
                                  <div className="flex items-center space-x-3">
                                    <Checkbox id={`nonconformity-${item.id}`} className="border-slate-300" />
                                    <Label htmlFor={`nonconformity-${item.id}`} className="text-slate-700">Non-Conformity</Label>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-4">
                                <Button variant="outline" className="hover:bg-slate-100 transition-colors">
                                  <ArrowLeft className="h-4 w-4 mr-2" />
                                  Refer Back
                                </Button>
                                <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl">
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Approve
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="approved" className="mt-6">
              {/* Approved evidence content */}
            </TabsContent>
            <TabsContent value="referred" className="mt-6">
              {/* Referred back evidence content */}
            </TabsContent>
            <TabsContent value="all" className="mt-6">
              {/* All evidence content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

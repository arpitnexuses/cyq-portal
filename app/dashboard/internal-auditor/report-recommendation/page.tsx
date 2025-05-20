import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Edit, CheckCircle, Printer, Mail, FileBarChart2, Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// Custom Progress component with gradient
const GradientProgress = ({ value, className }: { value: number; className?: string }) => {
  return (
    <div className={cn("relative h-3 bg-slate-100 rounded-full overflow-hidden", className)}>
      <div
        className="absolute top-0 left-0 h-full transition-all duration-500 ease-out"
        style={{
          width: `${value}%`,
          background: "linear-gradient(90deg, #3b82f6 0%, #60a5fa 50%, #93c5fd 100%)",
          boxShadow: "0 0 10px rgba(59, 130, 246, 0.3)",
        }}
      />
    </div>
  )
}

export default function ReportRecommendationPage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                Report & Recommendation
              </h1>
              <p className="text-slate-600 text-lg">Generate and manage audit reports</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="hover:bg-slate-100 transition-all duration-200">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                <Edit className="h-4 w-4 mr-2" />
                Edit Report
              </Button>
            </div>
          </div>

          {/* Report Generation Status */}
          <Card className="mb-8 border-none shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
              <CardTitle className="text-2xl">Report Generation Status</CardTitle>
              <CardDescription className="text-slate-600">Current status of report sections</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                <span className="text-sm font-medium text-blue-600">75% Complete</span>
              </div>
              <GradientProgress value={75} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-slate-800">Report Sections</h3>
                  {[
                    { id: 1, name: "Executive Summary", status: "Complete", progress: 100 },
                    { id: 2, name: "Audit Scope & Methodology", status: "Complete", progress: 100 },
                    { id: 3, name: "Findings & Observations", status: "In Progress", progress: 80 },
                    { id: 4, name: "Risk Assessment", status: "In Progress", progress: 60 },
                    { id: 5, name: "Recommendations", status: "Not Started", progress: 0 },
                    { id: 6, name: "Conclusion", status: "Not Started", progress: 0 },
                  ].map((section) => (
                    <div key={section.id} className="space-y-2 group hover:bg-slate-50 p-3 rounded-lg transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-blue-600 group-hover:text-blue-700 transition-colors" />
                          <span className="font-medium text-slate-700">{section.name}</span>
                        </div>
                        <Badge
                          variant={
                            section.status === "Complete"
                              ? "outline"
                              : section.status === "In Progress"
                                ? "secondary"
                                : "default"
                          }
                          className={cn(
                            "transition-all duration-200",
                            section.status === "Complete" && "bg-green-50 text-green-700 border-green-200",
                            section.status === "In Progress" && "bg-blue-50 text-blue-700",
                            section.status === "Not Started" && "bg-slate-50 text-slate-700"
                          )}
                        >
                          {section.status}
                        </Badge>
                      </div>
                      <GradientProgress 
                        value={section.progress} 
                        className={cn(
                          "h-2 transition-all duration-200",
                          section.progress === 0 && "opacity-50"
                        )}
                      />
                    </div>
                  ))}
                </div>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-slate-800">Posture Sections</h3>
                  {[
                    { id: 1, name: "ISO 27001 Compliance", status: "Complete", progress: 100 },
                    { id: 2, name: "NIST Framework Alignment", status: "Complete", progress: 100 },
                    { id: 3, name: "CIS Controls Assessment", status: "In Progress", progress: 70 },
                    { id: 4, name: "SEBI Guidelines Compliance", status: "Not Started", progress: 0 },
                  ].map((section) => (
                    <div key={section.id} className="space-y-2 group hover:bg-slate-50 p-3 rounded-lg transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-blue-600 group-hover:text-blue-700 transition-colors" />
                          <span className="font-medium text-slate-700">{section.name}</span>
                        </div>
                        <Badge
                          variant={
                            section.status === "Complete"
                              ? "outline"
                              : section.status === "In Progress"
                                ? "secondary"
                                : "default"
                          }
                          className={cn(
                            "transition-all duration-200",
                            section.status === "Complete" && "bg-green-50 text-green-700 border-green-200",
                            section.status === "In Progress" && "bg-blue-50 text-blue-700",
                            section.status === "Not Started" && "bg-slate-50 text-slate-700"
                          )}
                        >
                          {section.status}
                        </Badge>
                      </div>
                      <GradientProgress 
                        value={section.progress} 
                        className={cn(
                          "h-2 transition-all duration-200",
                          section.progress === 0 && "opacity-50"
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="bg-gradient-to-r from-slate-50 to-slate-100 border-t p-6">
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transition-all duration-200">
                Generate Final Report
              </Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="reports" className="space-y-6">
            <TabsList className="bg-slate-100 p-1 rounded-lg">
              <TabsTrigger value="reports" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">
                Generated Reports
              </TabsTrigger>
              <TabsTrigger value="templates" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">
                Report Templates
              </TabsTrigger>
              <TabsTrigger value="sections" className="data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200">
                Edit Sections
              </TabsTrigger>
            </TabsList>
            <TabsContent value="reports">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                  <CardTitle className="text-2xl">Generated Reports</CardTitle>
                  <CardDescription className="text-slate-600">View and manage your generated audit reports</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        name: "Annual Financial Compliance Audit Report",
                        date: "April 15, 2025",
                        status: "Final",
                        size: "2.4 MB",
                      },
                      {
                        id: 2,
                        name: "IT Security Assessment Q1 2025",
                        date: "March 30, 2025",
                        status: "Draft",
                        size: "1.8 MB",
                      },
                      {
                        id: 3,
                        name: "Vendor Compliance Audit Report",
                        date: "February 22, 2025",
                        status: "Final",
                        size: "3.1 MB",
                      },
                    ].map((report) => (
                      <div 
                        key={report.id} 
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-all duration-200 group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                            <FileBarChart2 className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium text-slate-800">{report.name}</h3>
                            <div className="text-sm text-slate-500">
                              <span>Generated: {report.date}</span>
                              <span className="mx-2">•</span>
                              <span>{report.size}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={report.status === "Final" ? "outline" : "secondary"}
                            className={cn(
                              "flex items-center transition-all duration-200",
                              report.status === "Final" && "bg-green-50 text-green-700 border-green-200",
                              report.status === "Draft" && "bg-blue-50 text-blue-700"
                            )}
                          >
                            {report.status === "Final" && <CheckCircle className="h-3 w-3 mr-1" />}
                            {report.status}
                          </Badge>
                          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="hover:bg-slate-100">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="templates">
              {/* Report templates content */}
            </TabsContent>
            <TabsContent value="sections">
              {/* Edit sections content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

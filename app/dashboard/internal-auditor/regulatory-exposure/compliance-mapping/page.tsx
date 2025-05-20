import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus, CheckCircle, XCircle, AlertTriangle, ArrowRight } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ComplianceMappingPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Compliance Mapping</h1>
              <p className="text-muted-foreground mt-2 text-lg">Map regulatory requirements to controls and processes</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="h-11 px-6">
                <Download className="h-5 w-5 mr-2" />
                Export Mapping
              </Button>
              <Button className="h-11 px-6">
                <Plus className="h-5 w-5 mr-2" />
                New Mapping
              </Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-3 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input type="search" placeholder="Search compliance requirements..." className="pl-10 h-11 text-base" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[200px] h-11">
                <SelectValue placeholder="Framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Frameworks</SelectItem>
                <SelectItem value="iso">ISO 27001</SelectItem>
                <SelectItem value="nist">NIST</SelectItem>
                <SelectItem value="cis">CIS</SelectItem>
                <SelectItem value="sebi">SEBI</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" className="h-11 w-11">
              <Filter className="h-5 w-5" />
            </Button>
          </div>

          <Tabs defaultValue="all" className="space-y-6">
            <TabsList className="bg-white p-1 h-12">
              <TabsTrigger value="all" className="text-base px-6">All Requirements</TabsTrigger>
              <TabsTrigger value="mapped" className="text-base px-6">Mapped</TabsTrigger>
              <TabsTrigger value="unmapped" className="text-base px-6">Unmapped</TabsTrigger>
              <TabsTrigger value="gaps" className="text-base px-6">Gaps</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-6 mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle className="text-2xl">Compliance Requirements Mapping</CardTitle>
                  <CardDescription className="text-base">Mapping of regulatory requirements to internal controls</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        requirement: "A.9.2.3 Management of privileged access rights",
                        framework: "ISO 27001",
                        description:
                          "The allocation and use of privileged access rights shall be restricted and controlled",
                        mappedControls: [
                          "IAM-01: Privileged Access Management Policy",
                          "IAM-05: Access Review Process",
                        ],
                        status: "Mapped",
                        complianceStatus: "Compliant",
                      },
                      {
                        id: 2,
                        requirement:
                          "PR.AC-1: Identities and credentials are issued, managed, verified, revoked, and audited for authorized devices, users and processes",
                        framework: "NIST CSF",
                        description: "Identity management and access control processes",
                        mappedControls: ["IAM-02: Identity Lifecycle Management", "IAM-03: Authentication Controls"],
                        status: "Mapped",
                        complianceStatus: "Partially Compliant",
                      },
                      {
                        id: 3,
                        requirement: "CIS 5.1: Establish Secure Configurations",
                        framework: "CIS Controls",
                        description:
                          "Maintain documented security configuration standards for all authorized operating systems and software",
                        mappedControls: ["SEC-04: Configuration Management"],
                        status: "Mapped",
                        complianceStatus: "Non-Compliant",
                      },
                      {
                        id: 4,
                        requirement:
                          "SEBI Circular SEBI/HO/MIRSD/DOP/CIR/P/2019/110: Cyber Security & Cyber Resilience framework",
                        framework: "SEBI",
                        description: "Implementation of cyber security and cyber resilience framework",
                        mappedControls: [],
                        status: "Unmapped",
                        complianceStatus: "Unknown",
                      },
                      {
                        id: 5,
                        requirement: "A.12.4.1 Event logging",
                        framework: "ISO 27001",
                        description:
                          "Event logs recording user activities, exceptions, faults and information security events shall be produced, kept and regularly reviewed",
                        mappedControls: ["LOG-01: Logging and Monitoring Policy", "LOG-02: Log Review Process"],
                        status: "Mapped",
                        complianceStatus: "Compliant",
                      },
                    ].map((item) => (
                      <div key={item.id} className="border rounded-lg p-6 bg-white hover:shadow-md transition-shadow duration-200">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="px-3 py-1 text-sm">
                                {item.framework}
                              </Badge>
                              <h3 className="font-semibold text-lg">{item.requirement}</h3>
                            </div>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                          <div className="flex items-center mt-4 md:mt-0 space-x-2">
                            <Badge
                              variant={
                                item.complianceStatus === "Compliant"
                                  ? "outline"
                                  : item.complianceStatus === "Partially Compliant"
                                    ? "default"
                                    : item.complianceStatus === "Non-Compliant"
                                      ? "destructive"
                                      : "secondary"
                              }
                              className="flex items-center px-3 py-1 text-sm"
                            >
                              {item.complianceStatus === "Compliant" && <CheckCircle className="h-4 w-4 mr-1" />}
                              {item.complianceStatus === "Partially Compliant" && (
                                <AlertTriangle className="h-4 w-4 mr-1" />
                              )}
                              {item.complianceStatus === "Non-Compliant" && <XCircle className="h-4 w-4 mr-1" />}
                              {item.complianceStatus}
                            </Badge>
                          </div>
                        </div>

                        <div className="mt-6">
                          <p className="text-sm font-medium mb-3">Mapped Controls</p>
                          {item.mappedControls.length > 0 ? (
                            <div className="space-y-2">
                              {item.mappedControls.map((control, index) => (
                                <div key={index} className="flex items-center text-sm p-3 bg-slate-50 rounded-md hover:bg-slate-100 transition-colors duration-200">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  {control}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-sm p-3 bg-slate-50 rounded-md text-muted-foreground">
                              No controls mapped yet
                            </div>
                          )}
                        </div>

                        <div className="flex justify-end mt-6">
                          <Button variant="outline" size="sm" className="gap-2 hover:bg-slate-100">
                            View Details
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="mapped" className="mt-6">
              {/* Mapped requirements content */}
            </TabsContent>
            <TabsContent value="unmapped" className="mt-6">
              {/* Unmapped requirements content */}
            </TabsContent>
            <TabsContent value="gaps" className="mt-6">
              {/* Gaps content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

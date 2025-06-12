import { ComplianceMaturityRadarChart } from "@/components/radar-chart"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, XCircle, AlertCircle, FileText, Filter, ArrowUpDown } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function NISTAuditorPage() {
  // Radar chart data for NIST CSF domains
  const radarData = [
    { subject: "Identify", score: 70, fullMark: 100 },
    { subject: "Protect", score: 75, fullMark: 100 },
    { subject: "Detect", score: 60, fullMark: 100 },
    { subject: "Respond", score: 55, fullMark: 100 },
    { subject: "Recover", score: 50, fullMark: 100 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">NIST Cybersecurity Framework</h1>
          <p className="text-muted-foreground">Compliance with NIST CSF standards</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>View Assessment History</Button>
        </div>
      </div>

      {/* Dashboard Statistics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Overall Maturity</CardTitle>
            <div className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">65%</div>
            <p className="text-xs text-muted-foreground">+2.5% from last assessment</p>
            <Progress value={65} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliant</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">Controls fully implemented</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Observations</CardTitle>
            <AlertCircle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">Partial implementation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Non-Conformance</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">Controls not implemented</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Overall Maturity Score */}
        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Overall Maturity Score</CardTitle>
            <CardDescription>Radar view of NIST CSF domains</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ComplianceMaturityRadarChart 
                data={radarData}
              />
            </div>
          </CardContent>
        </Card>

        {/* Core Functions */}
        <Card>
          <CardHeader>
            <CardTitle>NIST CSF Core Functions</CardTitle>
            <CardDescription>Compliance status by core function</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  id: 1,
                  name: "Identify (ID)",
                  description: "Develop organizational understanding to manage cybersecurity risk",
                  compliance: 70,
                },
                {
                  id: 2,
                  name: "Protect (PR)",
                  description: "Develop and implement appropriate safeguards",
                  compliance: 75,
                },
                {
                  id: 3,
                  name: "Detect (DE)",
                  description: "Develop and implement activities to identify cybersecurity events",
                  compliance: 60,
                },
                {
                  id: 4,
                  name: "Respond (RS)",
                  description: "Develop and implement activities to take action regarding a cybersecurity incident",
                  compliance: 55,
                },
                {
                  id: 5,
                  name: "Recover (RC)",
                  description: "Develop and implement activities to maintain resilience and restore capabilities",
                  compliance: 50,
                },
              ].map((function_) => (
                <div key={function_.id} className="border rounded-md p-3">
                  <div className="flex items-center justify-between mb-1">
                    <div className="font-medium">{function_.name}</div>
                    <Badge
                      variant={
                        function_.compliance >= 70
                          ? "outline"
                          : function_.compliance >= 60
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {function_.compliance}%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-muted-foreground">{function_.description}</p>
                  </div>
                  <Progress value={function_.compliance} className="h-2 mt-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Findings Tabs */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Findings</CardTitle>
          <CardDescription>Audit Plan and Count of Findings</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="audit-plan">
            <TabsList>
              <TabsTrigger value="audit-plan">Audit Plan</TabsTrigger>
              <TabsTrigger value="count">Count of Findings</TabsTrigger>
              <TabsTrigger value="status">Status</TabsTrigger>
            </TabsList>
            
            <TabsContent value="audit-plan" className="space-y-4 mt-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Audit Date</TableHead>
                      <TableHead>Scope</TableHead>
                      <TableHead>Auditor</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>12 May 2023</TableCell>
                      <TableCell>NIST CSF v1.1 Full Assessment</TableCell>
                      <TableCell>Internal Audit Team</TableCell>
                      <TableCell><Badge>Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>18 Aug 2023</TableCell>
                      <TableCell>NIST CSF Identify Domain</TableCell>
                      <TableCell>External Consultant</TableCell>
                      <TableCell><Badge>Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>24 Nov 2023</TableCell>
                      <TableCell>NIST CSF Protect Domain</TableCell>
                      <TableCell>Internal Audit Team</TableCell>
                      <TableCell><Badge>Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>15 Feb 2024</TableCell>
                      <TableCell>NIST CSF Detect Domain</TableCell>
                      <TableCell>Internal Audit Team</TableCell>
                      <TableCell><Badge variant="outline">Scheduled</Badge></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="count" className="mt-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Severity</TableHead>
                      <TableHead>Total Findings</TableHead>
                      <TableHead>Open</TableHead>
                      <TableHead>In Progress</TableHead>
                      <TableHead>Closed</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>High</TableCell>
                      <TableCell>8</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Medium</TableCell>
                      <TableCell>24</TableCell>
                      <TableCell>5</TableCell>
                      <TableCell>9</TableCell>
                      <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Low</TableCell>
                      <TableCell>15</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>3</TableCell>
                      <TableCell>10</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="status" className="mt-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Status</TableHead>
                      <TableHead>Count</TableHead>
                      <TableHead>Percentage</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Open</TableCell>
                      <TableCell>10</TableCell>
                      <TableCell>21%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>In Progress</TableCell>
                      <TableCell>14</TableCell>
                      <TableCell>30%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Closed</TableCell>
                      <TableCell>23</TableCell>
                      <TableCell>49%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Findings View */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Findings View</CardTitle>
              <CardDescription>Details of all audit findings</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-1" /> Filter
              </Button>
              <Button variant="outline" size="sm">
                <ArrowUpDown className="h-4 w-4 mr-1" /> Sort
              </Button>
              <Button size="sm">
                <FileText className="h-4 w-4 mr-1" /> Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Finding</TableHead>
                  <TableHead>Control Domain</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>NIST-01</TableCell>
                  <TableCell>Incomplete asset inventory</TableCell>
                  <TableCell>ID.AM</TableCell>
                  <TableCell><Badge variant="destructive">High</Badge></TableCell>
                  <TableCell>30 May 2024</TableCell>
                  <TableCell><Badge variant="outline">In Progress</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>NIST-02</TableCell>
                  <TableCell>Inadequate access controls</TableCell>
                  <TableCell>PR.AC</TableCell>
                  <TableCell><Badge variant="destructive">High</Badge></TableCell>
                  <TableCell>15 Jun 2024</TableCell>
                  <TableCell><Badge variant="outline">Open</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>NIST-03</TableCell>
                  <TableCell>Missing security awareness training</TableCell>
                  <TableCell>PR.AT</TableCell>
                  <TableCell><Badge>Medium</Badge></TableCell>
                  <TableCell>22 Apr 2024</TableCell>
                  <TableCell><Badge variant="secondary">Closed</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>NIST-04</TableCell>
                  <TableCell>Incomplete data security policies</TableCell>
                  <TableCell>PR.DS</TableCell>
                  <TableCell><Badge>Medium</Badge></TableCell>
                  <TableCell>10 Jul 2024</TableCell>
                  <TableCell><Badge variant="outline">In Progress</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>NIST-05</TableCell>
                  <TableCell>Insufficient monitoring capabilities</TableCell>
                  <TableCell>DE.CM</TableCell>
                  <TableCell><Badge variant="destructive">High</Badge></TableCell>
                  <TableCell>05 Aug 2024</TableCell>
                  <TableCell><Badge variant="outline">Open</Badge></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

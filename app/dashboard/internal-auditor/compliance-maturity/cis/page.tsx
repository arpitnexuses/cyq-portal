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

export default function CISAuditorPage() {
  // Radar chart data for CIS domains
  const radarData = [
    { subject: "Basic CIS Controls", score: 85, fullMark: 100 },
    { subject: "Foundational CIS Controls", score: 70, fullMark: 100 },
    { subject: "Organizational CIS Controls", score: 62, fullMark: 100 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">CIS Controls</h1>
          <p className="text-muted-foreground">Center for Internet Security Controls compliance</p>
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
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+3.5% from last assessment</p>
            <Progress value={78} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliant</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">Controls fully implemented</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Observations</CardTitle>
            <AlertCircle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Partial implementation</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Non-Conformance</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Controls not implemented</p>
          </CardContent>
        </Card>
      </div>

      {/* Overall Maturity Score */}
      <Card>
        <CardHeader>
          <CardTitle>Overall Maturity Score</CardTitle>
          <CardDescription>Radar view of CIS security domains</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ComplianceMaturityRadarChart 
              data={radarData}
            />
          </div>
        </CardContent>
      </Card>

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
                      <TableCell>10 Mar 2023</TableCell>
                      <TableCell>CIS Controls v8.0 Full Assessment</TableCell>
                      <TableCell>Internal Audit Team</TableCell>
                      <TableCell><Badge>Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>22 Jun 2023</TableCell>
                      <TableCell>Basic CIS Controls (IG1)</TableCell>
                      <TableCell>External Consultant</TableCell>
                      <TableCell><Badge>Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>15 Sep 2023</TableCell>
                      <TableCell>Foundational CIS Controls (IG2)</TableCell>
                      <TableCell>Internal Audit Team</TableCell>
                      <TableCell><Badge>Completed</Badge></TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>05 Jan 2024</TableCell>
                      <TableCell>Organizational CIS Controls (IG3)</TableCell>
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
                      <TableCell>6</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell>3</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Medium</TableCell>
                      <TableCell>18</TableCell>
                      <TableCell>4</TableCell>
                      <TableCell>6</TableCell>
                      <TableCell>8</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Low</TableCell>
                      <TableCell>12</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>8</TableCell>
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
                      <TableCell>8</TableCell>
                      <TableCell>22%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>In Progress</TableCell>
                      <TableCell>9</TableCell>
                      <TableCell>25%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Closed</TableCell>
                      <TableCell>19</TableCell>
                      <TableCell>53%</TableCell>
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
                  <TableHead>Control/Domain</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Timeline</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>CIS-01</TableCell>
                  <TableCell>Incomplete hardware asset inventory</TableCell>
                  <TableCell>Control 1.1</TableCell>
                  <TableCell><Badge variant="destructive">High</Badge></TableCell>
                  <TableCell>15 Apr 2024</TableCell>
                  <TableCell><Badge variant="outline">In Progress</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CIS-02</TableCell>
                  <TableCell>Inadequate software asset inventory</TableCell>
                  <TableCell>Control 2.2</TableCell>
                  <TableCell><Badge variant="destructive">High</Badge></TableCell>
                  <TableCell>30 Apr 2024</TableCell>
                  <TableCell><Badge variant="outline">Open</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CIS-03</TableCell>
                  <TableCell>Missing data protection controls</TableCell>
                  <TableCell>Control 3.4</TableCell>
                  <TableCell><Badge>Medium</Badge></TableCell>
                  <TableCell>10 Mar 2024</TableCell>
                  <TableCell><Badge variant="secondary">Closed</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CIS-04</TableCell>
                  <TableCell>Incomplete secure configuration baseline</TableCell>
                  <TableCell>Control 4.1</TableCell>
                  <TableCell><Badge>Medium</Badge></TableCell>
                  <TableCell>25 May 2024</TableCell>
                  <TableCell><Badge variant="outline">In Progress</Badge></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CIS-05</TableCell>
                  <TableCell>Insufficient account monitoring</TableCell>
                  <TableCell>Control 5.3</TableCell>
                  <TableCell><Badge variant="destructive">High</Badge></TableCell>
                  <TableCell>20 Jun 2024</TableCell>
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

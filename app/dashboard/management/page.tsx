import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, BarChart3, FileText, Shield, AlertTriangle, Bug } from "lucide-react"
import Link from "next/link"

export default function ManagementDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Management Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Welcome, Executive</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Link href="/dashboard/management/compliance-maturity/iso-27001">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" /> ISO 27001 Compliance
              </CardTitle>
              <CardDescription>View ISO 27001 compliance maturity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">Overall compliance score</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/management/compliance-maturity/sebi">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Shield className="h-5 w-5 mr-2 text-primary" /> SEBI Compliance
              </CardTitle>
              <CardDescription>View SEBI compliance maturity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">82%</div>
              <p className="text-xs text-muted-foreground">Overall compliance score</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/management/gap-assessment">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" /> Gap Assessment
              </CardTitle>
              <CardDescription>Review security gap assessments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">Open assessment items</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/management/risks-treatment">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Activity className="h-5 w-5 mr-2 text-primary" /> Risks & Treatment
              </CardTitle>
              <CardDescription>Manage identified risks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">High priority risks</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/management/vulnerability-exposure">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-primary" /> Vulnerability Exposure
              </CardTitle>
              <CardDescription>Track system vulnerabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15</div>
              <p className="text-xs text-muted-foreground">Active vulnerabilities</p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/dashboard/management/threat-exposure">
          <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium flex items-center">
                <Bug className="h-5 w-5 mr-2 text-primary" /> Threat Exposure
              </CardTitle>
              <CardDescription>Monitor potential threats</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">Active threat alerts</p>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Compliance Summary</CardTitle>
            <CardDescription>Overall compliance across frameworks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">ISO 27001</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">SEBI</span>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">NIST</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">CIS</span>
                  <span className="text-sm font-medium">71%</span>
                </div>
                <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: '71%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Overview</CardTitle>
            <CardDescription>Distribution of identified risks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="space-y-1">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
                  <span className="text-2xl font-bold text-red-600">8</span>
                </div>
                <p className="text-sm font-medium">High</p>
              </div>
              <div className="space-y-1">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                  <span className="text-2xl font-bold text-yellow-600">14</span>
                </div>
                <p className="text-sm font-medium">Medium</p>
              </div>
              <div className="space-y-1">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <span className="text-2xl font-bold text-green-600">23</span>
                </div>
                <p className="text-sm font-medium">Low</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
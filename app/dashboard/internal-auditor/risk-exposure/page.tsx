import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { 
  Search, 
  Filter, 
  Download, 
  Plus, 
  ChevronRight, 
  AlertTriangle, 
  Shield, 
  RefreshCw, 
  Database, 
  Truck,
  Eye 
} from "lucide-react"

export default function RiskExposurePage() {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Risk Exposure</h1>
          <p className="text-muted-foreground">Identify, analyze, and manage organizational risks</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Risk
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search risks..." className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Risk Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Risks</CardTitle>
            <AlertTriangle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">68</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500">12 high</span>, <span className="text-amber-500">28 medium</span>, <span className="text-green-500">28 low</span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Mitigation</CardTitle>
            <Shield className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">41%</div>
            <div className="mt-2">
              <Progress value={41} className="h-2" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Trend</CardTitle>
            <RefreshCw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-500">↑ 8%</div>
            <p className="text-xs text-muted-foreground">Increased from last quarter</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Acceptance</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23%</div>
            <p className="text-xs text-muted-foreground">16 risks accepted with conditions</p>
          </CardContent>
        </Card>
      </div>

      {/* Risk Categories */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Risk Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/dashboard/internal-auditor/risk-exposure/regulatory-risks">
            <Card className="hover:bg-slate-100 cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-blue-600" />
                      <h3 className="font-medium">Regulatory Risks</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Risks related to regulatory compliance and legal requirements</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <Badge variant="destructive">5 High</Badge>
                      <Badge variant="default">7 Medium</Badge>
                      <Badge variant="secondary">8 Low</Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/internal-auditor/risk-exposure/compliance-risks">
            <Card className="hover:bg-slate-100 cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-indigo-600" />
                      <h3 className="font-medium">Compliance Risks</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Risks related to internal policy compliance and standards</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <Badge variant="destructive">2 High</Badge>
                      <Badge variant="default">4 Medium</Badge>
                      <Badge variant="secondary">6 Low</Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/internal-auditor/risk-exposure/cyber-risks">
            <Card className="hover:bg-slate-100 cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <h3 className="font-medium">Cyber Risks</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Risks related to cybersecurity threats and vulnerabilities</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <Badge variant="destructive">3 High</Badge>
                      <Badge variant="default">8 Medium</Badge>
                      <Badge variant="secondary">5 Low</Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/internal-auditor/risk-exposure/business-continuity">
            <Card className="hover:bg-slate-100 cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <RefreshCw className="h-5 w-5 text-green-600" />
                      <h3 className="font-medium">Business Continuity</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Risks related to business continuity and disaster recovery</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <Badge variant="destructive">1 High</Badge>
                      <Badge variant="default">3 Medium</Badge>
                      <Badge variant="secondary">4 Low</Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/internal-auditor/risk-exposure/data-breach">
            <Card className="hover:bg-slate-100 cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Database className="h-5 w-5 text-purple-600" />
                      <h3 className="font-medium">Data Breach</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Risks related to data privacy and unauthorized data access</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <Badge variant="destructive">4 High</Badge>
                      <Badge variant="default">5 Medium</Badge>
                      <Badge variant="secondary">3 Low</Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="/dashboard/internal-auditor/risk-exposure/supply-chain">
            <Card className="hover:bg-slate-100 cursor-pointer h-full">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-amber-600" />
                      <h3 className="font-medium">Supply Chain</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">Risks related to third-party vendors and supply chain</p>
                    <div className="flex items-center space-x-3 mt-3">
                      <Badge variant="destructive">2 High</Badge>
                      <Badge variant="default">4 Medium</Badge>
                      <Badge variant="secondary">2 Low</Badge>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <Link href="/dashboard/internal-auditor/risk-exposure/individual-risks">
          <Button className="w-full" variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            View Individual Risks
          </Button>
        </Link>
      </div>
    </div>
  )
} 
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Download, TrendingUp, BarChart3, Calendar, ArrowRight, Shield, Target, AlertTriangle, CheckCircle, Database, UserCircle, MonitorSmartphone, Server } from 'lucide-react'
import { Progress } from '@/components/ui/progress'
import { ComplianceMaturityRadarChart } from '@/components/radar-chart'

export default function PostureMaturityPage() {
  // Radar chart data for security posture domains
  const radarData = [
    { subject: "Data", score: 70, fullMark: 100 },
    { subject: "Identity", score: 76, fullMark: 100 },
    { subject: "Application", score: 62, fullMark: 100 },
    { subject: "Infrastructure", score: 68, fullMark: 100 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Posture Maturity</h1>
          <p className="text-muted-foreground mt-1">Security and compliance posture assessment</p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Report
          </Button>
          <Button>
            <TrendingUp className="h-4 w-4 mr-2" />
            View Historical Data
          </Button>
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
            <div className="text-2xl font-bold">3.4/5.0</div>
            <p className="text-xs text-muted-foreground">+0.3 from last assessment</p>
            <Progress value={68} className="h-2 mt-2" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Security Quotient</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78/100</div>
            <p className="text-xs text-muted-foreground">+6 above industry average</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Exposure</CardTitle>
            <AlertTriangle className="h-4 w-4 text-amber-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Medium</div>
            <p className="text-xs text-muted-foreground">8 risks requiring attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Gap</CardTitle>
            <Shield className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15%</div>
            <p className="text-xs text-muted-foreground">Across all frameworks</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="blueprint" className="space-y-6">
        <TabsList>
          <TabsTrigger value="blueprint">Blueprint</TabsTrigger>
          <TabsTrigger value="quotient">Quotient</TabsTrigger>
          <TabsTrigger value="trends">Trends</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        
        {/* Blueprint Tab */}
        <TabsContent value="blueprint" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Overall Maturity Score */}
            <Card>
              <CardHeader>
                <CardTitle>Security Posture Blueprint</CardTitle>
                <CardDescription>Radar view of security domains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ComplianceMaturityRadarChart data={radarData} />
                </div>
              </CardContent>
            </Card>

            {/* Blueprint Maturity Categories */}
            <Card>
              <CardHeader>
                <CardTitle>Domain Maturity</CardTitle>
                <CardDescription>Maturity across core security domains</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { 
                      id: 1, 
                      name: "Data", 
                      icon: Database,
                      level: 3.5, 
                      target: 4.0,
                      description: "Data management, protection, and governance capabilities"
                    },
                    { 
                      id: 2, 
                      name: "Identity", 
                      icon: UserCircle,
                      level: 3.8, 
                      target: 4.0,
                      description: "Identity management, authentication, and access control"
                    },
                    { 
                      id: 3, 
                      name: "Application", 
                      icon: MonitorSmartphone,
                      level: 3.1, 
                      target: 4.0,
                      description: "Application security, development, and maintenance"
                    },
                    { 
                      id: 4, 
                      name: "Infrastructure", 
                      icon: Server,
                      level: 3.4, 
                      target: 4.0,
                      description: "Infrastructure security, resilience, and management"
                    },
                  ].map((domain) => (
                    <div key={domain.id} className="border rounded-md p-3">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <domain.icon className="h-5 w-5 text-primary" />
                          <div className="font-medium">{domain.name}</div>
                        </div>
                        <Badge
                          variant={
                            domain.level >= 3.5
                              ? "outline"
                              : domain.level >= 3.0
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          Level {domain.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{domain.description}</p>
                      <Progress value={(domain.level / 5) * 100} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Blueprint Detailed Assessment */}
          <Card>
            <CardHeader>
              <CardTitle>Detailed Domain Assessment</CardTitle>
              <CardDescription>Detailed breakdown of blueprint domains</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg p-4 border">
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <Database className="h-5 w-5 text-primary" />
                    Data
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Controls</h4>
                      <ul className="space-y-1">
                        <li className="text-sm flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Data classification and handling procedures</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Encryption for data at rest and in transit</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                          <span>Data loss prevention implementation</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                          <span>Data retention and disposal processes</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Maturity Distribution</h4>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-1">
                        <span>Initial</span>
                        <span>Defined</span>
                        <span>Managed</span>
                        <span>Optimized</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full mb-4 relative">
                        <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-full" style={{ width: '70%' }} />
                        <div className="absolute inset-0 flex items-center justify-start">
                          <div className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white" style={{ marginLeft: '70%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg p-4 border">
                  <h3 className="text-lg font-medium mb-3 flex items-center gap-2">
                    <UserCircle className="h-5 w-5 text-primary" />
                    Identity
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Controls</h4>
                      <ul className="space-y-1">
                        <li className="text-sm flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Multi-factor authentication</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Identity lifecycle management</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                          <span>Privileged access management</span>
                        </li>
                        <li className="text-sm flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                          <span>Just-in-time access provisioning</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium mb-2">Maturity Distribution</h4>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mb-1">
                        <span>Initial</span>
                        <span>Defined</span>
                        <span>Managed</span>
                        <span>Optimized</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 rounded-full mb-4 relative">
                        <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-full" style={{ width: '76%' }} />
                        <div className="absolute inset-0 flex items-center justify-start">
                          <div className="h-4 w-4 rounded-full bg-blue-600 border-2 border-white" style={{ marginLeft: '76%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Quotient Tab */}
        <TabsContent value="quotient" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Quotient Assessment</CardTitle>
              <CardDescription>Quantitative measurement of security posture effectiveness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                  <h3 className="text-xl font-semibold text-blue-800 mb-2">Security Quotient Score</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold text-blue-600">78</span>
                    <span className="text-xl font-medium text-blue-400 mb-1">/100</span>
                  </div>
                  <p className="text-sm text-blue-700 mt-2">Overall security effectiveness score based on current controls and capabilities</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">Industry Benchmark</h3>
                  <div className="flex items-end gap-2">
                    <span className="text-5xl font-bold text-green-600">72</span>
                    <span className="text-xl font-medium text-green-400 mb-1">/100</span>
                  </div>
                  <p className="text-sm text-green-700 mt-2">Average security quotient score for your industry</p>
                </div>
              </div>
              
              <h3 className="text-lg font-medium mb-4">Quotient Components</h3>
              <div className="space-y-4">
                {[
                  { name: "Control Effectiveness", score: 82, description: "Effectiveness of security controls in place" },
                  { name: "Risk Exposure", score: 74, description: "Measurement of current risk exposure levels" },
                  { name: "Threat Detection", score: 68, description: "Capability to detect security threats" },
                  { name: "Response Readiness", score: 79, description: "Readiness to respond to security incidents" },
                  { name: "Compliance Coverage", score: 85, description: "Coverage of applicable compliance requirements" },
                ].map((component, index) => (
                  <div key={index} className="bg-white rounded-lg border p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{component.name}</h4>
                      <span className="text-sm font-bold">{component.score}/100</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{component.description}</p>
                    <div className="h-2 w-full bg-slate-100 rounded-full">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                        style={{ width: `${component.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comparative Analysis</CardTitle>
              <CardDescription>Comparison with industry peers and standards</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h3 className="font-medium mb-3">Industry Peer Comparison</h3>
                  <div className="space-y-3">
                    {[
                      { category: "Financial Services", yourScore: 78, avgScore: 72 },
                      { category: "Top Quartile", yourScore: 78, avgScore: 85 },
                      { category: "Similar Size Organizations", yourScore: 78, avgScore: 70 },
                    ].map((item, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{item.category}</span>
                          <span>Industry: {item.avgScore}</span>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full relative">
                          <div 
                            className="h-full rounded-full bg-blue-500"
                            style={{ width: `${item.yourScore}%` }}
                          />
                          <div className="absolute inset-0 flex items-center">
                            <div 
                              className="h-4 w-1 bg-amber-500" 
                              style={{ marginLeft: `${item.avgScore}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="trends" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Maturity Trends</CardTitle>
              <CardDescription>Historical maturity level trends</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-12 border rounded-lg bg-white">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Maturity trend charts would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommendations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Improvement Recommendations</CardTitle>
              <CardDescription>Suggested actions to improve maturity levels</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    domain: "Data",
                    recommendation: "Implement data loss prevention for cloud services",
                    impact: "High",
                    effort: "Medium",
                    priority: "Critical",
                  },
                  {
                    id: 2,
                    domain: "Identity",
                    recommendation: "Implement just-in-time privileged access",
                    impact: "High",
                    effort: "Medium",
                    priority: "High",
                  },
                  {
                    id: 3,
                    domain: "Application",
                    recommendation: "Enhance secure development lifecycle practices",
                    impact: "Medium",
                    effort: "Medium",
                    priority: "Medium",
                  },
                  {
                    id: 4,
                    domain: "Infrastructure",
                    recommendation: "Implement continuous vulnerability scanning",
                    impact: "High",
                    effort: "Low",
                    priority: "High",
                  },
                ].map((rec) => (
                  <div key={rec.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200 border">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {rec.domain}
                          </Badge>
                          <Badge
                            variant={
                              rec.priority === "Critical"
                                ? "destructive"
                                : rec.priority === "High"
                                  ? "default"
                                  : "secondary"
                            }
                            className="text-xs"
                          >
                            {rec.priority}
                          </Badge>
                        </div>
                        <p className="font-medium">{rec.recommendation}</p>
                        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <span>Impact:</span>
                            <span
                              className={
                                rec.impact === "High"
                                  ? "text-blue-600 font-medium"
                                  : rec.impact === "Medium"
                                    ? "text-blue-500 font-medium"
                                    : "text-blue-400 font-medium"
                              }
                            >
                              {rec.impact}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>Effort:</span>
                            <span
                              className={
                                rec.effort === "Low"
                                  ? "text-green-600 font-medium"
                                  : rec.effort === "Medium"
                                    ? "text-amber-600 font-medium"
                                    : "text-red-600 font-medium"
                              }
                            >
                              {rec.effort}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 md:mt-0 whitespace-nowrap">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

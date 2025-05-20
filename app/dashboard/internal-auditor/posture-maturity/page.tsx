import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, BarChart3, Calendar, ArrowRight, Shield, Target, AlertTriangle, CheckCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function PostureMaturityPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">Posture Maturity</h1>
              <p className="text-muted-foreground mt-2 text-lg">Security and compliance posture assessment</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" className="h-11 px-6">
                <Download className="h-5 w-5 mr-2" />
                Export Report
              </Button>
              <Button className="h-11 px-6">
                <TrendingUp className="h-5 w-5 mr-2" />
                View Historical Data
              </Button>
            </div>
          </div>

          {/* Overall Maturity Score */}
          <Card className="mb-8 border-none shadow-lg">
            <CardHeader className="bg-white border-b">
              <CardTitle className="text-2xl">Overall Maturity Score</CardTitle>
              <CardDescription className="text-base">Based on the latest assessment across all frameworks</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-primary">3.4</div>
                  <div className="text-sm text-muted-foreground">out of 5.0</div>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm font-medium">Target: 4.0</span>
                </div>
              </div>
              <Progress value={68} className="h-3 mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { name: "ISO 27001", score: 3.8, color: "bg-blue-500" },
                  { name: "NIST CSF", score: 3.2, color: "bg-green-500" },
                  { name: "CIS Controls", score: 3.6, color: "bg-purple-500" },
                  { name: "SEBI Guidelines", score: 4.1, color: "bg-amber-500" },
                ].map((framework) => (
                  <div key={framework.name} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-medium text-muted-foreground">{framework.name}</div>
                      <Badge variant="outline" className="text-sm">
                        Level {framework.score}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`h-2 flex-1 rounded-full ${framework.color} bg-opacity-20`}>
                        <div
                          className={`h-full rounded-full ${framework.color}`}
                          style={{ width: `${(framework.score / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium">{((framework.score / 5) * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-white p-1 h-12">
              <TabsTrigger value="overview" className="text-base px-6">Overview</TabsTrigger>
              <TabsTrigger value="domains" className="text-base px-6">Security Domains</TabsTrigger>
              <TabsTrigger value="trends" className="text-base px-6">Maturity Trends</TabsTrigger>
              <TabsTrigger value="recommendations" className="text-base px-6">Recommendations</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-6 mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle className="text-2xl">Maturity Model Overview</CardTitle>
                  <CardDescription className="text-base">Current maturity levels across key security domains</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      { id: 1, name: "Governance & Risk Management", level: 3.7, target: 4.0 },
                      { id: 2, name: "Identity & Access Management", level: 3.9, target: 4.0 },
                      { id: 3, name: "Data Protection", level: 3.2, target: 4.0 },
                      { id: 4, name: "Security Operations", level: 3.0, target: 4.0 },
                      { id: 5, name: "Incident Management", level: 3.5, target: 4.0 },
                      { id: 6, name: "Business Continuity", level: 3.3, target: 4.0 },
                      { id: 7, name: "Compliance Management", level: 4.0, target: 4.0 },
                      { id: 8, name: "Third-Party Risk Management", level: 2.8, target: 4.0 },
                    ].map((domain) => (
                      <div key={domain.id} className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-primary" />
                            <span className="font-medium">{domain.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className="px-3 py-1">
                              Level {domain.level}
                            </Badge>
                            <Badge variant="secondary" className="px-3 py-1">
                              Target {domain.target}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-blue-100 to-blue-50">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500"
                              style={{ width: `${(domain.level / 5) * 100}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium min-w-[3rem] text-right text-blue-600">
                            {((domain.level / 5) * 100).toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="domains" className="space-y-6 mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle className="text-2xl">Security Domains</CardTitle>
                  <CardDescription className="text-base">Detailed assessment of security domains</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        name: "Identity & Access Management",
                        level: 3.9,
                        strengths: [
                          "Strong authentication controls",
                          "Regular access reviews",
                          "Privileged access management",
                        ],
                        weaknesses: ["Incomplete identity lifecycle management", "Manual provisioning processes"],
                      },
                      {
                        id: 2,
                        name: "Data Protection",
                        level: 3.2,
                        strengths: ["Data classification implemented", "Encryption for sensitive data"],
                        weaknesses: [
                          "Incomplete DLP implementation",
                          "Limited data retention controls",
                          "Manual data discovery",
                        ],
                      },
                    ].map((domain) => (
                      <div key={domain.id} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <Shield className="h-5 w-5 text-primary" />
                              <h3 className="text-lg font-semibold">{domain.name}</h3>
                            </div>
                            <Badge variant="outline" className="px-3 py-1">
                              Maturity Level {domain.level}
                            </Badge>
                          </div>
                          <Button variant="outline" size="sm" className="mt-4 md:mt-0">
                            View Details
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-slate-50 rounded-lg p-4">
                            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              Strengths
                            </h4>
                            <ul className="space-y-2">
                              {domain.strengths.map((strength, index) => (
                                <li key={index} className="text-sm flex items-start gap-2">
                                  <span className="text-green-500 mt-1">•</span>
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-slate-50 rounded-lg p-4">
                            <h4 className="text-sm font-medium mb-3 flex items-center gap-2">
                              <AlertTriangle className="h-4 w-4 text-amber-500" />
                              Improvement Areas
                            </h4>
                            <ul className="space-y-2">
                              {domain.weaknesses.map((weakness, index) => (
                                <li key={index} className="text-sm flex items-start gap-2">
                                  <span className="text-amber-500 mt-1">•</span>
                                  {weakness}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="trends" className="mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle className="text-2xl">Maturity Trends</CardTitle>
                  <CardDescription className="text-base">Historical maturity level trends</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-center p-12 border rounded-lg bg-white">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Maturity trend charts would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recommendations" className="mt-6">
              <Card className="border-none shadow-lg">
                <CardHeader className="bg-white border-b">
                  <CardTitle className="text-2xl">Improvement Recommendations</CardTitle>
                  <CardDescription className="text-base">Suggested actions to improve maturity levels</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        domain: "Third-Party Risk Management",
                        recommendation: "Implement automated vendor risk assessment process",
                        impact: "High",
                        effort: "Medium",
                        timeline: "Q3 2025",
                      },
                      {
                        id: 2,
                        domain: "Data Protection",
                        recommendation: "Deploy data loss prevention (DLP) solution",
                        impact: "High",
                        effort: "High",
                        timeline: "Q4 2025",
                      },
                      {
                        id: 3,
                        domain: "Security Operations",
                        recommendation: "Enhance security monitoring capabilities",
                        impact: "Medium",
                        effort: "Medium",
                        timeline: "Q3 2025",
                      },
                    ].map((item) => (
                      <div key={item.id} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                        <div className="flex items-start justify-between">
                          <div className="space-y-1">
                            <div className="font-medium text-lg">{item.recommendation}</div>
                            <div className="text-sm text-muted-foreground">Domain: {item.domain}</div>
                            <div className="flex items-center gap-4 mt-2">
                              <Badge variant="outline" className="px-3 py-1">
                                Impact: {item.impact}
                              </Badge>
                              <Badge variant="outline" className="px-3 py-1">
                                Effort: {item.effort}
                              </Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4 mr-2" />
                                {item.timeline}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-2">
                            Details
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

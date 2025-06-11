"use client"

import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  Edit, 
  Mail, 
  Phone,
  MapPin,
  Shield,
  Award,
  Users, 
  Clock,
  ExternalLink,
  Share2,
  TrendingUp,
  CheckCircle,
  Globe,
  Bell,
  Zap
} from "lucide-react"

export default function MyProfilePage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          {/* Profile Info Card */}
          <div className="rounded-xl overflow-hidden mb-6 shadow-sm">
            {/* Gradient Background */}
            <div className="bg-gradient-to-r from-blue-600/90 via-indigo-500/80 to-purple-600/90 h-40 relative">
              <div className="absolute top-6 right-6 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-orange-500 flex items-center justify-center text-white font-medium text-sm">26</div>
                <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium text-sm">6</div>
                <div className="h-8 w-8 rounded-full bg-gray-900 flex items-center justify-center text-white font-medium text-sm">12</div>
              </div>
            </div>
            
            {/* Profile Content */}
            <div className="bg-white p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Image - Positioned to overlap with the gradient */}
                <div className="relative -mt-24">
                  <div className="relative">
                    <Avatar className="h-48 w-48 rounded-xl border-4 border-white shadow-md">
                      <AvatarImage src="/abstract-user-avatar.png" alt="User avatar" className="object-cover" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Button size="sm" className="absolute bottom-3 right-3 rounded-full p-2 bg-primary text-white hover:bg-primary/90">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                {/* Profile Info */}
                <div className="flex-1 mt-2 md:mt-0">
                  <div className="flex flex-col md:flex-row justify-between">
                    {/* Left side with name and info */}
                    <div>
                      <div className="flex items-center gap-2">
                        <h1 className="text-2xl font-bold">John Doe</h1>
                        <Badge className="bg-blue-600 px-2 flex items-center gap-1">
                          <Zap className="h-3 w-3" />
                          PRO
                        </Badge>
                      </div>
                      <p className="text-gray-500 mt-1">Senior Security Analyst</p>
                      
                      <div className="mt-3 space-y-1.5">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          <span className="text-sm">j***@company.com</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          <span className="text-sm">+1 ***-***-1234</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Users className="h-4 w-4" />
                          <span className="text-sm">Cybersecurity Department</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <div className="flex items-center gap-2">
                            <span className="text-lg mr-1">🇺🇸</span>
                            <span className="text-sm">United States</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right side with buttons */}
                    <div className="mt-4 md:mt-0 space-y-2">
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                        <Edit className="h-4 w-4" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                        <Share2 className="h-4 w-4" />
                        Share to LinkedIn
                      </Button>
                      <Button variant="outline" size="sm" className="w-full flex items-center justify-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Intranet Portal
                      </Button>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-blue-600">2,985</p>
                      <p className="text-sm text-gray-500">Compliance Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">132</p>
                      <p className="text-sm text-gray-500">Audits Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-purple-600">548</p>
                      <p className="text-sm text-gray-500">Active Hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs for Profile and Notifications */}
          <Tabs defaultValue="profile" className="mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="notifications">
                <div className="flex items-center gap-1.5">
                  <Bell className="h-4 w-4" />
                  <span>Notifications</span>
                  <Badge className="ml-1 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs p-0">3</Badge>
                </div>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile">
              {/* Badges & Achievements */}
              <Card className="shadow-sm mb-6">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    <CardTitle className="text-xl">Badges & Achievements</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-4 bg-blue-50 rounded-lg">
                      <div className="p-3 bg-blue-100 rounded-full mb-3">
                        <Shield className="h-6 w-6 text-blue-600" />
                      </div>
                      <h3 className="font-medium text-center">Security Expert</h3>
                      <p className="text-sm text-gray-500 text-center">ISO 27001 Certified</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                      <div className="p-3 bg-green-100 rounded-full mb-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="font-medium text-center">Compliance Leader</h3>
                      <p className="text-sm text-gray-500 text-center">100% Audit Success</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-purple-50 rounded-lg">
                      <div className="p-3 bg-purple-100 rounded-full mb-3">
                        <Users className="h-6 w-6 text-purple-600" />
                      </div>
                      <h3 className="font-medium text-center">Team Player</h3>
                      <p className="text-sm text-gray-500 text-center">Cross-functional</p>
                    </div>
                    
                    <div className="flex flex-col items-center p-4 bg-orange-50 rounded-lg">
                      <div className="p-3 bg-orange-100 rounded-full mb-3">
                        <TrendingUp className="h-6 w-6 text-orange-600" />
                      </div>
                      <h3 className="font-medium text-center">Risk Mitigator</h3>
                      <p className="text-sm text-gray-500 text-center">50+ Risks Resolved</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Two column layout for remaining content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column - Compliance Frameworks */}
                <div>
                  <Card className="shadow-sm h-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl">Compliance Frameworks</CardTitle>
                      <p className="text-sm text-gray-500">Your certification and compliance status</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center h-8 w-8">
                            <span className="text-lg">🇺🇸</span>
                          </div>
                          <div>
                            <h3 className="font-medium">ISO 27001</h3>
                            <p className="text-sm text-gray-500">Information Security</p>
                          </div>
                        </div>
                        <Badge className="bg-black text-white rounded-md px-3">Certified</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center h-8 w-8">
                            <span className="text-lg">🇮🇳</span>
                          </div>
                          <div>
                            <h3 className="font-medium">SEBI</h3>
                            <p className="text-sm text-gray-500">Securities Regulation</p>
                          </div>
                        </div>
                        <Badge className="bg-yellow-500 text-white rounded-md px-3">In Progress</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center h-8 w-8">
                            <span className="text-lg">🇺🇸</span>
                          </div>
                          <div>
                            <h3 className="font-medium">NIST</h3>
                            <p className="text-sm text-gray-500">Cybersecurity Framework</p>
                          </div>
                        </div>
                        <Badge className="bg-black text-white rounded-md px-3">Certified</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center h-8 w-8">
                            <Globe className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-medium">CIS Controls</h3>
                            <p className="text-sm text-gray-500">Critical Security Controls</p>
                          </div>
                        </div>
                        <Badge className="bg-gray-400 text-white rounded-md px-3">Pending</Badge>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Right Column - Activity & Associations */}
                <div>
                  <Card className="shadow-sm h-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl">Activity & Associations</CardTitle>
                      <p className="text-sm text-gray-500">Your engagement and network statistics</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {/* Active Users Network */}
                        <div>
                          <h3 className="text-sm font-medium flex items-center mb-3">
                            <Users className="h-4 w-4 mr-2" />
                            Active Users Network
                          </h3>
                          <div className="bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-between">
                            <span className="text-sm">Connected Users</span>
                            <span className="text-blue-600 font-bold text-xl">247</span>
                          </div>
                        </div>
                        
                        {/* Active Hours */}
                        <div>
                          <h3 className="text-sm font-medium flex items-center mb-3">
                            <Clock className="h-4 w-4 mr-2" />
                            Active Hours
                          </h3>
                          <div className="space-y-2">
                            <div className="bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-between">
                              <span className="text-sm">Individual (This Month)</span>
                              <span className="text-green-600 font-bold text-xl">156h</span>
                            </div>
                            <div className="bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-between">
                              <span className="text-sm">Team Average</span>
                              <span className="text-purple-600 font-bold text-xl">142h</span>
                            </div>
                            <div className="bg-white border border-gray-100 p-3 rounded-lg flex items-center justify-between">
                              <span className="text-sm">Overall Department</span>
                              <span className="text-orange-600 font-bold text-xl">1,248h</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 border border-gray-100 rounded-lg bg-white">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-red-100 rounded-full">
                          <Shield className="h-5 w-5 text-red-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Security Alert</h3>
                            <span className="text-xs text-gray-500">1 hour ago</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">New compliance requirement added to ISO 27001 framework.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-100 rounded-lg bg-white">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-blue-100 rounded-full">
                          <Users className="h-5 w-5 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Team Update</h3>
                            <span className="text-xs text-gray-500">Yesterday</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">You've been added to the Cybersecurity Assessment Team.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-100 rounded-lg bg-white">
                      <div className="flex items-start gap-3">
                        <div className="p-2 bg-green-100 rounded-full">
                          <Award className="h-5 w-5 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Achievement Unlocked</h3>
                            <span className="text-xs text-gray-500">3 days ago</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">Congratulations! You've earned the "Risk Mitigator" badge.</p>
                        </div>
                      </div>
                    </div>
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

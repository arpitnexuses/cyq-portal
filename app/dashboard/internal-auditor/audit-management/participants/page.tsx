"use client"

import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Download, 
  Mail, 
  Plus, 
  Search, 
  UserPlus, 
  Edit, 
  Trash2, 
  Upload,
  Flag,
  Building,
  Mail as MailIcon,
  Phone,
  BriefcaseBusiness,
  CheckCircle,
  ChevronDown
} from "lucide-react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ParticipantsPage() {
  const [showAddUserForm, setShowAddUserForm] = useState(false)
  const [approvalMethod, setApprovalMethod] = useState("")

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Participants</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Upload Users
              </Button>
              <Button size="sm">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Participant
              </Button>
            </div>
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Participants</TabsTrigger>
              <TabsTrigger value="approved">Approved Auditors</TabsTrigger>
              <TabsTrigger value="external">External Participants</TabsTrigger>
            </TabsList>
            
            {/* Active Participants Tab */}
            <TabsContent value="active" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Active Participants</CardTitle>
                      <CardDescription>Summary of all active participants</CardDescription>
                    </div>
                    <div className="relative w-64">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search participants..."
                        className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>S. No.</TableHead>
                        <TableHead>Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Flag</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact No.</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          name: "Alex Johnson",
                          photo: "/avatars/01.png",
                          country: "United States",
                          flag: "🇺🇸",
                          department: "Internal Audit",
                          email: "alex.j@example.com",
                          phone: "+1 555-123-4567",
                          status: "Active",
                          auditCount: 12,
                        },
                        {
                          id: 2,
                          name: "Sarah Williams",
                          photo: "/avatars/02.png",
                          country: "Canada",
                          flag: "🇨🇦",
                          department: "Finance",
                          email: "sarah.w@example.com",
                          phone: "+1 555-987-6543",
                          status: "Active",
                          auditCount: 8,
                        },
                        {
                          id: 3,
                          name: "Michael Chen",
                          photo: "/avatars/03.png",
                          country: "Singapore",
                          flag: "🇸🇬",
                          department: "Internal Audit",
                          email: "michael.c@example.com",
                          phone: "+65 9123 4567",
                          status: "Inactive",
                          auditCount: 15,
                        },
                      ].map((participant) => (
                        <TableRow key={participant.id}>
                          <TableCell>{participant.id}</TableCell>
                          <TableCell>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={participant.photo} alt={participant.name} />
                              <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </TableCell>
                          <TableCell className="font-medium">{participant.name}</TableCell>
                          <TableCell>{participant.country}</TableCell>
                          <TableCell>{participant.flag}</TableCell>
                          <TableCell>{participant.department}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {participant.email.substring(0, 3)}***@***{participant.email.split('@')[1].substring(0, 3)}...
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {participant.phone.substring(0, 5)}******
                          </TableCell>
                          <TableCell>
                            <Badge variant={participant.status === "Active" ? "default" : "secondary"}>
                              {participant.status}
                            </Badge>
                            <div className="text-xs text-muted-foreground mt-1">
                              {participant.auditCount} audits assigned
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-3.5 w-3.5" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-3.5 w-3.5" />
                                <span className="sr-only">Delete</span>
                              </Button>
                              <Button variant="outline" size="sm">View</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                  <div className="text-sm text-muted-foreground">
                    Showing <strong>3</strong> of <strong>3</strong> participants
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Submit for Approval</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Approval Method</DialogTitle>
                          <DialogDescription>
                            Select how you want to approve this submission
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <Select onValueChange={(value) => setApprovalMethod(value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select approval method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="self">I'm Authorized</SelectItem>
                              <SelectItem value="upload">Upload Approval</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          {approvalMethod === "upload" && (
                            <div className="mt-4 border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                              <p className="text-sm text-muted-foreground mb-1">Drag and drop your approval document here</p>
                              <p className="text-xs text-muted-foreground">Supports PDF, DOCX (Max 10MB)</p>
                              <Button variant="outline" size="sm" className="mt-4">
                                Select File
                              </Button>
                            </div>
                          )}
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button>Confirm</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* Approved Auditors Tab */}
            <TabsContent value="approved" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>Approved Auditors</CardTitle>
                      <CardDescription>Summary of all approved auditors</CardDescription>
                    </div>
                    <div className="relative w-64">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search auditors..."
                        className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>S. No.</TableHead>
                        <TableHead>Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Flag</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact No.</TableHead>
                        <TableHead>Competence</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          name: "David Miller",
                          photo: "/avatars/04.png",
                          country: "United Kingdom",
                          flag: "🇬🇧",
                          department: "Audit",
                          email: "david.m@example.com",
                          phone: "+44 20 1234 5678",
                          competence: "Lead Auditor",
                          status: "Active",
                          auditCount: 24,
                        },
                        {
                          id: 2,
                          name: "Lisa Garcia",
                          photo: "/avatars/05.png",
                          country: "Spain",
                          flag: "🇪🇸",
                          department: "IT Security",
                          email: "lisa.g@example.com",
                          phone: "+34 612 345 678",
                          competence: "IT Auditor",
                          status: "Active",
                          auditCount: 16,
                        }
                      ].map((auditor) => (
                        <TableRow key={auditor.id}>
                          <TableCell>{auditor.id}</TableCell>
                          <TableCell>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={auditor.photo} alt={auditor.name} />
                              <AvatarFallback>{auditor.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </TableCell>
                          <TableCell className="font-medium">{auditor.name}</TableCell>
                          <TableCell>{auditor.country}</TableCell>
                          <TableCell>{auditor.flag}</TableCell>
                          <TableCell>{auditor.department}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {auditor.email.substring(0, 3)}***@***{auditor.email.split('@')[1].substring(0, 3)}...
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {auditor.phone.substring(0, 5)}******
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline">{auditor.competence}</Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={auditor.status === "Active" ? "default" : "secondary"}>
                              {auditor.status}
                            </Badge>
                            <div className="text-xs text-muted-foreground mt-1">
                              {auditor.auditCount} audits assigned
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-3.5 w-3.5" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-3.5 w-3.5" />
                                <span className="sr-only">Delete</span>
                              </Button>
                              <Button variant="outline" size="sm">View</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                  <div className="text-sm text-muted-foreground">
                    Showing <strong>2</strong> of <strong>2</strong> auditors
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Submit for Approval</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Approval Method</DialogTitle>
                          <DialogDescription>
                            Select how you want to approve this submission
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <Select onValueChange={(value) => setApprovalMethod(value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select approval method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="self">I'm Authorized</SelectItem>
                              <SelectItem value="upload">Upload Approval</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          {approvalMethod === "upload" && (
                            <div className="mt-4 border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                              <p className="text-sm text-muted-foreground mb-1">Drag and drop your approval document here</p>
                              <p className="text-xs text-muted-foreground">Supports PDF, DOCX (Max 10MB)</p>
                              <Button variant="outline" size="sm" className="mt-4">
                                Select File
                              </Button>
                            </div>
                          )}
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button>Confirm</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
            
            {/* External Participants Tab */}
            <TabsContent value="external" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>External Participants</CardTitle>
                      <CardDescription>Summary of all external participants</CardDescription>
                    </div>
                    <div className="relative w-64">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search external participants..."
                        className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>S. No.</TableHead>
                        <TableHead>Photo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Country</TableHead>
                        <TableHead>Flag</TableHead>
                        <TableHead>Department</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact No.</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        {
                          id: 1,
                          name: "Jennifer Adams",
                          photo: "/avatars/06.png",
                          country: "Australia",
                          flag: "🇦🇺",
                          department: "External Audit",
                          email: "jennifer.a@externalfirm.com",
                          phone: "+61 2 1234 5678",
                          status: "Active",
                          auditCount: 5,
                        },
                        {
                          id: 2,
                          name: "Thomas Brown",
                          photo: "/avatars/07.png",
                          country: "Germany",
                          flag: "🇩🇪",
                          department: "Security Consultancy",
                          email: "thomas.b@securityconsult.com",
                          phone: "+49 30 1234 5678",
                          status: "Active",
                          auditCount: 3,
                        }
                      ].map((participant) => (
                        <TableRow key={participant.id}>
                          <TableCell>{participant.id}</TableCell>
                          <TableCell>
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={participant.photo} alt={participant.name} />
                              <AvatarFallback>{participant.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                          </TableCell>
                          <TableCell className="font-medium">{participant.name}</TableCell>
                          <TableCell>{participant.country}</TableCell>
                          <TableCell>{participant.flag}</TableCell>
                          <TableCell>{participant.department}</TableCell>
                          <TableCell className="text-muted-foreground">
                            {participant.email.substring(0, 3)}***@***{participant.email.split('@')[1].substring(0, 3)}...
                          </TableCell>
                          <TableCell className="text-muted-foreground">
                            {participant.phone.substring(0, 5)}******
                          </TableCell>
                          <TableCell>
                            <Badge variant={participant.status === "Active" ? "default" : "secondary"}>
                              {participant.status}
                            </Badge>
                            <div className="text-xs text-muted-foreground mt-1">
                              {participant.auditCount} audits assigned
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-3.5 w-3.5" />
                                <span className="sr-only">Edit</span>
                              </Button>
                              <Button variant="outline" size="sm">
                                <Trash2 className="h-3.5 w-3.5" />
                                <span className="sr-only">Delete</span>
                              </Button>
                              <Button variant="outline" size="sm">View</Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
                <CardFooter className="flex justify-between border-t px-6 py-4">
                  <div className="text-sm text-muted-foreground">
                    Showing <strong>2</strong> of <strong>2</strong> external participants
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline">Save as Draft</Button>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button>Submit for Approval</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Approval Method</DialogTitle>
                          <DialogDescription>
                            Select how you want to approve this submission
                          </DialogDescription>
                        </DialogHeader>
                        <div className="py-4">
                          <Select onValueChange={(value) => setApprovalMethod(value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select approval method" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="self">I'm Authorized</SelectItem>
                              <SelectItem value="upload">Upload Approval</SelectItem>
                            </SelectContent>
                          </Select>
                          
                          {approvalMethod === "upload" && (
                            <div className="mt-4 border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                              <p className="text-sm text-muted-foreground mb-1">Drag and drop your approval document here</p>
                              <p className="text-xs text-muted-foreground">Supports PDF, DOCX (Max 10MB)</p>
                              <Button variant="outline" size="sm" className="mt-4">
                                Select File
                              </Button>
                            </div>
                          )}
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button>Confirm</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

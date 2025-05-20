import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Paperclip, Send } from "lucide-react"

export default function CreateRequestPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold tracking-tight">Create Request</h1>
        <Button variant="outline">Cancel</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>New Request</CardTitle>
          <CardDescription>Submit a new request for assistance or information</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="request-type">Request Type</Label>
            <Select>
              <SelectTrigger id="request-type">
                <SelectValue placeholder="Select request type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="access">Access Request</SelectItem>
                <SelectItem value="information">Information Request</SelectItem>
                <SelectItem value="extension">Extension Request</SelectItem>
                <SelectItem value="clarification">Clarification Request</SelectItem>
                <SelectItem value="resource">Resource Request</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="priority">Priority</Label>
            <Select>
              <SelectTrigger id="priority">
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="urgent">Urgent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="related-audit">Related Audit (Optional)</Label>
            <Select>
              <SelectTrigger id="related-audit">
                <SelectValue placeholder="Select related audit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="financial">Annual Financial Compliance</SelectItem>
                <SelectItem value="it-security">IT Security Assessment</SelectItem>
                <SelectItem value="operational">Operational Process Review</SelectItem>
                <SelectItem value="vendor">Vendor Compliance Audit</SelectItem>
                <SelectItem value="none">Not Related to an Audit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" placeholder="Enter a clear subject for your request" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Provide a detailed description of your request"
              className="min-h-[150px]"
            />
          </div>

          <div className="space-y-2">
            <Label>Attachments (Optional)</Label>
            <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground mb-1">Drag and drop files here or click to browse</p>
              <p className="text-xs text-muted-foreground">Supports PDF, DOCX, XLSX, PNG, JPG (Max 10MB)</p>
              <Button variant="outline" size="sm" className="mt-4">
                <Paperclip className="h-4 w-4 mr-2" />
                Select Files
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="assignee">Assign To (Optional)</Label>
            <Select>
              <SelectTrigger id="assignee">
                <SelectValue placeholder="Select assignee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto-assign</SelectItem>
                <SelectItem value="alex">Alex Johnson</SelectItem>
                <SelectItem value="sarah">Sarah Williams</SelectItem>
                <SelectItem value="michael">Michael Chen</SelectItem>
                <SelectItem value="jessica">Jessica Lee</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Save as Draft</Button>
          <Button>
            <Send className="h-4 w-4 mr-2" />
            Submit Request
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}

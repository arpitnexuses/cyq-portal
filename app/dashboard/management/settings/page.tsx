"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Settings, Shield } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <Settings className="mr-2 h-6 w-6" />
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Password Security</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              Manage your password settings and enable two-factor authentication.
            </p>
            <Button variant="outline" className="w-full">
              <Shield className="mr-2 h-4 w-4" />
              Go to Password Security
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Activity Logs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4">
              View a log of recent activities and login attempts on your account.
            </p>
            <Button variant="outline" className="w-full">
              View Activity Logs
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 
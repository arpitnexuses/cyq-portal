"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock } from "lucide-react"

export default function PasswordSecurityPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Password & Security</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="mr-2 h-5 w-5" />
            Change Password
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Old Password</label>
            <Input 
              type="password" 
              placeholder="Enter your current password" 
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">New Password</label>
            <Input 
              type="password" 
              placeholder="Enter new password" 
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Confirm New Password</label>
            <Input 
              type="password" 
              placeholder="Confirm new password" 
            />
          </div>

          <Button className="mt-4">Change Password</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="mr-2 h-5 w-5" />
            Two-factor Authentication
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Add an extra layer of security to your account by enabling two-factor authentication.
          </p>
          <Button>Enable Two-factor Authentication</Button>
        </CardContent>
      </Card>
    </div>
  )
} 
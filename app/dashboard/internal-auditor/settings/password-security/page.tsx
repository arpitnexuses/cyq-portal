"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, EyeOff } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"

export default function PasswordSecurityPage() {
  // Simple display as per requirements - no boxes/borders around input fields
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)
  const [showTwoFactorModal, setShowTwoFactorModal] = useState(false)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 hidden">Password & Security</h1>

      <Card className="mb-8 shadow-none border-0">
        <CardHeader className="px-0">
          <CardTitle className="text-lg">Password & Security</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 px-0">
          <div className="relative">
            <label className="text-sm font-medium mb-1 block">Old Password</label>
            <div className="relative">
              <Input 
                type={showOldPassword ? "text" : "password"} 
                placeholder="Enter your current password" 
                className="pr-10 border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-gray-400 px-0"
              />
              <button
                type="button"
                onClick={() => setShowOldPassword(!showOldPassword)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showOldPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-medium mb-1 block">New Password</label>
            <div className="relative">
              <Input 
                type={showNewPassword ? "text" : "password"} 
                placeholder="Enter new password" 
                className="pr-10 border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-gray-400 px-0"
              />
              <button
                type="button"
                onClick={() => setShowNewPassword(!showNewPassword)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-medium mb-1 block">Confirm New Password</label>
            <div className="relative">
              <Input 
                type={showConfirmPassword ? "text" : "password"} 
                placeholder="Confirm new password" 
                className="pr-10 border-0 border-b border-gray-200 rounded-none focus:ring-0 focus:border-gray-400 px-0"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <Button className="bg-blue-500 hover:bg-blue-600 mt-4 text-sm h-8 px-4">Change</Button>
        </CardContent>
      </Card>

      <Card className="shadow-none border-0">
        <CardHeader className="px-0">
          <CardTitle className="text-lg">Two-factor Authentication</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <p className="text-sm text-gray-600 mb-4">
            To strengthen your account security, we recommend using two-factor authentication as an extra step after login.
            Using your password linked to an additional layer of security.
          </p>
          <Button 
            onClick={() => setShowTwoFactorModal(true)}
            className="bg-blue-500 hover:bg-blue-600 text-sm h-8 px-4"
          >
            {twoFactorEnabled ? "Manage Two-Factor Authentication" : "Enable Two-Factor Authentication"}
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showTwoFactorModal} onOpenChange={setShowTwoFactorModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Setup Two-factor Authentication</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <p className="text-sm mb-4">Enable 2FA to get an additional layer of security.</p>
              <ol className="space-y-4">
                <li className="flex flex-col space-y-2">
                  <span className="font-medium">1. Tap like a icon in your authentication app and scan the QR code below</span>
                  <span className="text-sm text-gray-600">We recommend you to use Google Authenticator.</span>
                </li>
                <li className="flex justify-center">
                  <div className="border border-gray-200 p-2 rounded-lg">
                    <img 
                      src="/qrcode-2fa-example.png" 
                      alt="QR Code" 
                      className="w-48 h-48"
                      onError={(e) => {
                        // Fallback to a div with QR code text if image fails to load
                        e.currentTarget.outerHTML = `<div class="w-48 h-48 flex items-center justify-center bg-gray-100 text-gray-400 text-xs text-center">QR Code<br/>Example</div>`
                      }}
                    />
                  </div>
                </li>
                <li className="flex flex-col space-y-2">
                  <span className="font-medium">2. After scanning the QR code, enter the 6-digit code generated by your authentication app.</span>
                </li>
                <li>
                  <Input placeholder="6 digit code" className="text-center" maxLength={6} />
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-between">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button className="bg-blue-500 hover:bg-blue-600">Confirm Setup</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
} 
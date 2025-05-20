"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Loader2, Eye, EyeOff } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [userRole, setUserRole] = useState("internal-auditor")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      if (userRole === "internal-auditor") {
        router.push("/dashboard/internal-auditor")
      } else {
        router.push("/dashboard/internal-auditor") // Default to internal auditor for now
      }
    }, 1500)
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-cyan p-4 md:p-8">
      <div className="w-full max-w-6xl overflow-hidden rounded-3xl flex flex-col md:flex-row shadow-2xl">
        {/* Left side - New image */}
        <div className="relative w-full md:w-1/2 bg-black text-white">
          <Image
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/ChatGPT%20Image%20May%2019%2c%202025%2c%2006_55_51%20PM.png"
            alt="Audit background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="relative z-10 p-8 md:p-12 flex flex-col h-full">
            <div className="mb-auto">
              <p className="text-sm uppercase tracking-wider opacity-80">CYQ.</p>
            </div>
            <div className="mt-auto">
              <h1 className="text-5xl md:text-6xl font-playfair font-bold leading-tight mb-4">
                Welcome To
                <br />
                Audit
                <br />
                Management Portal
              </h1>
              <p className="opacity-80 max-w-md">
                Securely manage, track, and review all your audits in one place.Please log in to access your dashboard and begin your audit workflow
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Login form */}
        <div className="w-full md:w-1/2 bg-white p-8 md:p-12 flex flex-col">
          <div className="flex justify-end mb-12">
            <div className="flex items-center">
              <span className="font-medium text-lg">Audit System</span>
            </div>
          </div>

          <div className="max-w-md mx-auto w-full">
            <h2 className="text-4xl font-playfair font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-500 mb-8">Enter your email and password to access your account</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="user-role" className="block text-sm font-medium text-gray-700">
                  User Role
                </label>
                <Select value={userRole} onValueChange={setUserRole}>
                  <SelectTrigger className="w-full h-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="internal-auditor">Internal Auditor</SelectItem>
                    <SelectItem value="external-auditor">External Auditor</SelectItem>
                    <SelectItem value="auditee">Participant / Auditee</SelectItem>
                    <SelectItem value="hod">HOD</SelectItem>
                    <SelectItem value="executive">Executive Management</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                    <SelectItem value="third-party">3rd Party</SelectItem>
                    <SelectItem value="posture">Posture</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  defaultValue="auditor@company.com"
                  required
                  className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black focus:outline-none"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    defaultValue="password123"
                    required
                    className="w-full h-12 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-black hover:underline">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                    <span>Signing In...</span>
                  </div>
                ) : (
                  "Sign In"
                )}
              </button>

              

              
            </form>

            
          </div>
        </div>
      </div>
    </div>
  )
}

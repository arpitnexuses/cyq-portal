"use client"

import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"

export default function GettingStartedPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Getting Started</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" className="flex items-center gap-1">
            <HelpCircle className="h-4 w-4" />
            <span>Restart Onboarding</span>
          </Button>
        </div>
      </div>

      <div className="space-y-10">
        {/* Welcome Section */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-2">Welcome to Picus, Kapil</h2>
          <p className="text-gray-600 mb-4">
            The Picus Complete Security Control Validation Platform, validates that your security controls provide the protection you need against
            a comprehensive set of cyber threats.
          </p>
        </section>

        {/* Assess Your Security Posture */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-2">Assess Your Security Posture</h2>
          <p className="text-gray-600 mb-4">
            Determine your level of security risk at any moment and avoid assumptions. Explore our threat library, simulate the latest threats and
            assess your security posture from the attacker's perspective.
          </p>
          <div className="flex justify-end">
            <Button variant="outline" size="sm" className="text-blue-600">
              See All Templates
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* Card 1 */}
            <div className="border border-red-100 rounded-lg p-4 relative overflow-hidden">
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-red-800">All Emerging Threats</h3>
                <p className="text-sm text-red-700 mt-1">Added in the Last Year</p>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <Button variant="link" className="text-red-600 p-0 h-auto text-sm flex items-center">
                    Explore & Simulate
                    <span className="ml-1">→</span>
                  </Button>
                  <div className="text-red-500">
                    <div className="h-10 w-10 bg-red-50 rounded-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-red-600">
                        <path d="M12 9v4M12 17.01l.01-.01M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="border border-blue-100 rounded-lg p-4 relative overflow-hidden">
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-blue-800">Network Security</h3>
                <p className="text-sm text-blue-700 mt-1">Ransomware Added in the Last 3 Months</p>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <Button variant="link" className="text-blue-600 p-0 h-auto text-sm flex items-center">
                    Explore & Simulate
                    <span className="ml-1">→</span>
                  </Button>
                  <div className="text-blue-500">
                    <div className="h-10 w-10 bg-blue-50 rounded-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                        <path d="M12 9v4M12 17.01l.01-.01M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="border border-purple-100 rounded-lg p-4 relative overflow-hidden">
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-purple-800">Ransomware Endpoint Scenarios</h3>
                <p className="text-sm text-purple-700 mt-1"></p>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <Button variant="link" className="text-purple-600 p-0 h-auto text-sm flex items-center">
                    Explore & Simulate
                    <span className="ml-1">→</span>
                  </Button>
                  <div className="text-purple-500">
                    <div className="h-10 w-10 bg-purple-50 rounded-full flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-purple-600">
                        <path d="M12 9v4M12 17.01l.01-.01M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Validate Your Security Controls */}
        <section className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold mb-2">Validate Your Security Controls</h2>
          <p className="text-gray-600 mb-4">
            Maximize the value of existing security investments and ensure that new ones deliver the value you expect by validating that your
            security controls provide the protection you need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {/* Test Network Security */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold">Test Network Security</h3>
              <Button className="mt-4 w-full" variant="outline">View Details</Button>
            </div>
            
            {/* Test Endpoint Security */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold">Test Endpoint Security</h3>
              <Button className="mt-4 w-full" variant="outline">View Details</Button>
            </div>
            
            {/* Test E-mail Security */}
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold">Test E-mail Security</h3>
              <Button className="mt-4 w-full" variant="outline">View Details</Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 
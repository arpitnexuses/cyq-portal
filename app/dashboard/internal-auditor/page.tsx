"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import {
  BarChartIcon,
  ShieldIcon,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Users,
  Calendar,
  ArrowRight,
  Clock,
  ScanSearch,
  GraduationCap,
  X,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChevronRight,
  FileCheck,
  MoreHorizontal,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const complianceScoreData = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 59 },
  { name: "Mar", value: 62 },
  { name: "Apr", value: 68 },
  { name: "May", value: 71 },
  { name: "Jun", value: 75 },
  { name: "Jul", value: 78 },
  { name: "Aug", value: 82 },
  { name: "Sep", value: 85 },
  { name: "Oct", value: 87 },
  { name: "Nov", value: 87 },
  { name: "Dec", value: 87 },
];

const auditData = [
  { name: "Planned", value: 18 },
  { name: "Completed", value: 10 },
  { name: "In Progress", value: 5 },
  { name: "Scheduled", value: 3 },
];

const auditFindingsData = [
  { name: "Jan", value: 8 },
  { name: "Feb", value: 10 },
  { name: "Mar", value: 12 },
  { name: "Apr", value: 14 },
  { name: "May", value: 16 },
  { name: "Jun", value: 18 },
  { name: "Jul", value: 15 },
  { name: "Aug", value: 20 },
  { name: "Sep", value: 22 },
  { name: "Oct", value: 25 },
  { name: "Nov", value: 28 },
  { name: "Dec", value: 32 },
];

const riskData = [
  { name: "High Risk", value: 35, color: "#ef4444" },
  { name: "Medium Risk", value: 45, color: "#f59e0b" },
  { name: "Low Risk", value: 20, color: "#10b981" },
];

export default function InternalAuditorDashboard() {
  const router = useRouter();
  const [showWelcomeBanner, setShowWelcomeBanner] = useState(true);

  const navigateToPostureMaturity = () => {
    router.push("/dashboard/internal-auditor/posture-maturity");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white pb-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
          Dashboard
        </h1>
        <button className="px-5 py-2 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 active:scale-95 transition-transform font-semibold text-gray-700 flex items-center gap-2">
          <ArrowRight className="w-4 h-4" /> Export
        </button>
      </div>

      {/* Welcome Message and Purpose of Cybersecurity */}
      {showWelcomeBanner && (
        <div className="mb-10">
          <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-50 to-indigo-100 relative">
            <button 
              onClick={() => setShowWelcomeBanner(false)}
              className="absolute top-2 right-2 p-1 rounded-full bg-white/50 hover:bg-white/80 transition-colors"
              aria-label="Close welcome banner"
            >
              <X className="h-4 w-4 text-gray-600" />
            </button>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Welcome to the Cybersecurity Dashboard
                  </h2>
                  <p className="text-gray-700">
                    Your centralized hub for monitoring and managing compliance,
                    audits, and security posture across the organization.
                  </p>
                </div>
                <div className="flex-1 flex items-center gap-4">
                  <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-md">
                    <ShieldIcon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Purpose of Cybersecurity
                    </h3>
                    <p className="text-gray-700">
                      Ensuring compliance with regulatory frameworks and
                      protecting organizational assets through a comprehensive
                      security journey.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* First Row - Key Metrics */}
      <div className="grid gap-8 md:grid-cols-4 mb-10">
        {/* Compliance Score */}
        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-[linear-gradient(135deg,_#f0fdf4_0%,_#dcfce7_100%)] scale-100 hover:scale-[1.025]">
          <CardHeader className="flex flex-row items-center justify-between pb-2 pt-4">
            <CardTitle className="text-base font-semibold text-green-700 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-500" />
              <span>Compliance Score</span>
            </CardTitle>
            <ShieldIcon className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-2 pb-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="10"
                  strokeDasharray="251.2"
                  strokeDashoffset={251.2 - 251.2 * 0.82}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-green-600 leading-none">
                  82%
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-400 mt-4">
              +5% from last month
            </span>
          </CardContent>
        </Card>

        {/* Audit Progress */}
        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white rounded-lg">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <CardTitle className="text-base font-semibold text-gray-900">
              Audit Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-700">Total Planned</span>
              <span className="font-bold text-gray-900">24</span>
            </div>

            <div>
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-green-500 rounded-sm inline-block"></span>
                  <span className="text-gray-700">Completed</span>
                </span>
                <span className="font-bold text-gray-900">18</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-green-500 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-sm inline-block"></span>
                  <span className="text-gray-700">In Progress</span>
                </span>
                <span className="font-bold text-gray-900">4</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-blue-500 rounded-full"
                  style={{ width: "16.7%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center text-sm mb-1">
                <span className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-sm inline-block"></span>
                  <span className="text-gray-700">Scheduled</span>
                </span>
                <span className="font-bold text-gray-900">2</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 rounded-full"
                  style={{ width: "8.3%" }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Auditee Performance */}
        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold text-gray-900">
              Auditee Performance
            </CardTitle>
            <div className="h-6 w-6 bg-purple-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-2">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Response Rate</span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900">94%</span>
                <span className="text-green-500 text-xs">+2%</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Avg. Response Time</span>
              <div className="flex items-center gap-1">
                <span className="font-bold text-gray-900">2.3 days</span>
                <span className="text-green-500 text-xs">+0.5</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm mb-2">
              <span className="text-gray-600">Quality Score</span>
              <span className="font-bold text-gray-900">
                4.2<span className="text-gray-500 font-normal">/5</span>
              </span>
            </div>

            <div>
              <div className="flex justify-between items-center text-xs mb-1">
                <span className="text-gray-500">Poor</span>
                <span className="text-gray-500">Excellent</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-purple-500 rounded-full"
                  style={{ width: "84%" }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Overview */}
        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white rounded-lg">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-base font-semibold text-gray-900">
              Risk Overview
            </CardTitle>
            <div className="h-6 w-6 bg-red-50 rounded-full flex items-center justify-center">
              <ShieldIcon className="h-4 w-4 text-red-300" />
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 pt-2">
            <div className="flex gap-3">
              <div className="flex-1 bg-red-50 rounded-lg p-2 flex flex-col items-center">
                <span className="text-xl font-bold text-red-500">3</span>
                <span className="text-xs text-gray-600">High</span>
              </div>
              <div className="flex-1 bg-amber-50 rounded-lg p-2 flex flex-col items-center">
                <span className="text-xl font-bold text-amber-500">7</span>
                <span className="text-xs text-gray-600">Medium</span>
              </div>
              <div className="flex-1 bg-green-50 rounded-lg p-2 flex flex-col items-center">
                <span className="text-xl font-bold text-green-600">12</span>
                <span className="text-xs text-gray-600">Low</span>
              </div>
            </div>

            <div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden flex">
                <div
                  className="h-full bg-red-500 rounded-l-full"
                  style={{ width: "14%" }}
                ></div>
                <div
                  className="h-full bg-amber-500"
                  style={{ width: "32%" }}
                ></div>
                <div
                  className="h-full bg-green-500 rounded-r-full"
                  style={{ width: "54%" }}
                ></div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-xs text-gray-500">
                  22 total risks identified
                </span>
                <span className="text-xs text-green-600">
                  ↓3 from last month
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Second Row */}
      <div className="grid gap-6 lg:grid-cols-7 mb-10">
        {/* Audit Status Card with 3D effect */}
        <Card className="lg:col-span-4 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl overflow-hidden">
          <CardHeader className="border-b border-slate-100 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-indigo-100 dark:bg-indigo-900/50">
                  <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                </div>
                <CardTitle className="text-base font-semibold text-slate-900 dark:text-white">
                  Audit Status
                </CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-xs text-slate-600 dark:text-slate-400"
              >
                View all
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-700">
              <div className="flex items-center justify-between p-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-200 dark:bg-emerald-900/30 blur-[2px]"></div>
                    <div className="relative rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-2.5 shadow-lg shadow-emerald-500/20">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-slate-900 dark:text-white">
                        ISO 27001
                      </p>
                      <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 hover:bg-emerald-200">
                        Compliant
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex -space-x-1">
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-indigo-500">
                            JD
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-violet-500">
                            AM
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-emerald-500">
                            RK
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Last updated: June 10, 2025
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      98%
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Compliance
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-amber-200 dark:bg-amber-900/30 blur-[2px]"></div>
                    <div className="relative rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-2.5 shadow-lg shadow-amber-500/20">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-slate-900 dark:text-white">
                        SEBI
                      </p>
                      <Badge
                        variant="outline"
                        className="border-amber-200 dark:border-amber-900/50 text-amber-700 dark:text-amber-400"
                      >
                        Observation
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex -space-x-1">
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-blue-500">
                            TS
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-rose-500">
                            PL
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Last updated: May 28, 2025
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      86%
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Compliance
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-200 dark:bg-emerald-900/30 blur-[2px]"></div>
                    <div className="relative rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 p-2.5 shadow-lg shadow-emerald-500/20">
                      <ShieldCheck className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-slate-900 dark:text-white">
                        NIST
                      </p>
                      <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 hover:bg-emerald-200">
                        Compliant
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex -space-x-1">
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-amber-500">
                            KJ
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-indigo-500">
                            MR
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Last updated: June 5, 2025
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      95%
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Compliance
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-rose-200 dark:bg-rose-900/30 blur-[2px]"></div>
                    <div className="relative rounded-full bg-gradient-to-br from-rose-400 to-rose-600 p-2.5 shadow-lg shadow-rose-500/20">
                      <ShieldAlert className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-slate-900 dark:text-white">
                        CIS
                      </p>
                      <Badge className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-400 hover:bg-rose-200">
                        Non-Conformance
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex -space-x-1">
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-violet-500">
                            DT
                          </AvatarFallback>
                        </Avatar>
                        <Avatar className="h-5 w-5 border border-white dark:border-slate-800">
                          <AvatarFallback className="text-[10px] bg-blue-500">
                            SL
                          </AvatarFallback>
                        </Avatar>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Last updated: June 1, 2025
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                      68%
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Compliance
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <MoreHorizontal className="h-4 w-4 text-slate-500 dark:text-slate-400" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tasks Due Card with glass effect */}
        <Card className="lg:col-span-3 border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl overflow-hidden">
          <CardHeader className="border-b border-slate-100 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 px-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/50">
                  <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-base font-semibold text-slate-900 dark:text-white">
                  Tasks Due
                </CardTitle>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="gap-1 text-xs text-slate-600 dark:text-slate-400"
              >
                View all
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-slate-100 dark:divide-slate-700">
              <div className="p-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-amber-200 dark:bg-amber-900/30 blur-[2px]"></div>
                      <div className="relative rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-2 shadow-lg shadow-amber-500/20">
                        <FileCheck className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Risk Assessment Review
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-400"
                        >
                          Due 15th
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400">
                          <Clock className="h-3 w-3" />3 days left
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 border border-white dark:border-slate-800 shadow-sm">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" />
                      <AvatarFallback className="bg-indigo-500 text-[10px]">
                        ST
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Security Team
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-amber-500"></span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Medium Priority
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <Progress value={65} className="h-1.5" />
                </div>
              </div>

              <div className="p-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-violet-200 dark:bg-violet-900/30 blur-[2px]"></div>
                      <div className="relative rounded-full bg-gradient-to-br from-violet-400 to-violet-600 p-2 shadow-lg shadow-violet-500/20">
                        <GraduationCap className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Security Training
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-400"
                        >
                          Due 22nd
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400">
                          <Clock className="h-3 w-3" />
                          10 days left
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 border border-white dark:border-slate-800 shadow-sm">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" />
                      <AvatarFallback className="bg-violet-500 text-[10px]">
                        HR
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      HR Department
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      Low Priority
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <Progress value={30} className="h-1.5" />
                </div>
              </div>

              <div className="p-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-rose-200 dark:bg-rose-900/30 blur-[2px]"></div>
                      <div className="relative rounded-full bg-gradient-to-br from-rose-400 to-rose-600 p-2 shadow-lg shadow-rose-500/20">
                        <ScanSearch className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Vulnerability Scan
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge
                          variant="outline"
                          className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-900/50 text-blue-700 dark:text-blue-400"
                        >
                          Due 28th
                        </Badge>
                        <span className="flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400">
                          <Clock className="h-3 w-3" />
                          16 days left
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-6 w-6 border border-white dark:border-slate-800 shadow-sm">
                      <AvatarImage src="/placeholder.svg?height=24&width=24" />
                      <AvatarFallback className="bg-blue-500 text-[10px]">
                        IT
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      IT Operations
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-rose-500"></span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      High Priority
                    </span>
                  </div>
                </div>
                <div className="mt-3">
                  <Progress value={10} className="h-1.5" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Third Row */}
      <div className="grid gap-8 md:grid-cols-1 mb-10">
        <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white scale-100 hover:scale-[1.01]">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2">
              <div className="bg-blue-100 p-2 rounded-lg">
                <BarChartIcon className="h-5 w-5 text-blue-600" />
              </div>
              <CardTitle className="text-lg font-bold text-gray-800">
                Highlights & Lowlights
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="highlights" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4 bg-gray-50 rounded-lg">
                <TabsTrigger value="highlights" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">Highlights</TabsTrigger>
                <TabsTrigger value="lowlights" className="data-[state=active]:bg-white data-[state=active]:text-rose-600">Lowlights</TabsTrigger>
              </TabsList>
              <TabsContent value="highlights">
                <div className="space-y-4">
                  <div className="flex gap-4 bg-green-50 p-4 rounded-lg">
                    <div className="bg-green-500 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-900">
                        ISO 27001 compliance improved by 15%
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        Significant improvement in documentation and access controls
                      </p>
                      <div className="flex gap-2">
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                          Documentation
                        </Badge>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                          Access Control
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-green-50 p-4 rounded-lg">
                    <div className="bg-green-500 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-900">
                        Security training completion rate at 94%
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        Highest completion rate achieved in the last 12 months
                      </p>
                      <div className="flex gap-2">
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                          Training
                        </Badge>
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-0">
                          Awareness
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="lowlights">
                <div className="space-y-4">
                  <div className="flex gap-4 bg-red-50 p-4 rounded-lg">
                    <div className="bg-red-500 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-900">
                        3 audits overdue
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        Network security assessment, vendor review, and cloud infrastructure audit
                      </p>
                      <div className="flex gap-2">
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-0">
                          Network
                        </Badge>
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-0">
                          Vendor
                        </Badge>
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-0">
                          Cloud
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 bg-red-50 p-4 rounded-lg">
                    <div className="bg-red-500 rounded-full p-2 h-10 w-10 flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-base font-semibold text-gray-900">
                        CIS compliance below target
                      </p>
                      <p className="text-sm text-gray-600 mb-2">
                        Server hardening standards not met in development environment
                      </p>
                      <div className="flex gap-2">
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-0">
                          Server
                        </Badge>
                        <Badge className="bg-red-100 text-red-700 hover:bg-red-200 border-0">
                          Hardening
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>

      {/* Posture Maturity Banner */}
      <Card className="mb-8 bg-gradient-to-r from-blue-100 to-indigo-200 border-0 shadow-md cursor-pointer hover:shadow-lg hover:scale-[1.01] transition-all duration-300" onClick={navigateToPostureMaturity}>
        <CardContent className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <ShieldIcon className="h-10 w-10 text-blue-600 drop-shadow" />
              <div>
                <h3 className="text-2xl font-extrabold text-blue-900">
                  Posture Maturity
                </h3>
                <p className="text-base text-blue-800">
                  View your organization's current security posture and maturity
                  assessments
                </p>
              </div>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigateToPostureMaturity();
              }} 
              className="px-6 py-2 bg-white text-blue-700 font-bold rounded-lg shadow hover:bg-blue-50 active:scale-95 transition-transform text-base"
            >
              View detailed assessment
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

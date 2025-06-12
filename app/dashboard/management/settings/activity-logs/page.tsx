"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Activity, User, Clock, Monitor } from "lucide-react"

export default function ActivityLogsPage() {
  const activityLogs = [
    { 
      id: 1, 
      activity: "Login", 
      user: "admin@example.com", 
      timestamp: "2023-06-12 09:32:15", 
      device: "Chrome on Windows" 
    },
    { 
      id: 2, 
      activity: "Password Changed", 
      user: "admin@example.com", 
      timestamp: "2023-06-10 14:45:23", 
      device: "Chrome on Windows" 
    },
    { 
      id: 3, 
      activity: "Two-Factor Authentication Enabled", 
      user: "admin@example.com", 
      timestamp: "2023-06-08 11:15:07", 
      device: "Mobile App" 
    }
  ]

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Activity Logs</h1>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Activity className="mr-2 h-5 w-5" />
            Recent Account Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Activity</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Device</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activityLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell>
                    <div className="flex items-center">
                      <Activity className="mr-2 h-4 w-4 text-gray-500" />
                      {log.activity}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <User className="mr-2 h-4 w-4 text-gray-500" />
                      {log.user}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Clock className="mr-2 h-4 w-4 text-gray-500" />
                      {log.timestamp}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <Monitor className="mr-2 h-4 w-4 text-gray-500" />
                      {log.device}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 
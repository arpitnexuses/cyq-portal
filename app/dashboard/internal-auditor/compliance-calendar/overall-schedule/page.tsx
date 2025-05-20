"use client"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, CalendarDays, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"

export default function OverallSchedulePage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate()

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay()

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const isToday = (date: number) => {
    const today = new Date()
    return (
      date === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    )
  }

  const isSelected = (date: number) => {
    if (!selectedDate) return false
    return (
      date === selectedDate.getDate() &&
      currentDate.getMonth() === selectedDate.getMonth() &&
      currentDate.getFullYear() === selectedDate.getFullYear()
    )
  }

  const hasEvent = (date: number) => {
    // Mock data - replace with actual event data
    const eventDates = [5, 12, 15, 20, 25]
    return eventDates.includes(date)
  }

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Overall Schedule</h1>
              <p className="text-muted-foreground">Calendar timeline of all audit activities</p>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by audit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Audits</SelectItem>
                  <SelectItem value="financial">Financial Compliance</SelectItem>
                  <SelectItem value="it">IT Security</SelectItem>
                  <SelectItem value="operational">Operational</SelectItem>
                </SelectContent>
              </Select>
              <Button>Add Event</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {/* Calendar */}
            <Card className="md:col-span-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center text-xl">
                    <CalendarDays className="h-5 w-5 mr-2 text-blue-600" />
                    Calendar Timeline
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" onClick={handlePrevMonth}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon" onClick={handleNextMonth}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <div className="grid grid-cols-7 gap-1">
                    {weekDays.map((day) => (
                      <div
                        key={day}
                        className="text-center text-sm font-medium text-slate-500 py-2"
                      >
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                      <div key={`empty-${index}`} className="h-24" />
                    ))}
                    {Array.from({ length: daysInMonth }).map((_, index) => {
                      const date = index + 1
                      return (
                        <div
                          key={date}
                          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), date))}
                          className={`
                            relative h-24 p-2 border rounded-lg cursor-pointer transition-colors
                            ${isToday(date) ? 'bg-blue-50 border-blue-200' : 'hover:bg-slate-50'}
                            ${isSelected(date) ? 'bg-blue-100 border-blue-300' : ''}
                          `}
                        >
                          <span className={`
                            text-sm font-medium
                            ${isToday(date) ? 'text-blue-600' : 'text-slate-900'}
                            ${isSelected(date) ? 'text-blue-700' : ''}
                          `}>
                            {date}
                          </span>
                          {hasEvent(date) && (
                            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                              <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-sm font-medium">Legend</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Planned</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Completed</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-sm">In Progress</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Delayed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Events for selected date */}
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-blue-600" />
                  Events for {selectedDate ? `${monthNames[selectedDate.getMonth()]} ${selectedDate.getDate()}, ${selectedDate.getFullYear()}` : 'Selected Date'}
                </CardTitle>
                <CardDescription>Planned vs Actual activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: "IT Security Control Review",
                      time: "10:00 AM - 12:00 PM",
                      status: "Completed",
                      type: "Planned",
                    },
                    {
                      id: 2,
                      title: "Financial Compliance Meeting",
                      time: "2:00 PM - 3:30 PM",
                      status: "In Progress",
                      type: "Planned",
                    },
                    {
                      id: 3,
                      title: "Evidence Collection Deadline",
                      time: "5:00 PM",
                      status: "Upcoming",
                      type: "Planned",
                    },
                    {
                      id: 4,
                      title: "Unplanned Vendor Review",
                      time: "3:45 PM - 4:30 PM",
                      status: "Added",
                      type: "Actual",
                    },
                  ].map((event) => (
                    <div key={event.id} className="flex items-start space-x-3 p-3 border rounded-md">
                      {event.status === "Completed" ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      ) : event.status === "In Progress" ? (
                        <Clock className="h-5 w-5 text-amber-500 mt-0.5" />
                      ) : event.status === "Upcoming" ? (
                        <CalendarDays className="h-5 w-5 text-blue-500 mt-0.5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-purple-500 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.time}</div>
                        <div className="flex items-center mt-1">
                          <Badge variant={event.type === "Planned" ? "outline" : "secondary"} className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, PieChart, Pie, Cell, Legend, Tooltip, Area, Line, ComposedChart } from "recharts"

const data = [
  {
    name: "Jan",
    total: 12,
  },
  {
    name: "Feb",
    total: 16,
  },
  {
    name: "Mar",
    total: 10,
  },
  {
    name: "Apr",
    total: 22,
  },
  {
    name: "May",
    total: 18,
  },
  {
    name: "Jun",
    total: 24,
  },
  {
    name: "Jul",
    total: 20,
  },
  {
    name: "Aug",
    total: 28,
  },
  {
    name: "Sep",
    total: 32,
  },
  {
    name: "Oct",
    total: 26,
  },
  {
    name: "Nov",
    total: 30,
  },
  {
    name: "Dec",
    total: 36,
  },
]

const riskData = [
  { name: "High Risk", value: 35, color: "#ef4444" },
  { name: "Medium Risk", value: 45, color: "#f59e0b" },
  { name: "Low Risk", value: 20, color: "#10b981" },
]

export function DashboardMetrics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <Card className="border-none shadow-lg bg-gradient-to-br from-white to-slate-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-slate-800">Audit Findings</CardTitle>
          <CardDescription className="text-slate-500">Monthly audit findings distribution</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <defs>
                <linearGradient id="colorFindings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}`}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
                cursor={{ fill: 'rgba(59, 130, 246, 0.1)' }}
              />
              <Bar 
                dataKey="total" 
                fill="url(#colorFindings)" 
                radius={[6, 6, 0, 0]}
                maxBarSize={40}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg bg-gradient-to-br from-white to-slate-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-slate-800">Compliance Score</CardTitle>
          <CardDescription className="text-slate-500">Monthly compliance score trend</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={data}>
              <defs>
                <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                tickLine={false} 
                axisLine={false}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <YAxis 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => `${value}`}
                tick={{ fill: '#666', fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorScore)"
              />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ fill: "#10b981", strokeWidth: 2 }}
                activeDot={{ r: 6, fill: "#10b981" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border-none shadow-lg bg-gradient-to-br from-white to-slate-50">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg font-semibold text-slate-800">Risk Assessment</CardTitle>
          <CardDescription className="text-slate-500">Risk distribution across audits</CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
                cornerRadius={10}
              >
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }}
              />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value, entry) => (
                  <span style={{ color: "#666", fontSize: "12px" }}>{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

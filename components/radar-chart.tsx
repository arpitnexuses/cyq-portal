"use client"

import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Legend, 
  ResponsiveContainer,
  Tooltip
} from 'recharts'

interface MaturityDomain {
  subject: string
  score: number
  fullMark: number
}

interface RadarChartProps {
  data: MaturityDomain[]
  height?: number
  width?: string
  className?: string
}

export function ComplianceMaturityRadarChart({ 
  data, 
  height = 400, 
  width = "100%", 
  className 
}: RadarChartProps) {
  // Determine domain max based on data
  const maxScore = Math.max(...data.map(item => item.fullMark || 100));
  
  return (
    <div className={className} style={{ width, height }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, maxScore]} />
          <Radar
            name="Current Maturity"
            dataKey="score"
            stroke="#1E88E5"
            fill="#1E88E5"
            fillOpacity={0.4}
          />
          <Radar
            name="Target Maturity"
            dataKey="fullMark"
            stroke="#4CAF50"
            fill="#4CAF50"
            fillOpacity={0.1}
          />
          <Tooltip />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
} 
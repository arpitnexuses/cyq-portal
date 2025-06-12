"use client"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container mx-auto p-4">
      <div className="flex-1 bg-white rounded-lg shadow">
        {children}
      </div>
    </div>
  )
} 
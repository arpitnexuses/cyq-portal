"use client"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface UserAvatarProps {
  fallback?: string
  className?: string
}

export function UserAvatar({ fallback = "IA", className = "h-8 w-8" }: UserAvatarProps) {
  return (
    <Avatar className={className}>
      <AvatarFallback className="bg-primary/10 text-primary">{fallback}</AvatarFallback>
    </Avatar>
  )
}

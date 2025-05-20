import { Skeleton } from "@/components/ui/skeleton"

export default function LoadingRequests() {
  return (
    <div className="flex items-center justify-center h-full">
      <Skeleton className="h-16 w-16 rounded-full" />
    </div>
  )
}

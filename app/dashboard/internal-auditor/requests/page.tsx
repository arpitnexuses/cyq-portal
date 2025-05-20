import { redirect } from "next/navigation"

export default function RequestsPage() {
  redirect("/dashboard/internal-auditor/requests/view")
  return null
}

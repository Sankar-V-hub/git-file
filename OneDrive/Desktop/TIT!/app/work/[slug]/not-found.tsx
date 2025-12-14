import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Project Not Found</h2>
        <p className="text-muted-foreground mb-8">Sorry, we couldn't find the project you're looking for.</p>
        <Link href="/work">
          <Button>Back to Work</Button>
        </Link>
      </div>
    </div>
  )
}

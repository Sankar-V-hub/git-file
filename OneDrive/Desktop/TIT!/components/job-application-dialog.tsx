"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { submitApplication } from "@/app/actions"

export function JobApplicationDialog({ jobTitle, children }: { jobTitle: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: string; error?: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus(null)

    // Append job title if not present (though we use hidden input)
    if (!formData.get("jobTitle")) {
      formData.append("jobTitle", jobTitle)
    }

    const result = await submitApplication(formData)

    if (result.error) {
      setFormStatus({ error: result.error })
    } else if (result.success) {
      setFormStatus({ success: result.success })
      setTimeout(() => {
        setOpen(false)
        setFormStatus(null)
      }, 2000)
    }

    setIsSubmitting(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Apply for {jobTitle}</DialogTitle>
          <DialogDescription>Enter your details below to apply for this position.</DialogDescription>
        </DialogHeader>
        <form action={handleSubmit} className="grid gap-4 py-4">
          <input type="hidden" name="jobTitle" value={jobTitle} />
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="linkedin">LinkedIn Profile URL</Label>
            <Input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
          </div>

          {formStatus?.error && <p className="text-sm text-red-500">{formStatus.error}</p>}
          {formStatus?.success && <p className="text-sm text-green-600">{formStatus.success}</p>}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

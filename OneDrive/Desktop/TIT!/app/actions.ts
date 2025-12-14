"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function submitContact(formData: FormData) {
  const supabase = await createClient()

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  if (!name || !email || !message) {
    return { error: "Name, email, and message are required." }
  }

  const { error } = await supabase.from("contacts").insert({
    name,
    email,
    phone,
    message,
  })

  if (error) {
    console.error("Error submitting contact:", error)
    return { error: "Failed to submit message. Please try again." }
  }

  revalidatePath("/contact")
  return { success: "Message sent successfully!" }
}

export async function submitApplication(formData: FormData) {
  const supabase = await createClient()

  const jobTitle = formData.get("jobTitle") as string
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const linkedinUrl = formData.get("linkedin") as string

  if (!name || !email || !jobTitle) {
    return { error: "Name, email, and job title are required." }
  }

  const { error } = await supabase.from("applications").insert({
    job_title: jobTitle,
    name,
    email,
    phone,
    linkedin_url: linkedinUrl,
  })

  if (error) {
    console.error("Error submitting application:", error)
    return { error: "Failed to submit application. Please try again." }
  }

  revalidatePath("/careers")
  return { success: "Application submitted successfully!" }
}

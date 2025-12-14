"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Send, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

type Msg = { role: "user" | "assistant"; text: string }

function generateReply(q: string): string {
  const s = q.toLowerCase()
  if (s.includes("service") || s.includes("services")) {
    return "We offer Marketing, IT Based Services, and Research & Development. Ask about any domain to see details."
  }
  if (s.includes("marketing")) {
    return "Marketing Services include Social, SEO, Performance, Influencer, Email, E‑Commerce, Video, PR, and Content."
  }
  if (s.includes("it") || s.includes("web") || s.includes("app") || s.includes("design") || s.includes("development")) {
    return "IT Based Services cover Website Design & Development, UI/UX, Brand Identity, Package & Stationery Design, Pitch Decks, Mobile Apps, and E‑Commerce."
  }
  if (s.includes("r&d") || s.includes("research")) {
    return "R&D includes Market Research & Analytics and multi‑channel Advertising like Digital, Outdoor, Vehicle, Building, TV, and Newspaper."
  }
  if (s.includes("contact") || s.includes("phone") || s.includes("whatsapp")) {
    return "You can reach us via WhatsApp at +91 79047 30223 or use the Contact page for messages."
  }
  if (s.includes("career") || s.includes("job") || s.includes("apply")) {
    return "Careers are open across multiple roles. Visit the Careers page and use Apply Now to submit your application."
  }
  if (s.includes("work") || s.includes("portfolio") || s.includes("project")) {
    return "Explore our portfolio in the Work section. Click any project card to view case studies and details."
  }
  return "Tell me what you’re looking for. You can ask about services, pricing, careers, or send us a message to connect."
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Msg[]>([
    { role: "assistant", text: "Hi! I’m the Thulir Info Tech assistant. How can I help you today?" },
  ])
  const endRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, open])

  function send() {
    const q = input.trim()
    if (!q) return
    const reply = generateReply(q)
    setMessages((m) => [...m, { role: "user", text: q }, { role: "assistant", text: reply }])
    setInput("")
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon-lg"
          className="bg-[#25D366] hover:bg-[#20bd5d] text-white rounded-full shadow-lg"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open chat"
        >
          {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)]">
          <Card className="shadow-xl border">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Thulir Info Tech Assistant</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ScrollArea className="h-64 rounded-md border bg-accent/10 p-3">
                <div className="space-y-3">
                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={
                        m.role === "user"
                          ? "ml-auto max-w-[85%] rounded-lg bg-primary text-primary-foreground px-3 py-2 text-sm"
                          : "mr-auto max-w-[85%] rounded-lg bg-muted px-3 py-2 text-sm"
                      }
                    >
                      {m.text}
                    </div>
                  ))}
                  <div ref={endRef} />
                </div>
              </ScrollArea>
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about services, careers, or contact"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") send()
                  }}
                />
                <Button onClick={send} className="gap-2">
                  <Send className="h-4 w-4" />
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}


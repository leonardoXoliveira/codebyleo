import { Construction } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4">
      <Construction className="size-12 animate-pulse text-muted-foreground" />

      <h1 className="text-2xl font-semibold">About Me</h1>
      <p className="text-muted-foreground">This page is under construction</p>
    </div>
  )
}

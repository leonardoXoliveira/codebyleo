import { Spotlight } from '@/components/ui/spotlight'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const DESCRIPTION =
  'I&apos;m a software engineer with a focus on best practices, developer experience, performance optimization, and scalability, passionate about sharing my knowledge with others.'

export default function Home() {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-4">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <h2 className="text-4xl font-bold">Hello!</h2>
      <h1 className="text-7xl font-bold">I&apos;m Leo, nice to meet you!</h1>

      <TextGenerateEffect words={DESCRIPTION} />
    </div>
  )
}

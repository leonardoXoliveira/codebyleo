import { Spotlight } from '@/components/ui/spotlight-new'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const DESCRIPTION = `I'm a software engineer with a focus on best practices, developer experience, performance optimization, and scalability, passionate about sharing my knowledge with others.`

export default function Home() {
  return (
    <>
      <div className="flex w-full max-w-3xl flex-col gap-4">
        <Spotlight />

        <h3 className="text-4xl font-semibold">Hello!</h3>
        <h2 className="text-7xl font-semibold">
          I&apos;m Leo, nice to meet you!
        </h2>

        <TextGenerateEffect words={DESCRIPTION} />
      </div>
    </>
  )
}

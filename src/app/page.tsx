import { Spotlight } from '@/components/ui/spotlight-new'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

const DESCRIPTION = `Software engineer by day, bug hunter by... also day. Building things that work fast and break less often than my New Year's resolutions. Crafting scalable solutions and developer experiences that spark more joy than a perfectly formatted codebase. Sharing what I learn so others can avoid my 3 AM debugging adventures.`

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

import { Button } from "@codebyleo/ui/components/ui/button";
import { Spotlight } from "@codebyleo/ui/components/ui/spotlight";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <h1 className="text-4xl font-bold">Hello, world!</h1>
      <Button>Click me</Button>
    </div>
  );
}

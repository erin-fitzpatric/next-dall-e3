import ImageGenerator from "@/components/image-generator";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div id="topBar" className="w-full flex ">
        <h1 className="flex text-4xl font-bold w-full justify-center">Image Generator</h1>
        <ModeToggle />
      </div>
      {/* center content in this div */}

      <div className="flex justify-center">
        <p className="text-lg mt-4 w-1/3 text-center">
          Powered by OpenAI&apos;s GPT-3, this tool generates images based on your
          prompt. Try it out!
        </p>
      </div>
      {/* <div className="fle flex-auto w-full justify-self-center"></div> */}
      <div className="w-full">
        <ImageGenerator />
      </div>
    </main>
  );
}

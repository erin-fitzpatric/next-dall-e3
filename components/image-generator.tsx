"use client";

import { use, useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { LoadingButton } from "./ui/buttonVariants";
import generateImage from "@/app/server/generateImage";
import { useToast } from "./ui/use-toast";
import { Card } from "./ui/card";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<
    string | undefined
  >(undefined);

  const { toast } = useToast();

  async function handleGenerateImage(prompt: string) {
    setIsLoading(true);
    try {
      const response = await generateImage(prompt);
      setIsLoading(false);
      toast({
        title: "Image Generation",
        description: `Success!`,
      });
      setGeneratedImageUrl(response);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast({
        title: "Failed to generate image",
        description: "Please try again",
      });
    }
  }

  return (
    <div className="p-12 flex flex-col justify-center">
      <div className="w-2/3 mx-auto">
        <Card className="p-5 bg-secondary shadow-md">
          <div className="font-semibold">
            <h1>Describe an image to generate:</h1>
          </div>
          <div className="flex space-x-2 py-1">
            <Input
              placeholder="A software engineer playing trumpet"
              onChange={(e) => setPrompt(e.currentTarget.value)}
            />
            {!isLoading ? (
              <Button onClick={() => handleGenerateImage(prompt)}>
                Generate Image!
              </Button>
            ) : (
              <LoadingButton loading>Generating...</LoadingButton>
            )}
          </div>
        </Card>
      </div>
      {generatedImageUrl && (
        <div className="mt-8 mx-auto w-2/3">
          <Card className="p-2 bg-secondary shadow-md">
            <img src={generatedImageUrl} alt="Generated Image" />
          </Card>
        </div>
      )}
    </div>
  );
}

"use server"

import OpenApiClient from "@/lib/open-ai-client";

export default async function generateImage(
  prompt: string
): Promise<string | undefined> {
  const client = await OpenApiClient();
  try {
    const response = await client.images.generate({
      prompt: prompt,
      model: "dall-e-3",
      n: 1, // dall-e-3 only supports n=1
      quality: "hd",
      response_format: "url",
      size: "1024x1024",
    });
    console.log(response.data[0].url);
    return response.data[0].url;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to generate image");
  }
}

import OpenAI from "openai";
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); // cache the client

export default async function OpenApiClient(): Promise<OpenAI> {
  return client;
}

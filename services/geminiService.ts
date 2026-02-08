
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage, GroundingSource } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getEVAdvisorResponse = async (history: ChatMessage[], message: string) => {
  const model = 'gemini-3-flash-preview';
  
  const contents = history.map(h => ({
    role: h.role,
    parts: [{ text: h.text }]
  }));
  
  contents.push({
    role: 'user',
    parts: [{ text: message }]
  });

  const response = await ai.models.generateContent({
    model,
    contents,
    config: {
      systemInstruction: `You are the official AI Assistant for "Angel Electric Vehicle", a premier EV dealer in India owned by Angel Marketing. 
      Help users choose the right electric scooter or bike based on their budget and commute. 
      Promote Angel Marketing's values: trustworthiness, excellent service, and eco-friendly mobility.
      Use Indian Rupees (₹) for pricing. Be helpful and professional.`,
      temperature: 0.7,
    },
  });

  return response.text || "I'm sorry, I couldn't process that request.";
};

export const getLatestEVNews = async () => {
  const model = 'gemini-3-flash-preview';
  const response = await ai.models.generateContent({
    model,
    contents: "What are the latest electric vehicle news, launches, and policy updates in India for late 2024 and 2025?",
    config: { tools: [{ googleSearch: {} }] },
  });
  const text = response.text || "";
  const sources: GroundingSource[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks
    ?.filter((chunk: any) => chunk.web)
    .map((chunk: any) => ({ title: chunk.web.title, uri: chunk.web.uri })) || [];
  return { text, sources };
};

export const getNearbyChargers = async (lat: number, lng: number) => {
  const model = 'gemini-3-flash-preview';
  const response = await ai.models.generateContent({
    model,
    contents: `Find popular EV charging stations near lat: ${lat}, lng: ${lng} in India.`,
    config: { tools: [{ googleSearch: {} }] },
  });
  const text = response.text || "";
  const sources: GroundingSource[] = response.candidates?.[0]?.groundingMetadata?.groundingChunks
    ?.filter((chunk: any) => chunk.web)
    .map((chunk: any) => ({ title: chunk.web.title, uri: chunk.web.uri })) || [];
  return { text, sources };
};

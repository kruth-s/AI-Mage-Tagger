import { GoogleGenAI, Type } from "@google/genai";
import { ImageAnalysisResult, InlineData } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

// Fix: Combined the two schemas into a single schema for one API call.
const analysisSchema = {
  type: Type.OBJECT,
  properties: {
    caption: {
      type: Type.STRING,
      description: "A detailed, descriptive sentence that accurately summarizes the entire image.",
    },
    short_caption: {
      type: Type.STRING,
      description: "A very short, concise caption (3-5 words) that captures the main subject of the image."
    },
    tags_extracted: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
        description: "A broad list of 10-15 keywords and phrases extracted from the image's content."
    },
    final_tags: {
        type: Type.ARRAY,
        items: {
            type: Type.OBJECT,
            properties: {
                tag: { type: Type.STRING },
                score: { 
                    type: Type.NUMBER,
                    description: "A confidence score from 0.0 to 1.0 representing how visually relevant the tag is to the image."
                }
            },
            required: ["tag", "score"]
        },
        description: "A filtered list of the 5-7 most visually relevant tags from the extracted list, with corresponding confidence scores. Only include tags that are clearly depicted in the image."
    }
  },
  required: ["caption", "short_caption", "tags_extracted", "final_tags"]
};


export const generateImageAnalysis = async (imageData: InlineData): Promise<ImageAnalysisResult> => {
  try {
    // Fix: Created a single, comprehensive prompt to handle all analysis tasks in one go.
    const prompt = `You are an expert at analyzing images to generate descriptive metadata. For the provided image, perform the following tasks:
1.  **Generate Captions:** Create a detailed, descriptive sentence that accurately summarizes the entire image, and also a very short, concise caption (3-5 words) that captures the main subject.
2.  **Extract Tags:** Identify a broad list of 10-15 relevant keywords and phrases based on the image's content.
3.  **Filter & Score Tags:** From the extracted list, select the 5-7 most visually relevant tags. For each of these final tags, provide a confidence score from 0.0 to 1.0 indicating how strongly it is depicted in the image.

Format the entire output as a single JSON object adhering to the specified schema, including fields for \`caption\`, \`short_caption\`, \`tags_extracted\`, and \`final_tags\`.`;

    // Fix: Replaced two API calls with a single, more efficient call.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: { 
        parts: [
          { text: prompt },
          { inlineData: imageData }
        ] 
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: analysisSchema,
        temperature: 0.2,
      },
    });

    const resultJsonString = response.text.trim();
    const result: ImageAnalysisResult = JSON.parse(resultJsonString);
    
    // Sort final tags by score descending
    result.final_tags.sort((a: {score: number}, b: {score: number}) => b.score - a.score);

    return result;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error && error.message.includes('API_KEY')) {
        throw new Error("Invalid API Key. Please check your configuration.");
    }
    throw new Error("Failed to analyze image with Gemini API. The model may be unable to process this request.");
  }
};

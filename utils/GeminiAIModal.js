// utils/GeminiAIModal.js
/*
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
    },
];

// Adding randomness to ensure different questions even with same prompt
const getRandomPromptVariation = (basePrompt) => {
    const variations = [
        "Generate 5 unique interview questions on this topic:",
        "Provide 5 fresh and diverse questions based on:",
        "List 5 insightful questions avoiding repetition:",
    ];
    
    const randomVariation = variations[Math.floor(Math.random() * variations.length)];
    return `${randomVariation} ${basePrompt} (Timestamp: ${new Date().toISOString()})`;
};

export const chatSession = model.startChat({
    generationConfig,
    safetySettings,
});

export const getChatResponse = async (inputPrompt) => {
    const modifiedPrompt = getRandomPromptVariation(inputPrompt);
    const result = await chatSession.sendMessage(modifiedPrompt);
    return await result.response.text();
};
*/

// utils/GeminiAIModal.js
const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

const safetySettings = [
  {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
  {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
  },
];

// Adding randomness to ensure different questions even with same prompt
const getRandomPromptVariation = (basePrompt) => {
  const variations = [
      "Generate 5 unique interview questions on this topic:",
      "Provide 5 fresh and diverse questions based on:",
      "List 5 insightful questions avoiding repetition:",
  ];
  
  const randomVariation = variations[Math.floor(Math.random() * variations.length)];
  return `${randomVariation} ${basePrompt} (Timestamp: ${new Date().toISOString()})`;
};

export const chatSession = model.startChat({
  generationConfig,
  safetySettings,
});

export const getChatResponse = async (inputPrompt) => {
  const modifiedPrompt = getRandomPromptVariation(inputPrompt);
  const result = await chatSession.sendMessage(modifiedPrompt);
  return await result.response.text();
};

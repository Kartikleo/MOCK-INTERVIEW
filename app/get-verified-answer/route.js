import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { question } = await req.json();
    if (!question) {
      return NextResponse.json({ error: "No question provided" }, { status: 400 });
    }

    // Wikipedia API Call
    const wikiRes = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(question)}`
    );
    const wikiData = await wikiRes.json();

    if (wikiData?.extract) {
      return NextResponse.json({ source: "Wikipedia", answer: wikiData.extract });
    }

    // Fallback: Use OpenAI or Gemini (if Wikipedia doesn't return anything useful)
    const aiRes = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [
        {
          role: "system",
          content: "You're a professional career assistant helping with interview preparation.",
        },
        {
          role: "user",
          content: `Provide a verified and correct answer to the interview question: ${question}`,
        },
      ],
      temperature: 0.7,
    });

    const aiAnswer = aiRes.choices[0]?.message?.content;

    return NextResponse.json({ source: "AI", answer: aiAnswer });
  } catch (err) {
    console.error("Error in verified answer API:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

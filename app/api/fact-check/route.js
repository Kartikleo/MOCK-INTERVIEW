// app/api/fact-check/route.js

import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();
    const { claim, evidence } = body;

    const result = await hf.nli({
      premise: evidence,
      hypothesis: claim,
    });

    const label = result.labels[0].label; // e.g., 'entailment', 'neutral', 'contradiction'

    return new Response(JSON.stringify({ verdict: label }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

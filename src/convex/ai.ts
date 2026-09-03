"use node";

import { v } from "convex/values";
import { action } from "./_generated/server";
import { vly } from "../lib/vly-integrations";

export const generateAIResponse = action({
  args: { question: v.string() },
  handler: async (_ctx, args) => {
    const completion = await vly.ai.completion({
      model: "gpt-4o-mini",
      temperature: 0.4,
      maxTokens: 500,
      messages: [
        {
          role: "system",
          content: "You are a careful health education assistant. Answer only the user's specific question and do not reuse a generic response when the symptoms or topic are different. Briefly reflect the exact issue you understood, then give relevant practical steps, precautions, and urgent warning signs when relevant. Ask one focused follow-up question if important details are missing. Never diagnose, prescribe, or replace a clinician. Encourage professional care for persistent, worsening, or emergency symptoms. Keep responses concise and use plain text with short paragraphs.",
        },
        { role: "user", content: args.question },
      ],
    });

    if (!completion.success || !completion.data) {
      throw new Error(completion.error || "AI service unavailable");
    }

    return completion.data.choices[0]?.message.content || "I could not generate a response right now. Please try again.";
  },
});

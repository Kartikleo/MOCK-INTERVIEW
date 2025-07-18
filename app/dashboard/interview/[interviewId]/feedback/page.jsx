

"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { eq } from "drizzle-orm";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../../components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "../../../../../components/ui/button";
import { useRouter } from "next/navigation";
import { MdOutlineDashboardCustomize } from "react-icons/md";

function Feedback({ params }) {
  const [feedbackList, setFeedbackList] = useState([]);
  const router = useRouter();

  // Fetch all feedback
  useEffect(() => {
    GetFeedback();
  }, []);

  const GetFeedback = async () => {
    const result = await db
      .select()
      .from(UserAnswer)
      .where(eq(UserAnswer.mockIdRef, params.interviewId))
      .orderBy(UserAnswer.id);

    setFeedbackList(result);
  };

  // Fetch fact-check verdict
  const fetchFactCheckResult = async (claim, evidence) => {
    try {
      const res = await fetch("/app/api/fact-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ claim, evidence }),
      });

      const data = await res.json();
      return res.ok ? data.verdict : null;
    } catch (error) {
      console.error("Fact-check error:", error);
      return null;
    }
  };

  const fetchVerifiedAnswer = async (question) => {
    const res = await fetch("/api/get-verified-answer", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question }),
    });
    const data = await res.json();
    return data.answer || "No verified answer found.";
  };
  

  // Attach fact-check verdicts to each feedback item
  useEffect(() => {
    const runFactChecks = async () => {
      const updatedList = await Promise.all(
        feedbackList.map(async (item) => {
          const verdict = await fetchFactCheckResult(item.correctAns, item.userAns);
          return { ...item, verdict };
        })
      );
      setFeedbackList(updatedList);
    };

    if (feedbackList.length > 0) runFactChecks();
  }, [feedbackList.length]);

  return (
    <>
      <div className="p-10">
        {feedbackList?.length === 0 ? (
          <h2 className="font-bold text-xl text-gray-500">
            No Interview Feedback Record Found
          </h2>
        ) : (
          <>
            <h2 className="text-3xl font-bold text-green-600">
              Congratulations!
            </h2>
            <h2 className="font-bold text-2xl">
              Here is your interview feedback
            </h2>
            <h2 className="text-sm text-gray-500">
              Find below interview question with correct answer, Your answer and
              feedback for improvement.
            </h2>
            {feedbackList.map((item, index) => (
              <Collapsible key={index} className="mt-7">
                <CollapsibleTrigger className="p-2 bg-secondary rounded-lg my-2 flex justify-between text-left gap-7 w-full">
                  {item.question}
                  <ChevronsUpDown className="h-5 w-5" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-red-500 p-2 border rounded-lg">
                      <strong>Rating: </strong>
                      {item.rating}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-red-50 text-sm text-red-900">
                      <strong>Your Answer: </strong>
                      {item.userAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-green-50 text-sm text-green-900">
                      <strong>Correct Answer: </strong>
                      {item.correctAns}
                    </h2>
                    <h2 className="p-2 border rounded-lg bg-yellow-50 text-sm text-yellow-900">
                      <strong>Feedback: </strong>
                      {item.feedback}
                    </h2>
                    {item.verdict && (
                      <h2 className="p-2 border rounded-lg bg-blue-50 text-sm text-blue-900">
                        <strong>Fact-Check Verdict: </strong>
                        {item.verdict}
                      </h2>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </>
        )}
        <Button
          onClick={() => router.replace("/dashboard")}
          className="flex gap-1 my-4 bg-green-600 hover:bg-green-700"
        >
          Return to Dashboard
          <MdOutlineDashboardCustomize className="w-4 h-4" />
        </Button>
      </div>
    </>
  );
}

export default Feedback;

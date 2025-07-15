"use client";
import React, { useEffect, useState } from "react";
import { MockInterview } from "../../../../../utils/schema";
import { db } from "../../../../../utils/db";
import { eq } from "drizzle-orm";
import QuestionSection from "./_components/QuestionSection";
import RecordQuestionSection from "./_components/RecordQuestionSection";
import { Button } from "../../../../../components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState();
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [score, setScore] = useState(0); // ✅ Track score
  const [badges, setBadges] = useState([]); // ✅ Track earned badges

  useEffect(() => {
    GetInterviewDetails();
  }, []);

  // ✅ Fetch interview details
  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));

      const jsonMockResp = JSON.parse(result[0].jsonMockResp);
      console.log(jsonMockResp);
      setMockInterviewQuestion(jsonMockResp);
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };
  
  
  
  

  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Questions */}
          <QuestionSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
          />
          {/* Video / Audio Recording */}
          <RecordQuestionSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
            interviewData={interviewData}
          />
        </div>

        {/* ✅ Show Earned Badges */}
        {badges.length > 0 && (
          <div className="mt-4 p-3 border rounded-lg bg-yellow-100">
            <h3 className="font-bold text-lg">🏆 New Badges Earned:</h3>
            <ul>
              {badges.map((badge, index) => (
                <li key={index} className="text-green-600">
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex justify-end gap-6 mt-5">
          {activeQuestionIndex > 0 && (
            <Button
              className="gap-1"
              onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
            >
              <IoIosArrowBack className="w-4 h-4" />
              Previous Question
            </Button>
          )}

          {activeQuestionIndex !== mockInterviewQuestion?.length - 1 && (
            <Button
              onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
            >
              Next Question
              <MdNavigateNext className="w-5 h-5" />
            </Button>
          )}

          {activeQuestionIndex === mockInterviewQuestion?.length - 1 && (
             <Link href={`/dashboard/interview/${interviewData.mockId}/feedback`}>
            <Button onClick={() => completeInterview(95)}>End Interview </Button>
            </Link>

          
          )}
        </div>
      </div>
    </>
  );
}

export default StartInterview;

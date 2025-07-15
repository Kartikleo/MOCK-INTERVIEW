import { pgTable, serial, text, varchar ,boolean,integer} from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt: varchar('createdAt'),
    mockId: varchar('mockId').notNull(),
    isShared: boolean('isShared').default(false)
})
export const UserAnswer = pgTable('userAnswer', {
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail: varchar('userEmail'),
    createdAt: varchar('createadAt'),
    isShared: boolean("isShared").default(false)
})




















/*
export const VerifiedAnswers = pgTable("verified_answers", {
    id: serial("id").primaryKey(),
    question: text("question").notNull().unique(),
    verifiedAnswer: text("verified_answer").notNull(),
    source: text("source").default("Wikipedia"),
  });
  */
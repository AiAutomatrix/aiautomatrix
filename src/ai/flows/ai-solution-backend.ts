// use server

// import * as Genkit from '@genkit-ai/core';
// import { z } from 'zod';

// const flow = new Genkit.MultiPromptFlow({
//   name: "ai-solution-backend",
//   inputSchema: z.object({
//     userNeed: z.string().describe("The user's need for an AI solution"),
//     userBudget: z.string().describe("The user's budget for an AI solution"),
//   }),
//   outputSchema: z.object({
//     solution: z.string().describe("The AI solution to implement"),
//     estimatedCost: z.string().describe("The estimated cost of the AI solution"),
//   }),
//   prompts: [
//     {
//       name: "solution",
//       prompt: `You are an AI expert. A user needs an AI solution. The user's need is: {{ $input.userNeed }}. The user's budget is: {{ $input.userBudget }}. What AI solution should the user implement?`,
//       inputValues: {
//         userNeed: new Genkit.InputValue({
//           name: "userNeed",
//           description: "The user's need for an AI solution",
//         }),
//         userBudget: new Genkit.InputValue({
//           name: "userBudget",
//           description: "The user's budget for an AI solution",
//         }),
//       },
//       outputValue: new Genkit.OutputValue({
//         name: "solution",
//         description: "The AI solution to implement",
//       }),
//     },
//     {
//       name: "estimatedCost",
//       prompt: `You are a cost estimator. An AI solution will be implemented. The AI solution is: {{ $input.solution }}. What is the estimated cost of the AI solution?`,
//       inputValues: {
//         solution: new Genkit.InputValue({
//           name: "solution",
//           description: "The AI solution to implement",
//         }),
//       },
//       outputValue: new Genkit.OutputValue({
//         name: "estimatedCost",
//         description: "The estimated cost of the AI solution",
//       }),
//     },
//   ],
// });

// export async function runAiSolutionBackend(userNeed: string, userBudget: string) {
//   const result = await Genkit.invoke(flow, { userNeed, userBudget });
//   return result;
// }

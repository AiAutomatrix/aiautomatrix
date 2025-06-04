// import { InputValue, invoke, MultiPromptFlow, OutputValue } from '@genkit-ai/core';
// import { z } from "zod";

// const flow = new MultiPromptFlow({
//   name: "personalized-bot-demo",
//   inputSchema: z.object({
//     userNeed: z.string().describe("The user's need for a personalized bot demo"),
//     userBudget: z.string().describe("The user's budget for a personalized bot demo"),
//   }),
//   outputSchema: z.object({
//     solution: z.string().describe("The personalized bot demo to implement"),
//     estimatedCost: z.string().describe("The estimated cost of the personalized bot demo"),
//   }),
//   prompts: [
//     {
//       name: "solution",
//       prompt: `You are an AI expert. A user needs a personalized bot demo. The user's need is: {{ $input.userNeed }}. The user's budget is: {{ $input.userBudget }}. What personalized bot demo should the user implement?`,
//       inputValues: {
//         userNeed: new InputValue({
//           name: "userNeed",
//           description: "The user's need for a personalized bot demo",
//         }),
//         userBudget: new InputValue({
//           name: "userBudget",
//           description: "The user's budget for a personalized bot demo",
//         }),
//       },
//       outputValue: new OutputValue({
//         name: "solution",
//         description: "The personalized bot demo to implement",
//       }),
//     },
//     {
//       name: "estimatedCost",
//       prompt: `You are a cost estimator. A personalized bot demo will be implemented. The personalized bot demo is: {{ $input.solution }}. What is the estimated cost of the personalized bot demo?`,
//       inputValues: {
//         solution: new InputValue({
//           name: "solution",
//           description: "The personalized bot demo to implement",
//         }),
//       },
//       outputValue: new OutputValue({
//         name: "estimatedCost",
//         description: "The estimated cost of the personalized bot demo",
//       }),
//     },
//   ],
// });

// async function generatePersonalizedBotDemo(prompt: string) {
//   // Placeholder function
//   return { response: `This is a personalized bot demo response for the prompt: ${prompt}` };
// }

// interface PersonalizedBotDemoInput {
//   prompt: string;
// }

// interface PersonalizedBotDemoOutput {
//   response: string;
// }

// export {
//   generatePersonalizedBotDemo,
//   type PersonalizedBotDemoInput,
//   type PersonalizedBotDemoOutput
// };

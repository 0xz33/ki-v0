import OpenAI from "openai";

const client = new OpenAI();

export async function POST(request) {
  return Response
    .json
    // TODO Figure out how src/app/components/TestForm/index.js is forming body to send (use console.log(request) and inspect )
    // uncomment createCompletion(request.body.prompt, request.body.max_tokens)
    // remove createCompletion("test", 60)

    // make sure you know how async await returns the createCompletion return value
    // make sure you know how nextjs handles Response.Json(data), for async values
    ();
}

async function createCompletion(prompt, maxTokens) {
  console.log(prompt);
  console.log(maxTokens);

  const response = await client.chat.completions.create({
    messages: [{ role: "user", content: "How old are you?" }],
    model: "gpt-3.5-turbo",
  });

  console.log(response.choices[0].message.content);
  return response;
}

"use client";
import { useState } from "react";

function TestForm() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/pages/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { prompt: input, max_tokens: 60 },
      });

      if (!response.ok) {
        throw new Error("Response from server was not ok");
      }

      const data = await response.json();
      setOutput(data.choices[0].text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Submit</button>
      {output && <p>{output}</p>}
    </form>
  );
}

export default TestForm;

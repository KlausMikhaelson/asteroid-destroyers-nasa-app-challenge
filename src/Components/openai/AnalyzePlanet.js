import OpenAI from "openai";
import { useState } from "react";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const AnalyzePlanet = () => {
  const [aiResponse, setAiResponse] = useState(null);

  const handleClick = async () => {
    try {
      
      const messageContent = response.choices[0].message.content;
      setAiResponse(messageContent);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 onClick={handleClick}>Analysis of Exoplanet Habitability</h1>
      <p>
        {aiResponse || "Click the title to analyze the planet's habitability."}
      </p>
    </div>
  );
};

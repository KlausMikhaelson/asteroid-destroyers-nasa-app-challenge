import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const generateHabitabilityResponse = async (planetDetails) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4", // Specify the model
      messages: [
        {
          role: "system",
          content:
            "Take this JSON input and using the Habitable Worlds Observatory, characterize if an exoplanet is habitable or not, return either true or false. STRICTLY GIVE ONLY TRUE OR FALSE AS AN ANSWER.",
        },
        {
          role: "user",
          content: JSON.stringify({
            planet_details: {
              pl_name: planetDetails.pl_name,
              hostname: planetDetails.hostname,
              sy_snum: planetDetails.sy_snum,
              disc_year: planetDetails.disc_year,
              discoverymethod: planetDetails.discoverymethod,
              pl_rade: planetDetails.pl_rade,
              st_rad: planetDetails.st_rad,
              st_teff: planetDetails.st_teff,
              sy_dist: planetDetails.sy_dist,
              st_logg: planetDetails.st_logg,
              st_spectype: planetDetails.st_spectype,
              pl_orbper: planetDetails.pl_orbper,
              x: planetDetails.x,
              y: planetDetails.y,
              z: planetDetails.z,
              scaled_pl_rade: planetDetails.scaled_pl_rade,
              category: planetDetails.category,
            },
          }),
        },
      ],
      temperature: 0.5, // Optional: Control temperature for more deterministic responses
      max_tokens: 50,   // Optional: Limit the response length
    });

    // Return the content from the assistant's response
    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error("Error generating habitability response:", error);
    throw error;
  }
};
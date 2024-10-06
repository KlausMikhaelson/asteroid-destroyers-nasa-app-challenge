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
      const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: [
              {
                type: "text",
                text: "Take this JSON input and using the Habitable Worlds Observatory and characetrize if a exoplanet is habitable or not, return either true or false\n\nSTRICTLY GIVE ONLY TRUE OR FALSE AS AN ANSWER\n",
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: '`{\n  "planet_details": {\n    "X": -2.980809406980462,\n    "Y": 18.462715011846296,\n    "Z": -6.533222151481009,\n    "dec": -19.2561808,\n    "dec_rad": -0.3360837563193157,\n    "disc_year": 2011,\n    "eccentricity_score": 0.94,\n    "habitability_score": 0.0,\n    "habitable": true,\n    "habitable_zone_center_au": 1.1996256784170458,\n    "habitable_zone_inner": 0.9830379628293284,\n    "habitable_zone_outer": 1.4162133940047632,\n    "habitable_zone_width_au": 0.2165877155877174,\n    "hostname": "7 CMa",\n    "hz_score": 0.0,\n    "pl_eqt": 817.0,\n    "pl_name": "7 CMa b",\n    "pl_orbeccen": 0.06,\n    "pl_orbincl": 90.0,\n    "pl_orbper": 735.1,\n    "pl_orbsmax": 1.758,\n    "pl_rade": 13.4,\n    "ra": 99.171276,\n    "ra_rad": 1.7308652896040322,\n    "size_score": 4.0873349728658875e-34,\n    "snr": 35112.07067625321,\n    "st_lum": 1.063,\n    "st_rad": 4.87,\n    "st_teff": 4826.0,\n    "sy_dist": 19.8101,\n    "sy_snum": 1,\n    "temp_score": 9.097689558799636e-59\n  }\n}\n`\n',
              },
            ],
          },
          {
            role: "assistant",
            content: [
              {
                type: "text",
                text: 'Based on the provided data, let\'s analyze whether the exoplanet "7 CMa b" is habitable:\n\n1. **Habitability Score**: The habitability score is 0.0, indicating no habitability.\n2. **Temperature**: The equilibrium temperature of the planet is 817.0 K, which is too high for life as we know it.\n3. **Size**: The radius of the planet is 13.4 Earth radii, suggesting it is likely a gas giant, similar to Jupiter or Saturn, which are not habitable.\n4. **Orbital Characteristics and Host Star**: The planet appears to orbit within the specified habitable zone, but the other statistical scores (size_score, temp_score) are extremely low or negligible, indicating poor conditions for habitability.\n\nGiven the above factors, this exoplanet is not habitable.\n\nHabitable: **False**',
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: '`{\n  "planet_details": {\n    "X": -2.980809406980462,\n    "Y": 18.462715011846296,\n    "Z": -6.533222151481009,\n    "dec": -19.2561808,\n    "dec_rad": -0.3360837563193157,\n    "disc_year": 2011,\n    "eccentricity_score": 0.94,\n    "habitability_score": 0.0,\n    "habitable": true,\n    "habitable_zone_center_au": 1.1996256784170458,\n    "habitable_zone_inner": 0.9830379628293284,\n    "habitable_zone_outer": 1.4162133940047632,\n    "habitable_zone_width_au": 0.2165877155877174,\n    "hostname": "7 CMa",\n    "hz_score": 0.0,\n    "pl_eqt": 817.0,\n    "pl_name": "7 CMa b",\n    "pl_orbeccen": 0.06,\n    "pl_orbincl": 90.0,\n    "pl_orbper": 735.1,\n    "pl_orbsmax": 1.758,\n    "pl_rade": 13.4,\n    "ra": 99.171276,\n    "ra_rad": 1.7308652896040322,\n    "size_score": 4.0873349728658875e-34,\n    "snr": 35112.07067625321,\n    "st_lum": 1.063,\n    "st_rad": 4.87,\n    "st_teff": 4826.0,\n    "sy_dist": 19.8101,\n    "sy_snum": 1,\n    "temp_score": 9.097689558799636e-59\n  }\n}\n`',
              },
            ],
          },
          {
            role: "assistant",
            content: [
              {
                type: "text",
                text: "FALSE",
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: '{\n              "planet_details": {\n                "X": -2.980809406980462,\n                "Y": 18.462715011846296,\n                "Z": -6.533222151481009,\n                "dec": -19.2561808,\n                "dec_rad": -0.3360837563193157,\n                "disc_year": 2011,\n                "eccentricity_score": 0.94,\n                "habitability_score": 0.0,\n                "habitable": true,\n                "habitable_zone_center_au": 1.1996256784170458,\n                "habitable_zone_inner": 0.9830379628293284,\n                "habitable_zone_outer": 1.4162133940047632,\n                "habitable_zone_width_au": 0.2165877155877174,\n                "hostname": "7 CMa",\n                "hz_score": 0.0,\n                "pl_eqt": 817.0,\n                "pl_name": "7 CMa b",\n                "pl_orbeccen": 0.06,\n                "pl_orbincl": 90.0,\n                "pl_orbper": 735.1,\n                "pl_orbsmax": 1.758,\n                "pl_rade": 13.4,\n                "ra": 99.171276,\n                "ra_rad": 1.7308652896040322,\n                "size_score": 4.0873349728658875e-34,\n                "snr": 35112.07067625321,\n                "st_lum": 1.063,\n                "st_rad": 4.87,\n                "st_teff": 4826.0,\n                "sy_dist": 19.8101,\n                "sy_snum": 1,\n                "temp_score": 9.097689558799636e-59\n              }\n            }',
              },
            ],
          },
          {
            role: "assistant",
            content: [
              {
                type: "text",
                text: "FALSE",
              },
            ],
          },
          {
            role: "assistant",
            content: [
              {
                type: "text",
                text: "",
              },
            ],
            tool_calls: [
              {
                id: "call_LaQzVbyXk9EakOWbzO3LqLES",
                type: "function",
                function: {
                  name: "update_planet_details",
                  arguments:
                    '{"planet_details":{"X":-2.980809406980462,"Y":18.462715011846296,"Z":-6.533222151481009,"dec":-19.2561808,"dec_rad":-0.3360837563193157,"disc_year":2011,"eccentricity_score":0.94,"habitability_score":0.0,"habitable":false,"habitable_zone_center_au":1.1996256784170458,"habitable_zone_inner":0.9830379628293284,"habitable_zone_outer":1.4162133940047632,"habitable_zone_width_au":0.2165877155877174,"hostname":"7 CMa","hz_score":0.0,"pl_eqt":817.0,"pl_name":"7 CMa b","pl_orbeccen":0.06,"pl_orbincl":90.0,"pl_orbper":735.1,"pl_orbsmax":1.758,"pl_rade":13.4,"ra":99.171276,"ra_rad":1.7308652896040322,"size_score":4.0873349728658875e-34,"snr":35112.07067625321,"st_lum":1.063,"st_rad":4.87,"st_teff":4826.0,"sy_dist":19.8101,"sy_snum":1,"temp_score":9.097689558799636e-59}}',
                },
              },
            ],
          },
          {
            role: "tool",
            content: [
              {
                type: "text",
                text: "",
              },
            ],
            tool_call_id: "call_LaQzVbyXk9EakOWbzO3LqLES",
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                text: '{\n              "planet_details": {\n                "X": -2.980809406980462,\n                "Y": 18.462715011846296,\n                "Z": -6.533222151481009,\n                "dec": -19.2561808,\n                "dec_rad": -0.3360837563193157,\n                "disc_year": 2011,\n                "eccentricity_score": 0.94,\n                "habitability_score": 0.0,\n                "habitable": true,\n                "habitable_zone_center_au": 1.1996256784170458,\n                "habitable_zone_inner": 0.9830379628293284,\n                "habitable_zone_outer": 1.4162133940047632,\n                "habitable_zone_width_au": 0.2165877155877174,\n                "hostname": "7 CMa",\n                "hz_score": 0.0,\n                "pl_eqt": 817.0,\n                "pl_name": "7 CMa b",\n                "pl_orbeccen": 0.06,\n                "pl_orbincl": 90.0,\n                "pl_orbper": 735.1,\n                "pl_orbsmax": 1.758,\n                "pl_rade": 13.4,\n                "ra": 99.171276,\n                "ra_rad": 1.7308652896040322,\n                "size_score": 4.0873349728658875e-34,\n                "snr": 35112.07067625321,\n                "st_lum": 1.063,\n                "st_rad": 4.87,\n                "st_teff": 4826.0,\n                "sy_dist": 19.8101,\n                "sy_snum": 1,\n                "temp_score": 9.097689558799636e-59\n              }\n            }',
              },
            ],
          },
          {
            role: "assistant",
            content: [
              {
                type: "text",
                text: "FALSE",
              },
            ],
          },
          {
            role: "user",
            content: [
              {
                type: "text",
                // TODO: REPLACE WITH JSON INPUT FOR ANOTHER PLANET
                text: '{"planet_details": { "X": 5.2, "Y": -10.3, "Z": 2.4, "dec": 22.5, "dec_rad": 0.3927, "disc_year": 2025,"eccentricity_score": 0.05, "habitability_score": 0.95, "habitable": true, "habitable_zone_center_au": 1.0, "habitable_zone_inner": 0.9, "habitable_zone_outer": 1.5, "habitable_zone_width_au": 0.6, "hostname": "Star E1", "hz_score": 0.9, "pl_eqt": 288.0, "pl_name": "Star E1 b", "pl_orbeccen": 0.02, "pl_orbincl": 89.0, "pl_orbper": 365.25, "pl_orbsmax": 1.0, "pl_rade": 1.0, "ra": 150.55, "ra_rad": 2.6273,"size_score": 0.85, "snr": 10000.0, "st_lum": 1.0, "st_rad": 1.0, "st_teff": 5780.0, "sy_dist": 15.0, "sy_snum": 1, "temp_score": 0.9 }}',
              },
            ],
          },
        ],
        temperature: 1,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        tools: [
          {
            type: "function",
            function: {
              name: "update_planet_details",
              description:
                "Updates the details of a specified planet based on provided JSON input.",
              parameters: {
                type: "object",
                required: ["planet_details"],
                properties: {
                  planet_details: {
                    type: "object",
                    required: [
                      "X",
                      "Y",
                      "Z",
                      "dec",
                      "dec_rad",
                      "disc_year",
                      "eccentricity_score",
                      "habitability_score",
                      "habitable",
                      "habitable_zone_center_au",
                      "habitable_zone_inner",
                      "habitable_zone_outer",
                      "habitable_zone_width_au",
                      "hostname",
                      "hz_score",
                      "pl_eqt",
                      "pl_name",
                      "pl_orbeccen",
                      "pl_orbincl",
                      "pl_orbper",
                      "pl_orbsmax",
                      "pl_rade",
                      "ra",
                      "ra_rad",
                      "size_score",
                      "snr",
                      "st_lum",
                      "st_rad",
                      "st_teff",
                      "sy_dist",
                      "sy_snum",
                      "temp_score",
                    ],
                    properties: {
                      X: {
                        type: "number",
                        description: "X coordinate of the planet",
                      },
                      Y: {
                        type: "number",
                        description: "Y coordinate of the planet",
                      },
                      Z: {
                        type: "number",
                        description: "Z coordinate of the planet",
                      },
                      dec: {
                        type: "number",
                        description: "Declination of the planet",
                      },
                      dec_rad: {
                        type: "number",
                        description: "Declination in radians",
                      },
                      disc_year: {
                        type: "integer",
                        description: "Year of discovery of the planet",
                      },
                      eccentricity_score: {
                        type: "number",
                        description: "Eccentricity score of the planet's orbit",
                      },
                      habitability_score: {
                        type: "number",
                        description: "Habitability score of the planet",
                      },
                      habitable: {
                        type: "boolean",
                        description: "Indicates if the planet is habitable",
                      },
                      habitable_zone_center_au: {
                        type: "number",
                        description:
                          "Habitable zone center in astronomical units",
                      },
                      habitable_zone_inner: {
                        type: "number",
                        description: "Inner edge of the habitable zone in AU",
                      },
                      habitable_zone_outer: {
                        type: "number",
                        description: "Outer edge of the habitable zone in AU",
                      },
                      habitable_zone_width_au: {
                        type: "number",
                        description:
                          "Width of the habitable zone in astronomical units",
                      },
                      hostname: {
                        type: "string",
                        description: "Host star name of the planet",
                      },
                      hz_score: {
                        type: "number",
                        description: "Habitable zone score",
                      },
                      pl_eqt: {
                        type: "number",
                        description: "Equilibrium temperature of the planet",
                      },
                      pl_name: {
                        type: "string",
                        description: "Name of the planet",
                      },
                      pl_orbeccen: {
                        type: "number",
                        description: "Orbital eccentricity of the planet",
                      },
                      pl_orbincl: {
                        type: "number",
                        description: "Orbital inclination of the planet",
                      },
                      pl_orbper: {
                        type: "number",
                        description: "Orbital period of the planet in days",
                      },
                      pl_orbsmax: {
                        type: "number",
                        description:
                          "Semi-major axis of the planet's orbit in AU",
                      },
                      pl_rade: {
                        type: "number",
                        description: "Radius of the planet",
                      },
                      ra: {
                        type: "number",
                        description: "Right ascension of the planet",
                      },
                      ra_rad: {
                        type: "number",
                        description: "Right ascension in radians",
                      },
                      size_score: {
                        type: "number",
                        description: "Size score of the planet",
                      },
                      snr: {
                        type: "number",
                        description:
                          "Signal-to-noise ratio of the planet's detection",
                      },
                      st_lum: {
                        type: "number",
                        description: "Luminosity of the host star",
                      },
                      st_rad: {
                        type: "number",
                        description: "Radius of the host star",
                      },
                      st_teff: {
                        type: "number",
                        description: "Effective temperature of the host star",
                      },
                      sy_dist: {
                        type: "number",
                        description:
                          "Distance to the star system in light-years",
                      },
                      sy_snum: {
                        type: "integer",
                        description: "Number of stars in the system",
                      },
                      temp_score: {
                        type: "number",
                        description: "Temperature suitability score",
                      },
                    },
                    additionalProperties: false,
                  },
                },
                additionalProperties: false,
              },
              strict: true,
            },
          },
        ],
      });

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

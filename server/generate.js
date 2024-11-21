import openai from "./api.js";

const generate = async (queryDescription) => {

  const daVinci = async (queryDescription) => {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: `Convert the following natural language description into a SQL query:\n\n${queryDescription}`,
      max_tokens: 100,
      temperature: 0,
    });
    return response.choices[0].text.trim();
  };

  const chatGPT = async (queryDescription) => {
    const message = [
      { role: "system", content: `You are a translator from plain English to SQL.` },
      { role: "user", content: `Convert the following natural language description into a SQL query:\n\n${queryDescription}` },
    ];
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: message,
    });

    return response.choices[0].message.content.trim();
  }

  // Choose between DaVinci or ChatGPT (optional: you can add logic here to choose model dynamically)
  const sqlQuery = await chatGPT(queryDescription); // You can replace this with daVinci if needed
  return sqlQuery;

};

export default generate;

const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();

const configuration = new Configuration({
  organization: process.env.OPENAI_API_ORG, //Insert your own organisation code
  apiKey: process.env.OPENAI_API_KEY, //Set your own api key by creating an OpenAI account
});
const openai = new OpenAIApi(configuration);

const aiCall = async (userPrompt) => {
  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userPrompt }],
      max_tokens: 100,
    });
    console.log(response.data.choices[0].message.content);
    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};

module.exports = aiCall;

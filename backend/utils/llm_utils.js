import {JsonOutputParser } from "@langchain/core/output_parsers";
import {
  ChatPromptTemplate,
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";
import { ChatFireworks } from "@langchain/community/chat_models/fireworks";

export class LLMUtils {
   provider;

  // Constructor to initialize SDK instances
  constructor(fireworksApiKey, modelName, maxTokens) {
    this.provider = new ChatFireworks({
      fireworksApiKey: fireworksApiKey,
      modelName: modelName,
      maxTokens: maxTokens,
    });
    console.log("FIREWORKS connected")
  }

  // Chat completion.
  async chatCompletion(sysPrompt, humanPrompt, argsValues) {
    const chatPrompt = ChatPromptTemplate.fromMessages([
      SystemMessagePromptTemplate.fromTemplate(sysPrompt),
      HumanMessagePromptTemplate.fromTemplate(humanPrompt),
    ]);
    const outputParser = new JsonOutputParser();
    const chain = chatPrompt.pipe(this.provider).pipe(outputParser);
    const response = await chain.invoke(argsValues);
    return response;
  }
}

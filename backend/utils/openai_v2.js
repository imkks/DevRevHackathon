import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  organization: process.env.org_name
});
// let originalText="im krishna";
const sysPrompt=`
                Here is a list of reviews:

                {reviews_data}

                Your job is to categorize these reviews into one of these parent tags(parent_tag):
                1. Feature Request
                2. Bug
                3. Question
                4. Others

                Further for each of the parent-tags, classify the review based on parent tags in these sub categories(subTag):
                1. Feature request - [UI/UX improvements, Aditional features, Feature Upgrade]
                2. Bug - [Application crashes/freezes, Functionality issues, Data synchronization issues]
                3. Question [Application functionality, Future updates, Integration,]
                4. Others - [Others]

                Also for all reviews, tag them on the basis of their sentiment in one of the following classes:
                1. Sentiment - [Positive, Neutral, Negative]

                Now group all the reviews according to the parent tags. Based on this information and group of reviews, prepare a review summary of each group.

                Finally for all this computation, provide these details in the following structured JSON format. Also if you need some assistance for formatting, refer to the Sample output JSON.

                [
                    {
                        "parent_tag1": "Feature request/Bug/Question/Others",
                        "no_of_reviews": 2,
                        "Summary": Summary of entire review,
                        "Reviews": {

                                "review_1": ["Tweet","subTag", "sentiment_tag"],
                                "review_2": ["Tweet","subTag", "sentiment_tag"],
                                ...

                        }
                    },
                    {
                        "parent_tag": "Feature request/Bug/Question/Others",
                        "no_of_reviews": 2,
                        "Summary": null,
                        "Reviews": {

                                "review_1": ["Tweet","subTag", "sentiment_tag"],
                                "review_2": ["Tweet","subTag", "sentiment_tag"],
                                ...

                        }
                    },
                    {
                        "parent_tag": "Feature request/Bug/Question/Others",
                        "no_of_reviews": null,
                        "Summary": null,
                        "Reviews": {

                                "review_1": ["Tweet","subTag", "sentiment_tag"],
                                "review_2": ["Tweet","subTag", "sentiment_tag"],
                                ...

                        }
                    },
                    {...}
                ]

                Sample output:

                [
                    {
                        "tag1": "Feature request",
                        "noOfTweets": 10,
                        "summary": "Users are requesting new features such as dark mode, CSV data export, customizable dashboard, search feature, reminders, task sorting, calendar integration, etc.",
                        "Reviews": {
                            "Twitter": {
                                "tweet1": ["Hey @AppDevTeam, love your app but it would be amazing if you could add a dark mode option! #FeatureRequest", "UI improvements", "Positive"],
                            }
                        }
                    },
                    {
                        "tag2": "Bug",
                        "noOfTweets": 10,
                        "summary": "Users are reporting bugs related to app crashes, freezing, incorrect data display, login issues, synchronization problems, etc.",
                        "Reviews": {
                            "Twitter": {
                                "tweet1": ["Hey @AppDevTeam, just encountered a bug where the app crashes every time I try to open the settings menu. Can you please fix it? #Bug", "Application crashes/freezes", "Negative"],
                            }
                        }
                    },
                    {
                        "tag3": "Question",
                        "noOfTweets": 10,
                        "summary": "Users have questions about features like dark mode, data export, task scheduling, language support, notifications, etc.",
                        "Reviews": {
                            "Twitter": {
                                "tweet1": ["Hey @AppDevTeam, I'm curious if there's a way to export my data from the app to a CSV file for analysis. Can you guide me on how to do it? #Question", "Application functionality", "Neutral"],
                            }
                        }
                    }
                ]`
export const chatCompletion=async (humanPrompt, argsValues)=> {
    let response= await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0125",
        // response_format:{"type},
        messages: [
          {
            "role": "system",
            "content": sysPrompt//prompt
          },
          {
            "role": "user",
            "content": humanPrompt//reviews
          }
        ],
        temperature: 0.8,
        max_tokens: 2500,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
    // const outputParser = new JsonOutputParser();
    // const chain = chatPrompt.pipe(this.provider).pipe(outputParser);
    // const response = await chain.invoke(argsValues);
    // console.log(response);
    return response.choices[0].message;
    // return response.choices[0].message.content
  }
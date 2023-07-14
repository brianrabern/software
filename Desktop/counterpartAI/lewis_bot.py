import openai
import os
from dotenv import load_dotenv

# need OpenAI API key
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = api_key

# get user input
user_prompt = input("Enter your question: ")

# response from the fine-tuned model
response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[
        {
            "role": "system",
            "content": "You are an AI assistant with knowledge of David Lewis and his philosophical outlook. You are an expert on his book 'The Plurality of Worlds', and his thesis of modal realism. You respond to queries as if you are the philosopher David Lewis.",
        },
        {"role": "user", "content": user_prompt},
    ],
)

# print the response
generated_response = response.choices[0].message.content

print(generated_response)

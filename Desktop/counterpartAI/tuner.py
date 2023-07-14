import openai
import json
import os
from dotenv import load_dotenv

# need OpenAI API key
load_dotenv()
api_key = os.getenv("OPENAI_API_KEY")
openai.api_key = api_key

# load the preprocessed dataset
with open("dataset.json", "r") as file:
    dataset = json.load(file)


# split the dataset into smaller chunks
max_messages_per_call = 48

chunks = [
    dataset[i: i + max_messages_per_call]
    for i in range(0, len(dataset), max_messages_per_call)
]

# fine-tune the model
for chunk in chunks:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo", messages=chunk, temperature=0.8, max_tokens=50
    )

    generated_response = response.choices[0].message.content
    print(generated_response)

    # might be useful to sleep for a few seconds to aviod rate limits
    # time.sleep(2)

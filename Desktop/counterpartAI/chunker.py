import json


# chunk it up: preprocess the dataset
def chunk_it(book_text):
    chunk_size = 200

    chunks = []
    i = 0

    while i < len(book_text):
        prompt = book_text[i: i + chunk_size]
        completion = book_text[i + chunk_size: i + (2 * chunk_size)]

        data = [
            {
                "role": "system",
                "content": "You are an AI assistant with knowledge of David Lewis and his philosophical outlook. You are an expert on his book 'The Plurality of Worlds', and his thesis of modal realism. You respond to queries as if you are the philosopher David Lewis.",
            },
            {"role": "user", "content": prompt},
            {"role": "assistant", "content": completion},
        ]

        chunks.extend(data)
        i += chunk_size

    return chunks


with open("plurality.txt", "r", encoding="utf-8") as file:
    book_text = file.read()

# preprocess
dataset = chunk_it(book_text)

# dump it into a json file
with open("dataset.json", "w", encoding="utf-8") as file:
    json.dump(dataset, file, indent=4)

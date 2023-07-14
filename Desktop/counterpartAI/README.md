# counterpartAI

counterpartAI is a project that leverages OpenAI's GPT-3.5-turbo model to create an AI assistant capable of answering questions and engaging in conversations about David Lewis and his philosophical outlook -- currently it is limited to his book "The Plurality of Worlds".

## Prerequisites

To use counterpartAI, you need to have the following:

- Python 3.7 or higher installed on your machine.
- An OpenAI API key. You can obtain one by signing up on the OpenAI website.

## Installation

1. Clone the counterpartAI repository to your local machine:

```
git clone https://github.com/your-username/counterpartAI.git
```

2. Navigate to the project directory:

```
cd counterpartAI
```

3. Install the required dependencies:

```
pip install -r requirements.txt
```

4. Set up your OpenAI API key:

- Create a new file named `.env` in the project directory.
- Open the `.env` file and add the following line, replacing `<your-api-key>` with your actual OpenAI API key:

```
OPENAI_API_KEY=<your-api-key>
```

## Usage

### Preprocessing the Dataset

1. The book text used for fine-tuning is in a file named `plurality.txt` (one could use other things here).

2. Run the `chunker.py` script to preprocess the dataset:

```
python chunker.py
```

This script will chunk the book text into smaller segments and create a preprocessed dataset stored in `dataset.json`.

### Fine-tuning the Model

1. Run the `tuner.py` script to fine-tune the GPT-3.5-turbo model using the preprocessed dataset:

```
python tuner.py
```

This script will utilize the OpenAI API to fine-tune the model based on the dataset and generate responses for the given prompts.

### Using counterpartAI

1. To interact with the AI assistant, run the `lewis_bot.py` script:

```
python lewis_bot.py
```

2. Enter your question or query when prompted.

The script will utilize the fine-tuned model to provide responses based on your input and the knowledge of David Lewis's book /The Plurality of Worlds/.

## Limitations

- So far I've essentially just connected the wires to see if it would even work.
- The quality and accuracy of the responses generated heavily depend on the training data and the fine-tuning process, and at the moment this is not even close to optimized.

## Contributing

Contributions to counterpartAI are welcome! If you have any suggestions, improvements, or bug fixes, feel free to open an issue or submit a pull request.

# Import libraries ------------------------------------------< JOHN TAG
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import MultiLabelBinarizer

from transformers import BertTokenizer, BertModel

import torch
from torch.utils.data import TensorDataset, DataLoader, RandomSampler, SequentialSampler

import re
import numpy as np

# Declare variables ------------------------------------------< JOHN TAG
dataset_path = 'dataset/game_dataset.csv'
# game_genres = ["Action", "Adventure", "Role-Playing Games (RPG)", "Simulation", "Strategy", "Sports", "Racing", "Puzzle", "Horror", "Multiplayer Online Battle Arena (MOBA)"]

# Declare functions------------------------------------------< JOHN TAG

# Read dataset ------------------------------------------< JOHN TAG
df = pd.read_csv(dataset_path)
print(df.shape)

# Clean dataset ------------------------------------------< JOHN TAG
# Delete NaN rows
df.dropna(subset=['description', 'categories'], inplace=True)
print(df.shape)
# lowercase characters, special characters and numbers, spaces
df['description'] = df['description'].str.lower().replace('[^\w\s]', '', regex=True).str.strip().str.replace('\s+', ' ', regex=True)
df = df[:256]
print(df)

# Tokenization ------------------------------------------< JOHN TAG
# _warning_ > Chưa tối ưu ----------< WARNING
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
# print(np.median([len(x) for x in df['description'].tolist()]))
encoded_data = tokenizer.batch_encode_plus(
    df['description'].tolist(),
    add_special_tokens=True, 
    return_attention_mask=True, 
    pad_to_max_length=True, 
    max_length=512,
    return_tensors='pt'
)

# DataLoader ------------------------------------------< JOHN TAG
# dataset = TensorDataset(
#     encoded_data['input_ids'],
#     encoded_data['attention_mask']
# )
# data_loader = DataLoader(dataset, batch_size=16, sampler=RandomSampler(dataset))

# Find feature vector ------------------------------------------< JOHN TAG
# Get Bert model
model = BertModel.from_pretrained('bert-base-uncased')
# Change to evaluation mode
model.eval()
# Handle data with model
with torch.no_grad():
    outputs = model(encoded_data['input_ids'], attention_mask=encoded_data['attention_mask'])
    last_hidden_states = outputs.last_hidden_state

feature_vectors = last_hidden_states[:, 0, :].numpy()
np.save('dataset/feature_vectors.npy', feature_vectors)
np.save('dataset/y_data.npy', np.array(df['categories'].tolist()))
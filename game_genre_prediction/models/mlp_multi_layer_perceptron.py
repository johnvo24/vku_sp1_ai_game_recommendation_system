import torch
import torch.nn as nn
import torch.optim as optim
import torch.nn.functional as F
import numpy as np
from sklearn.model_selection import train_test_split
from data_preprocessing import DataPreprocessor
from embedding import Embedder
import constants as J

# Định nghĩa mô hình mạng nơ-ron sâu
class MultiLabelClassifier(nn.Module):
    def __init__(self, input_size, output_size, hidden_size=256):
        super(MultiLabelClassifier, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.fc2 = nn.Linear(hidden_size, hidden_size // 2)
        self.fc3 = nn.Linear(hidden_size // 2, hidden_size // 4)
        self.fc4 = nn.Linear(hidden_size // 4, output_size)
        self.dropout = nn.Dropout(0.5)
        
    def forward(self, x):
        x = F.relu(self.fc1(x))
        x = self.dropout(x)
        x = F.relu(self.fc2(x))
        x = self.dropout(x)
        x = F.relu(self.fc3(x))
        x = self.dropout(x)
        x = torch.sigmoid(self.fc4(x))
        return x
    

dp = DataPreprocessor()
dp.readData(filename='game_genre_dataset.csv', drop=False, columns_selected=['Description', 'Genres'])
dp.preprocess_data()

x_data = np.load('resources/feature_vectors_mean.npy')
y_data = np.array(dp.getData(J.TRAIN_DATA_SIZE)['Genres'].tolist())
# y_data = np.array(dp.dataFrame['Genres'].tolist())
x_train, x_test, y_train, y_test = train_test_split(x_data, y_data, test_size=0.2)

input_size = x_train.shape[1]
output_size = y_train.shape[1]


# Khởi tạo mô hình
model = MultiLabelClassifier(input_size, output_size)

# Định nghĩa hàm loss và optimizer
criterion = nn.BCELoss()  # Binary Cross Entropy Loss cho bài toán dự đoán đa nhãn
optimizer = optim.Adam(model.parameters(), lr=0.001)

# Chuẩn bị dữ liệu huấn luyện
X_train_tensor = torch.tensor(x_train, dtype=torch.float32)
y_train_tensor = torch.tensor(y_train, dtype=torch.float32)
X_test_tensor = torch.tensor(x_test, dtype=torch.float32)
y_test_tensor = torch.tensor(y_test, dtype=torch.float32)

# Huấn luyện mô hình
num_epochs = 10
batch_size = 32

for epoch in range(num_epochs):
    model.train()
    for i in range(0, len(X_train_tensor), batch_size):
        inputs = X_train_tensor[i:i+batch_size]
        labels = y_train_tensor[i:i+batch_size]
        
        optimizer.zero_grad()
        outputs = model(inputs)
        loss = criterion(outputs, labels)
        loss.backward()
        optimizer.step()
        
        if (i+1) % 100 == 0:
            print(f'Epoch [{epoch+1}/{num_epochs}], Step [{i+1}/{len(X_train_tensor)}], Loss: {loss.item():.4f}')

# Đánh giá mô hình trên tập kiểm tra
model.eval()
with torch.no_grad():
    test_outputs = model(X_test_tensor)
    test_loss = criterion(test_outputs, y_test_tensor)
    print(f'Test Loss: {test_loss.item():.4f}')
    
    text = "Echoes of Eternity is a massively role-playing game (RPG) set in a vast, mystical world where ancient civilizations have left behind ruins and artifacts. Players take on the role of a brave adventurer, tasked with uncovering the secrets of the world and restoring balance to the forces of nature. With a rich storyline and intricate character customization, Echoes of Eternity offers a deeply immersive experience. As players explore the world, they will encounter a variety of creatures, from fearsome beasts to wise sages. The game features a dynamic combat system, allowing players to combine their abilities in creative ways to defeat formidable foes. With a strong focus on community building, players can join guilds, participate in large-scale events, and collaborate on complex quests. The game's world is richly detailed, with diverse environments, from lush forests to ancient ruins, each holding its own secrets and mysteries. Players can collect and craft powerful items, master new skills, and discover hidden locations."
    text = dp.normalize(text, J.EN_LOWERCASE_CHARS, '-,.')
    embedder = Embedder()
    embedder.tokenize_plus([text])
    embedder.get_embedding()

    print(model(embedder.last_hidden_states[:, 0, :]))
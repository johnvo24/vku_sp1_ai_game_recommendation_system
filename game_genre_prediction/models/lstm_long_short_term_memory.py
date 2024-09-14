import torch
import torch.nn as nn
import torch.optim as optim
import pickle
from tqdm import tqdm
import constants as J
import helper as JH
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split

class LSTMModel(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(LSTMModel, self).__init__()
        self.hidden_size = hidden_size
        self.lstm = nn.LSTM(input_size, hidden_size, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)
        self.sigmoid = nn.Sigmoid()

    def forward(self, x):
        lstm_out, _ = self.lstm(x)
        out = self.fc(lstm_out[:, -1, :])
        out = self.sigmoid(out)
        return out
    
    def train_model(self, x_data, y_data, epochs=1, lr=0.001, batch_size=32):
        x_train, x_test, y_train, y_test = train_test_split(x_data, y_data, test_size=0.2, random_state=42)

        criterion = nn.BCELoss()
        optimizer = optim.Adam(self.parameters(), lr=lr)
        
        for epoch in range(epochs):
            self.train()
            epoch_loss = 0.0
            for i in tqdm(range(0, len(x_train), batch_size), desc=f">>> Epoch {epoch+1}/{epochs}"):
                x_batch, y_batch = x_train[i:i+batch_size], y_train[i:i+batch_size]

                optimizer.zero_grad()
                outputs = self(x_batch)
                loss = criterion(outputs, y_batch)
                loss.backward()
                optimizer.step()

                epoch_loss += loss.item()
                torch.cuda.empty_cache() #release memory

            print(f"> Loss: {epoch_loss}")

        print(f"[JV] Accuracy: {self.evaluate(x_test, y_test)}")
        with open(J.RESOURCE_FOLDER_PATH + 'models/lstm_model.pkl', 'wb') as f:
            pickle.dump(self, f)
            print(f"[JV] Saved model to lstm_model.pkl file")

    def predict(self, X):
        self.eval()
        with torch.no_grad():
            outputs = self(X)
        return outputs.cpu().detach().numpy()

    def evaluate(self, X_test, y_test):
        outputs = self.predict(X_test)
        predicted_labels = (outputs > 0.5).astype(int)
        accuracy = accuracy_score(y_test, predicted_labels)
        return accuracy
    
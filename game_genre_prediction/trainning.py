import torch
import constants as J
import helper as JH
from models.logistic_model import LogisticModel
from models.lstm_long_short_term_memory import LSTMModel
from models.support_vector_machine_model import SVMClassifier

class Trainer():
    def __init__(self):
        dataset = torch.load(J.DATASET_FOLDER_PATH + J.DATASET_FILE_NAME)
        self.x_data = dataset['features']
        self.y_data = dataset['labels']

    def train(self, option, epochs=1):
        print(f"[JV] ==========< TRAINING >==========")
        if option == "logistic":
            # x_data = torch.mode(self.x_data, dim=1).values
            # x_data = self.x_data[:, 0, :]
            x_data = torch.mean(self.x_data, dim=1)
            y_data = self.y_data
            model = LogisticModel(x_data, y_data)
            model.train_model(epochs)
        elif option == "svm":
            x_data = torch.mean(self.x_data, dim=1)
            y_data = self.y_data
            model = SVMClassifier(kernel='linear', C=0.01, random_state=42)
            model.build()
            model.train_model(x_data, y_data, test_size=0.2, epochs=epochs)
        elif option == "lstm":
            input_size = self.x_data.shape[2]
            hidden_size = 128
            output_size = self.y_data.shape[1]
            model = LSTMModel(input_size=input_size, hidden_size=hidden_size, output_size=output_size)
            model.train_model(self.x_data, self.y_data, epochs=epochs, lr=0.001)
            
trainer = Trainer()
# trainer.train("logistic_model", epochs=50)
trainer.train("logistic", epochs=50)

# print(JH.read(filename=J.DATASET_FILE_NAME))
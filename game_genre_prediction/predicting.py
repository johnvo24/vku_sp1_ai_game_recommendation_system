import helper as JH
import constants as J
import torch
from Jai import JDataPreprocessor, BertEmbedder


class Predictor():
    def __init__(self):
        self.jdp = JDataPreprocessor()
        self.embedder = BertEmbedder()
        self.dataset = torch.load(J.DATASET_FOLDER_PATH + J.DATASET_FILE_NAME)

        self.logistic_model = JH.load_model("logistic_regression_model.pkl")
        self.svm_model = JH.load_model("svm_model.pkl")
        self.lstm_model = JH.load_model("lstm_model.pkl")

    def predict_text(self, option, text):
        print(f"[JV] Dataset[Game genres]: {self.dataset['game_genres']}")
        print(f"[JV] Dataset[Selected genres]: {self.dataset['selected_genres']}")
        normalized_text = self.jdp.normalize_text(
            text=text, 
            regex_chars=self.jdp.EN_LOWERCASE_CHARS, 
            regex_spec_chars='-,.', 
            stopwords=self.jdp.STOPWORDS)
        
        self.embedder.tokenize_plus([text])
        self.embedder.get_embedding()
        feature = self.embedder.features

        print(f"[JV] ==========< PREDICTING >==========")
        result = []
        # MACHINE LEARNING MODEL ------------------------------------------< JOHN TAG
        if option == "logistic":
            # x_pred = feature[:, 0, :]
            # x_pred = torch.mode(feature, dim=1).values
            x_pred = torch.mean(feature, dim=1)
            result = self.logistic_model.predict(x_pred)
        if option == "svm":
            # x_pred = feature[:, 0, :]
            # x_pred = torch.mode(feature, dim=1).values
            x_pred = torch.mean(feature, dim=1)
            result = self.svm_model.predict(x_pred)
        # DEEP LEARNING MODEL ------------------------------------------< JOHN TAG
        if option == "lstm":
            x_pred = feature
            result = self.lstm_model.predict(x_pred)

        print(f"[JV] Result: {result}")
        prediction = [self.dataset['selected_genres'][index] for index, value in enumerate(result[0]) if round(value) == 1]
        print(f"[JV] Prediction: {prediction} in {self.dataset['selected_genres']}")
        return prediction

text = "Command the army to attack and win territory"
predictor = Predictor()
dp = JDataPreprocessor()
predictor.predict_text("logistic", text)
print(f"[JV] Normalized text: {dp.normalize_text(text, dp.EN_LOWERCASE_CHARS, ',.', dp.STOPWORDS)}")
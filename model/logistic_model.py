import os
import pickle
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix, roc_curve, auc

def eval_model(y_test, y_pred): 
    print("Classificationn Report: \n", classification_report(y_test, y_pred))
    accuracy = accuracy_score(y_test, y_pred)
    print("Model's accuracy: ", accuracy)
    return accuracy


def build_model():
    x_data = np.load('dataset/feature_vectors.npy')
    y_data = np.load('dataset/y_data.npy')

    x_train, x_test, y_train, y_test = train_test_split(x_data, y_data, test_size=0.2)
    
    model = LogisticRegression()
    model.fit(x_train, y_train)

    y_pred = model.predict(x_test)
    
    return model, eval_model(y_test, y_pred)

def train_model(train_loop):
    max = 0.0
    model = None
    for i in range(0, train_loop):
        # BUILD MODEL
        cur_model, eccuracy = build_model()
        if (eccuracy >= max):
            model = cur_model
            max = eccuracy
    
    with open("assets/log_reg_model.pkl", "wb") as f:
        pickle.dump(model, f)

    print(max)

def predict(x_test):
    with open('assets/log_reg_model.pkl', 'rb') as file:
        model = pickle.load(file)

    return model.predict(x_test)
         
# TRAIN MODEL
train_model(10)
# print(predict(x_test=np.load('dataset/feature_vectors.npy')))
from fastapi import FastAPI
from pydantic import BaseModel
from predicting import Predictor
from fastapi.middleware.cors import CORSMiddleware
from Jai import SBertEmbedder
from sklearn.metrics.pairwise import cosine_similarity


app = FastAPI()
predictor = Predictor()
sbertEmbedder = SBertEmbedder()

# Thêm middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Cho phép tất cả các nguồn gốc (thay đổi theo yêu cầu của bạn)
    allow_credentials=True,
    allow_methods=["*"],  # Cho phép tất cả các phương thức HTTP
    allow_headers=["*"],  # Cho phép tất cả các header
)

class Data(BaseModel):
    content: str

class Data1(BaseModel):
    key: str
    text_list: list[str]

@app.get("/")
def read_root():
    return {"<h1>Jv. WELCOME TO MY SERVER</h1>"}

@app.post("/predict/")
def analyze_sentiment(data: Data):
    prediction = []
    prediction = predictor.predict_text("logistic", data.content)
    return {"prediction": prediction}

@app.post("/search-by-text/")
def analyze_sentiment(data: Data1):
    encoded_key = sbertEmbedder.encode_plus([data.key])
    encoded_data = sbertEmbedder.encode_plus(data.text_list)
    similarity_array = cosine_similarity(encoded_key, encoded_data)
    encoded_data_dict_list = [{"index": index, "similarity": similarity} for index, similarity in enumerate(similarity_array[0])]
    encoded_data_dict_list = sorted(encoded_data_dict_list, key=lambda x: x["similarity"], reverse=True)
    return {"result": [encoded_data_dict["index"] for encoded_data_dict in encoded_data_dict_list]}

# game where the player is an explorer. Solve puzzles and get rewards
# Embark on an exhilarating adventure in "Explorer's Quest," where you step into the boots of a daring explorer traversing through mysterious lands full of ancient secrets and puzzles waiting to be unraveled. Set in a lush, immersive world teeming with both natural beauty and perilous challenges, this game invites players to test their wit and courage.
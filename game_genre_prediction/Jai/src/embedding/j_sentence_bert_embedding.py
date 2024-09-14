from sentence_transformers import SentenceTransformer

class SBertEmbedder():
    def __init__(self):
        # Load pre-trained SBERT model
        self.model = SentenceTransformer('paraphrase-MiniLM-L6-v2')

    def encode_plus(self, text_list):
        return [self.model.encode(text) for text in text_list]
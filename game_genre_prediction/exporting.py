from Jai import JDataPreprocessor
from Jai import BertEmbedder
import constants as J
import helper as JH
import numpy as np
import torch

class Exporter():
    def __init__(self):
        self.jdp = JDataPreprocessor();
        self.embedder = BertEmbedder();
        self.data_frame = None;
        self.game_genres = None;
        self.selected_game_genres = None;
        self.features = None;

    def preprocess_data(self):
        # _note_ > Read data
        self.data_frame = self.jdp.read_data(
            J.RAW_DATA_FOLDER_PATH + J.RAW_DATA_FILE_NAME, 
            drop_duplicates_from=['Description'], 
            drop_column_value={}, 
            columns_selected=['Description', 'Genres'], 
            read_size=J.READ_DATA_SIZE)

        print(f"[JV] ==========< DATA PREPROCESSING >==========")
        # _note_ > Nomalize data
        self.data_frame['Description'] = self.data_frame['Description'].apply(
            lambda row: self.jdp.normalize_text(
                text=str(row), 
                regex_chars=self.jdp.EN_LOWERCASE_CHARS, 
                regex_spec_chars='-,.', 
                stopwords=self.jdp.STOPWORDS))
        self.data_frame['Genres'] = self.data_frame['Genres'].apply(
            lambda row: self.jdp.normalize_text(
                text=str(row), 
                regex_chars=self.jdp.EN_LOWERCASE_CHARS, 
                regex_spec_chars=',.'))
        
        # for des in self.data_frame['Description']: print(des)
        
        # _note_ > All game genres and their frequency
        game_genres_dict = JH.count(sum([genres.split(', ') for genres in self.data_frame['Genres']], []))
        self.game_genres = game_genres_dict
        print(f"[JV] Game genres: \n{game_genres_dict}")
        # _note_ > Print all sorted game genres
        print(f"[JV] Sorted game genres: \n{sorted([genre for genre, frequency in game_genres_dict.items()], reverse=False)}")
        
        # _note_ > Just choose genres that has frequency greater than or equal to 4%
        self.selected_game_genres = [game_genre for game_genre, frequency in game_genres_dict.items() if frequency >= len(self.data_frame['Genres'])*10//100]
        print(f"[JV] Selected game genres: {self.selected_game_genres}")

        # _note_ > Change to array with 0, 1 values
        self.data_frame['Genres'] = self.data_frame['Genres'].apply(lambda row: JH.check(row, self.selected_game_genres))

        # _note_ > Get the index of rows as [0, ..., 0]
        indexs = self.data_frame[np.max(np.array(self.data_frame['Genres'].tolist()), axis=1) == 0].index
        # _note_ > Drop the rows as [0, ..., 0]
        self.data_frame = self.data_frame.drop(indexs)

        print(f"[JV] Data for embedding:\n", self.data_frame)
        print(f"[JV] Shape: {self.data_frame.shape}")

    def get_embedding(self):
        print(f"[JV] ==========< EMBEDDING >==========")
        self.embedder.tokenize_plus(self.data_frame['Description'])
        self.embedder.get_embedding()
        self.features = self.embedder.features

    def export_dataset(self):
        print(f"[JV] ==========< DATASET EXPORTING >==========")
        dataset = {'features': self.features, 
                'labels': torch.tensor(np.array(self.data_frame['Genres'].tolist()), dtype=torch.float32),
                'game_genres':self.game_genres,
                'selected_genres': self.selected_game_genres}
        print(f"[JV] Dataset: (features: {dataset['features'].dtype}, labels: {dataset['labels'].shape}")

        torch.save(dataset, J.DATASET_FOLDER_PATH + J.DATASET_FILE_NAME)
        print(f"[JV] Exported dataset to {J.DATASET_FILE_NAME} file")

exporter = Exporter()
exporter.preprocess_data()
exporter.get_embedding()
exporter.export_dataset()
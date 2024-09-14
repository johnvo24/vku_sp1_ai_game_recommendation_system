<!-- TITLE 2 >-----  --> <h3>Steps to build the game genre prediction model</h3>
<!-- TITLE 3 >----------- --> <h4>Data Collection</h4>
- Data needed:
    - Description
    - Genre
- Data sources:
    - Kaggle: game genre
<!-- TITLE 3 >----------- --> <h4>Data processing</h4>
- Read dataset -> clean data -> embedding -> export feature vecto
<details>
    <summary>Embedding</summary>
1. Word Embeddings:<br/>
a. Word2Vec:<br/>
- Lợi ích:<br/>
    - Tạo ra các vector biểu diễn từ với ý nghĩa ngữ nghĩa cao.<br/>
    - Các từ có ý nghĩa tương tự sẽ có vector gần nhau trong không gian vector.<br/>
- Ưu điểm:<br/>
    - Dễ triển khai và sử dụng.<br/>
    - Hiệu quả tính toán và tài nguyên.<br/>
b. GloVe (Global Vectors for Word Representation):<br/>
- Lợi ích:<br/>
    - Kết hợp thông tin từ cả corpus và ngữ cảnh cục bộ để tạo ra các vector biểu diễn từ.<br/>
    - Hiểu được mối quan hệ toàn cầu giữa các từ trong corpus.<br/>
- Ưu điểm:<br/>
    - Hiệu quả trong việc mã hóa ngữ nghĩa toàn cầu của các từ.<br/>
2. Contextualized Word Embeddings:<br/>
a. ELMo (Embeddings from Language Models):<br/>
- Lợi ích:<br/>
    - Tạo ra các vector embedding dựa trên ngữ cảnh của từ trong câu.<br/>
    - Đặc biệt hiệu quả trong các tác vụ yêu cầu hiểu biểu diễn ngữ cảnh của từ.<br/>
- Ưu điểm:<br/>
    - Linh hoạt trong việc xử lý các tác vụ ngôn ngữ tự nhiên.<br/>
b. BERT (Bidirectional Encoder Representations from Transformers):<br/>
- Lợi ích:<br/>
    - Nắm bắt ngữ cảnh của từ trong cả hai phía (trái và phải) của câu.<br/>
    - Cung cấp các biểu diễn ngữ cảnh sâu và phong phú của từ.<br/>
- Ưu điểm:<br/>
    - Mạnh mẽ và linh hoạt, có thể được sử dụng trực tiếp cho nhiều tác vụ NLP khác nhau.<br/>
3. Sentence Embeddings:<br/>
a. Universal Sentence Encoder (USE):<br/>
- Lợi ích:<br/>
    - Tạo ra các vector biểu diễn cho các câu hoặc đoạn văn.<br/>
    - Phù hợp cho nhiều tác vụ như phân loại câu, tìm kiếm thông tin, v.v.<br/>
- Ưu điểm:<br/>
    - Dễ sử dụng và triển khai.<br/>
b. Sentence-BERT (SBERT):<br/>
- Lợi ích:<br/>
    - Tạo ra các biểu diễn câu cực kỳ hiệu quả và linh hoạt.<br/>
    - Đặc biệt thích hợp cho các tác vụ như tính điểm tương đồng giữa các câu.<br/>
- Ưu điểm:<br/>
    - Hiệu quả và dễ sử dụng trong các tác vụ so sánh văn bản.<br/>
4. Document Embeddings:<br/>
a. Doc2Vec:<br/>
- Lợi ích:<br/>
    - Tạo ra các vector biểu diễn cho các đoạn văn hoặc tài liệu.<br/>
    - Hữu ích cho các tác vụ như phân loại văn bản hoặc clustering.<br/>
- Ưu điểm:<br/>
    - Dễ tri- ển khai và sử dụng.<br/>
5. Character-Level Embeddings:<br/>
a. FastText:<br/>
- Lợi ích:<br/>
    - Xử lý tốt các từ hiếm hoặc từ chưa gặp trong training data.<br/>
    - Cung cấp biểu diễn cho từng từ dựa trên các ký tự cấu thành từ.<br/>
- Ưu điểm:<br/>
    - Mạnh mẽ trong việc xử lý các từ đa dạng và không phổ biến.<br/>
</details>
<details>
    <summary>Embedding</summary>
    <ul>
        <li>Config Bert model</li>
        <li><img src="/game_genre_prediction/documents/images/00001.png" alt="image" width="500"/></li>
        <li><img src="/game_genre_prediction/documents/images/00002.png" alt="image" width="500"/></li>
    </ul>
</details>
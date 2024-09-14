# import pandas as pd
# import numpy as np
# df = pd.read_csv('dataset/raw_dataset/games_1.csv')

# df = df[['Summary', 'Genres']]
# print(df.shape)
# df = df.dropna(subset=['Summary', "Genres"])
# print(df.shape)

# df['Genres'] = [genres.replace("[","").replace("]","").replace("'","").split(", ") for genres in df['Genres']]
# all_genres = df['Genres']
# print(set(sum(all_genres, [])))


# # df = pd.read_csv('dataset/raw_dataset/game_genres.csv')
# # df['Genre'] = [genres.replace("[","").replace("]","").replace("'","").split(", ") for genres in df['Genre']]
# # all_genres = df['Genre']
# # print(set(sum(all_genres, [])))

game_genres = [
    "Adventure",  # Phiêu lưu
    "Arcade",  # Trò chơi điện tử
    "Board Game",  # Trò chơi bàn cờ
    "Fighting",  # Đấu đối kháng
    "MOBA",  # Trò chơi trực tuyến đa người cùng chơi
    "Music",  # Âm nhạc
    "Puzzle",  # Đố vui
    "Racing",  # Đua xe
    "RPG",  # Trò chơi nhập vai
    "Real-Time Strategy",  # Chiến lược thời gian thực
    "Shooter",  # Bắn súng
    "Simulation",  # Mô phỏng
    "Sport",  # Thể thao
    "Visual Novel",  # Trò chơi đồ họa
    "Sandbox",  # Đồ chơi cát
    "Stealth",  # Ẩn mình
    "Survival",  # Sống sót
    "Horror",  # Kinh dị
    "Educational",  # Giáo dục
    "Party",  # Tiệc
    "Crafting",  # Chế tạo
    "Management",  # Quản lý
    "Exploration",  # Khám phá
    "Mystery",  # Bí ẩn
    "Historical",  # Lịch sử
    "Cooking",  # Nấu ăn
    "Fishing",  # Câu cá
    "Open World",  # Thế giới mở
    "Hack and Slash", # Hack và chém -> phong cách gameplay tập trung vào việc đánh dấm và tiêu diệt đối thủ
    "Roguelike", # Thích lừa đảo -> Khám phá ngục tối, thông qua cấp độ được tạo theo thủ tục, lối chơi theo lượt, di chuyển theo lưới và cái chết vĩnh viễn của nhân vật người chơi.
    "Turn-Based Strategy", # Chiến lược theo lượt -> một trò chơi chiến lược (thường là một số loại trò chơi chiến tranh, đặc biệt là trò chơi chiến tranh cấp chiến lược) trong đó người chơi thay phiên nhau khi chơi 
    "Platformer",  # Trò chơi nên tảng -> là nhảy giữa các nền tảng hoặc vượt qua chướng ngại vật. Người chơi điều khiển những bước nhảy này và phải sử dụng kỹ năng để tránh nhân vật của mình rơi khỏi bệ hoặc thiếu bước nhảy. Kiểu chơi này, ngay cả ở các thể loại khác, được gọi là "nền tảng".
    "Comedy", # Hài hước
    "Science Fiction", # Khoa học viễn tưởng
]


const JH = {
    trycatch_in_controller: (callback1, callback2) => {
        try {
            if (callback1) callback1();
        } catch (error) {
            if (callback2) callback2();
            res.status(500).json({ message: err.message });
        }
    },
    sampleUser: {
        "username": "Zinie", 
        "email": "zinie@gmail.com", 
        "phone": "0123456789", 
        "address": "a1.2.3.", 
        "password": "123456", 
        "dob": "02/03/2005"
    },
    sampleGame: {
        "platform_id": "665c8edf63f8fa16035bb703",
        "game_name": "Red Dead Redemption 2",
        "game_desc": "Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world will also provide the foundation for a brand new online multiplayer experience.",
        "game_dev": "Rockstar Games",
        "game_pub": "Rockstar Games",
        "game_release": "2018-10-26",
        "game_price": 59.99,
        "created_at": "2022-05-15T08:00:00.000Z",
        "updated_at": "2022-05-15T08:00:00.000Z"
    },    
}
export default JH;
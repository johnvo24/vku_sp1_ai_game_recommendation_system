import axios from 'axios'
import IP from "../assets/ip"
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns'

const ViewDetailGame = () => {
    const { id } = useParams()
    const [game, setGame] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchGame = async () => {
            try {
                const response = await axios.get(`http://${IP}:5050/api/games/${id}`)
                setGame(response.data)
            } catch (err) {
                setError(err.message || 'An error occurred')
            } finally {
                setLoading(false)
            }
        };
    
        fetchGame()
    }, [id]);

    const formatDate = (dateString) => {
        try {
            return format(new Date(dateString), 'MMMM dd, yyyy');
        } catch (error) {
            return 'Invalid Date';
        }
    };

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

    console.log(game)

    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-28">
            {game && 
                <div className="flex flex-col md:flex-row -mx-4">
                {/* left content */}
                <div className="md:flex-1 px-4">
                    <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                        <img className="w-full h-full object-cover rounded-lg" src={game.game_image} alt="Game"/>
                    </div>
                    <div className="flex -mx-2 mb-4">
                        <div className="w-1/2 px-2">
                            <button className="w-full bg-secondary text-white py-2 px-4 rounded-full font-bold hover:bg-primary transition-all duration-300">Add to Cart</button>
                        </div>
                        <div className="w-1/2 px-2">
                            <button className="w-full bg-gray-200 dark:bg-gray-700 text-primary dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
                {/* right content */}
                <div className="md:flex-1 px-4">
                <h2 className="text-4xl font-bold text-primary dark:text-white mb-2">{game.game_name}</h2>
                <div className="mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Price:</span>
                        <span className="text-gray-600 dark:text-gray-300">{`$${game.game_price}`}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Genres:</span>
                        <span className="text-gray-600 dark:text-gray-300">{game.game_genres[0].genre_name}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Platform Support:</span>
                        <span className="text-gray-600 dark:text-gray-300">{game.platform_id.platform_name}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Release Date:</span>
                        <span className="text-gray-600 dark:text-gray-300">{formatDate(game.game_realease)}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Developer:</span>
                        <span className="text-gray-600 dark:text-gray-300">{game.game_dev}</span>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="mr-4">
                        <span className="font-bold text-gray-700 dark:text-gray-300 mr-2">Publisher:</span>
                        <span className="text-gray-600 dark:text-gray-300">{game.game_pub}</span>
                    </div>
                </div>
                <div>
                    <span className="font-bold text-gray-700 dark:text-gray-300">Description:</span>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                        {game.game_desc}
                    </p>
                </div>
            </div>
            </div>
            }
        </div>
    )
}

export default ViewDetailGame
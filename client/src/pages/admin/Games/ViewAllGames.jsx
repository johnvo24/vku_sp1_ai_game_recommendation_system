import { useEffect, useState } from "react"
import axios from 'axios'
import IP from '../../../assets/ip'

const ViewAllGames = () => {
    const [games, setGames] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get(`http://${IP}:5050/api/games`)
                setGames(response.data)
            } catch (error) {
                setError(error.message || 'An error occurred')
            } finally {
                setLoading(false)
            }
        }

        fetchGames()
    }, [])

    const truncate = (str, maxLength) => {
        if (str.length > maxLength) {
          return str.substring(0, maxLength) + '...'
        }
        return str || ''
    }

    if (loading) return <div className="text-center mt-10">Loading...</div>
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>

    return (
        <div className="max-w-6xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">Game List</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">Platform ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Image</th>
                        <th className="py-2 px-4 border-b">Developer</th>
                        <th className="py-2 px-4 border-b">Publisher</th>
                        <th className="py-2 px-4 border-b">Release Date</th>
                        <th className="py-2 px-4 border-b">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => (
                        <tr key={game._id}>
                        <td className="py-2 px-4 border-b">{game.platform_name}</td>
                        <td className="py-2 px-4 border-b">{game.game_name}</td>
                        <td className="py-2 px-4 border-b">{game.game_desc}</td>
                        <td className="py-2 px-4 border-b">{truncate(game.game_image, 20)}</td>
                        <td className="py-2 px-4 border-b">{game.game_dev}</td>
                        <td className="py-2 px-4 border-b">{game.game_pub}</td>
                        <td className="py-2 px-4 border-b">{game.game_release}</td>
                        <td className="py-2 px-4 border-b">{game.game_price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      );
}

export default ViewAllGames
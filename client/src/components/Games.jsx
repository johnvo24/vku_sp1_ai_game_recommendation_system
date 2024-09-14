import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import GameItem from './GameItem'
import axios from "axios"
import IP from "../assets/ip"
import serverAPI from '../assets/serverAPI'

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const Games = () => {
    const query = useQuery()
    const searchQuery = query.get('query')
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

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await axios.post(`${serverAPI}/predict`, { content: searchQuery })
                const genreNames = response.data.prediction
                const url = new URL(`http://${IP}:5050/api/games/search_by_genres`)
                genreNames.forEach(genre => url.searchParams.append('genre_names[]', genre))

                const resData = await axios.get(url)
                const listDesc = resData.data.map(game => game.game_desc)
                const resGenres = await axios.post(`${serverAPI}/search-by-text`, {key: searchQuery, text_list: listDesc})
                const newArray = []
                for (let index = 0; index < resGenres.data.result.length; index++) {
                    newArray.push(resData.data[resGenres.data.result[index]])
                }
                console.log(newArray)
                setGames(newArray)
            } catch (err) {
                setError(err.message || 'An error occurred')
            } finally {
                setLoading(false)
            }
        }
        if (searchQuery) {
          fetchSearchResults()
        }
    }, [searchQuery])

    if (loading) return <div className="text-center mt-10">Loading...</div>
    if (error) return <div className="text-center mt-10 text-red-500">{error}</div>

    return (
        <section className='games'>
            {
                games.length > 0 ?
                    <div className="game_container grid grid-cols-5 lg:grid-cols-5 gap-4">
                    {
                        games.map(
                            ({_id, game_name, game_image}) =>
                            <GameItem 
                                key={_id}
                                _id={_id}
                                game_name={game_name}
                                game_image={game_image}
                            />
                        )
                    }
                    </div>
                : <h2>Not games founds</h2>
            }
        </section>
    )
}

export default Games
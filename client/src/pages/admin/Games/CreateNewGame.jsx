import { useState, useEffect } from "react"
import axios from 'axios'
import IP from "../../../assets/ip"
import serverAPI from "../../../assets/serverAPI"

const CreateNewGame = () => {
    const [form, setForm] = useState({
        platform_id: '',
        game_name: '',
        game_desc: '',
        game_image: '',
        game_dev: '',
        game_pub: '',
        game_release: '',
        game_price: '',
        created_at: Date.now(),
        updated_at: Date.now(),
    })
    const [platforms, setPlatforms] = useState([])
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        const fetchPlatforms = async () => {
            try {
                const response = await axios.get(`http://${IP}:5050/api/platforms`)
                setPlatforms(response.data)
            } catch (error) {
                console.error('Error fetching platforms:', error)
            }
        }

        fetchPlatforms()
    }, [])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSuccess(false)
        try {
            const resAI = await axios.post(`${serverAPI}/predict`, {content: form.game_desc})
            form.game_genres = []
            // Using for...of loop to wait for async operations
            for (const genre_name of resAI.data.prediction) {
              await axios.post(`http://${IP}:5050/api/genres`, { genre_name });
              const GenreRes = await axios.get(`http://${IP}:5050/api/genres/get_genre_by_name?genre_name=${genre_name}`);
              form.game_genres.push(GenreRes.data._id)
            }
            
            const res = await axios.post(`http://${IP}:5050/api/games`, form)
            console.log(res.data)
            setSuccess(true)
            setForm({
                platform_id: '',
                game_name: '',
                game_desc: '',
                game_image: '',
                game_dev: '',
                game_pub: '',
                game_release: '',
                game_price: '',
            })
        } catch (error) {
            console.error(error.response.data)
        }
    }

    return (
        <div className="max-w-md mx-auto mt-8 pb-8">
          <h2 className="text-2xl font-bold mb-4">Add New Game</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700">Platform ID</label>
              <select
                name="platform_id"
                value={form.platform_id}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option key={123} value="">Select a platform</option>
                  {platforms.map((platform) => (
                    <option key={platform._id} value={platform._id}>
                      {platform.platform_name}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                name="game_name"
                value={form.game_name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Description</label>
              <textarea
                name="game_desc"
                value={form.game_desc}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700">Image Game</label>
              <input
                type="text"
                name="game_image"
                value={form.game_image}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Developer</label>
              <input
                type="text"
                name="game_dev"
                value={form.game_dev}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Publisher</label>
              <input
                type="text"
                name="game_pub"
                value={form.game_pub}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Release Date</label>
              <input
                type="date"
                name="game_release"
                value={form.game_release}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Price</label>
              <input
                type="number"
                name="game_price"
                value={form.game_price}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            {success && <p className="text-green-500">Add game successfully!</p>}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-3 py-2 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
    )
}

export default CreateNewGame
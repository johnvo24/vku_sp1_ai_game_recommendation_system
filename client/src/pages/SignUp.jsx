import { Link } from "react-router-dom"
import { useState } from "react"
import axios from 'axios'
import IP from "../assets/ip"

const SignUp = () => {
    const [formData, setFormData] = useState([{
        username: '',
        email: '',
        password: ''
    }])

    const [success, setSuccess] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSuccess(false)
        try {
            const res = await axios.post(`http://${IP}:5050/api/users`, formData)
            console.log(res.data)
            setSuccess(true)
            setFormData({
                username: '',
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error.response.data);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center py-8 md:h-screen mx-auto lg:py-0">
            <div className="w-full sm:max-w-md xl:p-0 mt-28">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-3xl dark:text-white">
                        Create an account
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="username" className="block mb-2 text-sm font-medium text-primary dark:text-white">Username</label>
                            <input type="text" name="username" value={formData.username} id="username" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" required="" />
                        </div>
                        <div>
                          <label for="email" className="block mb-2 text-sm font-medium text-primary dark:text-white">Your email</label>
                          <input type="email" name="email" value={formData.email} id="email" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-primary dark:text-white">Password</label>
                            <input type="password" name="password" value={formData.password} id="password" onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-lg bg-gray-50 focus:ring-3 focus:ring-secondary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-secondary dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">I accept the Terms and Conditions</label>
                                </div>
                            </div>
                        </div>
                        {success && <p className="text-green-500">Create an account successfully!</p>}
                        <button type="submit" className="w-full btn-primary text-white  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Already have an account? <Link to="/sign-in" className="font-medium text-primary hover:underline dark:text-primary-500">Login here</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
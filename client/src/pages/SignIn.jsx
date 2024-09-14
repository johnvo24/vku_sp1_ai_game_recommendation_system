import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import IP from "../assets/ip"

const SignIn = () => {
    const [formData, setFormData] = useState([{
        username: '',
        password: '',
    }])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(`http://${IP}:5050/api/login`, formData)
            console.log(response.data)
            localStorage.setItem('token', response.data.token)
        } catch (error) {
            console.error(error.response.data)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-3xl font-bold leading-tight tracking-tight text-primary md:text-3xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-primary dark:text-white">Username</label>
                            <input type="text" name="username" value={formData.username} id="username" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-primary sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter username" required="" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-primary dark:text-white">Password</label>
                            <input type="password" name="password" value={formData.password} id="password" onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <Link className="text-sm font-medium text-primary hover:underline dark:text-primary-500">Forgot password?</Link>
                        </div>
                        <button type="submit" className="w-full btn-primary text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                            Don’t have an account yet? <Link to="/sign-up" className="font-medium text-primary hover:underline dark:text-primary-500">Sign up</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn
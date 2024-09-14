import Logo from '../images/logo.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { FiSearch } from "react-icons/fi"
import { useState } from 'react'

const Header = () => {
    const navItems = [
        {link: "Store", path: "store"},
    ]

    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate()

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`store/search?query=${searchQuery}`)
        }
    };

    return (
        <nav className='bg-white md:px-12 px-4 max-w-screen-2xl border border-b-gray-300 mx-auto text-primary fixed top-0 right-0 left-0'>
            <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
                <div className='flex space-x-20 items-center'>
                    <Link to='/' className='text-2xl font-semibold flex items-center text-primary'>
                        <img src={Logo} alt="" className='w-28 inline-block items-center'/>
                        <span>Game Store</span>
                    </Link>
                    <ul className='md:flex space-x-12 hidden'>
                        {
                            navItems.map(
                                ({link, path}) => 
                                <Link key={link} to={path} className='block hover:text-gray-300'>
                                    {link}
                                </Link>
                            )
                        }
                    </ul>
                </div>
                <div className='space-x-4 hidden md:flex items-center'>
                    <form onSubmit={handleSearchSubmit} className="max-w-md mx-auto">   
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <input onChange={(e) => setSearchQuery(e.target.value)} type="search" id="default-search" className="block w-[333px] p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search here ..." required />
                            <button type="submit" className="text-gray-900 absolute end-2.5 bottom-2.5 px-2 py-2 hover:opacity-50"><FiSearch className='size-5'/></button>
                        </div>
                    </form>
                    <Link to="/sign-up" className='bg-indigo-600 py-2 px-4 transition-all duration-100 rounded text-white hover:outline-none
                    hover:ring hover:ring-indigo-300'>Sign Up</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header
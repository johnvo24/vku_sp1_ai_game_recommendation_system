import { Link } from 'react-router-dom'
import { FiUser } from "react-icons/fi"
import { FaAngleRight } from "react-icons/fa"
import { GrGamepad } from "react-icons/gr"
import { RiHome4Line } from "react-icons/ri"
import { useState } from 'react'

const SidebarAdmin = () => {
    const [isOpenMenuUsers, setIsOpenMenuUsers] = useState(false)
    const [isOpenMenuGames, setIsOpenMenuGames] = useState(false)

    return (
        <div className="fixed left-0 top-0 w-64 h-full bg-[#f8f4f3] p-4 z-50 sidebar-menu transition-transform">
                <Link to="#" className="flex items-center pb-4 border-b border-b-gray-800">
                    <h2 className="font-bold text-2xl">LOREM <span className="bg-[#f84525] text-white px-2 rounded-md">IPSUM</span></h2>
                </Link>
                <ul className="mt-4">
                    <span className="text-gray-400 font-bold">ADMIN</span>
                    <li className="mb-1 group">
                        <Link to="admin/dash-board" className="flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <RiHome4Line className="ri-home-2-line mr-3 text-lg"/>
                            <span className="text-sm">Dashboard</span>
                        </Link>
                    </li>
                    <li className="mb-1">
                        <button onClick={() => setIsOpenMenuUsers((prev) => (!prev))} className="w-full flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md">
                            <FiUser className='bx bx-user mr-3 text-lg'/>            
                            <span className="text-sm">Users</span>
                            <FaAngleRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"/>
                        </button>
                        {isOpenMenuUsers && 
                            <ul className="pl-7 mt-2">
                                <li className="mb-4">
                                    <Link to="admin/view-all-users" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">View Data</Link>
                                </li> 
                                <li className="mb-4">
                                    <Link to="admin/create-new-user" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Create New User</Link>
                                </li> 
                            </ul>
                        }
                    </li>
                    <li className="mb-1 group">
                        <button onClick={() => setIsOpenMenuGames((prev) => (!prev))} className="w-full flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                            <GrGamepad className='bx bx-list-ul mr-3 text-lg'/>
                            <span className="text-sm">Games</span>
                            <FaAngleRight className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"/>
                        </button>
                        {isOpenMenuGames && 
                            <ul className="pl-7 mt-2">
                                <li className="mb-4">
                                    <Link to="admin/view-all-games" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">View Data</Link>
                                </li> 
                                <li className="mb-4">
                                    <Link to="admin/create-new-game" className="text-gray-900 text-sm flex items-center hover:text-[#f84525] before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Create New Game</Link>
                                </li> 
                            </ul>
                        }
                    </li>
                    
                </ul>
            </div>
    )
}

export default SidebarAdmin
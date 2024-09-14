import { Link } from 'react-router-dom'

const NavbarAdmin = () => {
    return (
        <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <button type="button" className="text-lg text-gray-900 font-semibold sidebar-toggle">
            </button>
                <ul className="ml-auto flex items-center">
                <li className="dropdown ml-3">
                    <button type="button" className="dropdown-toggle flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 relative">
                            <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                                <img className="w-8 h-8 rounded-full" src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg" alt=""/>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-2 md:block text-left">
                            <h2 className="text-sm font-semibold text-gray-800">John Doe</h2>
                            <p className="text-xs text-gray-500">Administrator</p>
                        </div>                
                    </button>
                    <ul className="dropdown-menu shadow-md shadow-black/5 z-30 hidden py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                        <li>
                            <Link to="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Profile</Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50">Settings</Link>
                        </li>
                        <li>
                            <form method="POST" action="">
                                <Link role="menuitem" className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                                    onClick="event.preventDefault();
                                    this.closest('form').submit();">
                                    Log Out
                                </Link>
                            </form>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default NavbarAdmin
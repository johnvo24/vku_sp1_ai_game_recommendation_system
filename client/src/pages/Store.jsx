import { useState } from "react"
import { LuLayoutGrid } from "react-icons/lu"
import { Link } from 'react-router-dom'
import Games from "../components/Games"
import Pagination from "../components/Pagination"

const Store = () => {
    const [isOpenFilterGenres, setIsFilterGenres] = useState(false)
    const [isOpenFilterPlatform, setIsFilterPlatform] = useState(false)
    const [isOpenFilterPrice, setIsFilterPrice] = useState(false)
    const [isOpenFilterRating, setIsFilterRating] = useState(false)

    return (
        <div className="max-w-screen-2xl md:px-40 mx-auto mt-28">
            {/* filter components */}
            <div className="w-full md:px-6 flex justify-between items-center bg-gray-50 rounded-lg py-6 ring-1 ring-gray-300 ring-inset">
                <div className="flex items-center">
                    {/* filter genres */}
                    <div className="relative inline-block text-left me-4">
                        <div>
                            <button type="button" onClick={() => setIsFilterGenres((prev) => !prev)}
                                className="inline-flex w-full justify-center gap-x-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Genres
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isOpenFilterGenres &&
                            <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Adventure</Link>
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">RPG</Link>
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Action</Link>
                                </div>
                            </div>
                        }
                    </div>

                    {/* filter platform     */}
                    <div className="relative inline-block text-left me-4">
                        <div>
                            <button type="button" onClick={() => setIsFilterPlatform((prev) => !prev)}
                                className="inline-flex w-full justify-center gap-x-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Platforms
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isOpenFilterPlatform &&
                            <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">MacOs</Link>
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</Link>
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">License</Link>
                                </div>
                            </div>
                        }
                    </div>

                    {/* filter price */}
                    <div className="relative inline-block text-left me-4">
                        <div>
                            <button type="button" onClick={() => setIsFilterPrice((prev) => !prev)}
                                className="inline-flex w-full justify-center gap-x-10 rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Price
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isOpenFilterPrice &&
                            <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</Link>
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</Link>
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">License</Link>
                                </div>
                            </div>
                        }
                    </div>

                    {/* filter rating */}
                    <div className="relative inline-block text-left me-4">
                        <div>
                            <button type="button" onClick={() => setIsFilterRating((prev) => !prev)}
                                className="inline-flex w-full justify-center gap-x-8 rounded-md bg-white px-3 py-2 text-sm font-semibold text-primary shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200" id="menu-button" aria-expanded="true" aria-haspopup="true">
                                Rating
                                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </div>
                        {isOpenFilterRating &&
                            <div className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                                <div className="py-1" role="none">
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</Link>
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Support</Link>
                                    <Link to="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">License</Link>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <div>
                    <button type="button" className="px-3 py-2 bg-white rounded-md shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-200"><LuLayoutGrid className="size-[18px] text-primary"/></button>
                </div>
            </div>

            {/* items game */}
            <div className="w-full md:px-6 mt-6 mb-6 bg-gray-50 rounded-lg py-6 ring-1 ring-gray-300 ring-inset">
                <Games />
                {/* pagination */}
                <Pagination />
            </div>
            
        </div>
    )
}

export default Store
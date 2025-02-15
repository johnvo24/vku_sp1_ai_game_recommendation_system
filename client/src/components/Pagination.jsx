import { FaChevronLeft } from "react-icons/fa"
import { FaChevronRight } from "react-icons/fa"
import { Link } from "react-router-dom"

const Pagination = () => {
    return (
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 py-3 sm:px-6 mt-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <Link
                to="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                Previous
                </Link>
                <Link
                to="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                >
                Next
                </Link>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                        <span className="font-medium">97</span> results
                    </p>
                </div>
                <div>
                    <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                        <Link
                        to="#"
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <FaChevronLeft className="h-4 w-4" aria-hidden="true" />
                        </Link>
                {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-offset-0" */}
                        <Link
                        to="#"
                        aria-current="page"
                        className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                        1
                        </Link>
                        <Link
                            to="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
                        >
                            2
                        </Link>
                        <Link
                            to="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                            3
                        </Link>
                        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                        ...
                        </span>
                        <Link
                            to="#"
                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        >
                            8
                        </Link>
                        <Link
                            to="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
                        >
                            9
                        </Link>
                        <Link
                            to="#"
                            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-primary ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
                        >
                            10
                        </Link>
                        <Link
                            to="#"
                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <FaChevronRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Pagination
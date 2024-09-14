import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import NavbarAdmin from './NavbarAdmin'
import SidebarAdmin from './SidebarAdmin'

const Layout = () => {
    const location = useLocation()
    const resutlt = location.pathname.substring(0, 6)

    return (
        resutlt === "/admin" ? (
            <div>
                <SidebarAdmin />
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
                <main className='w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-200 min-h-screen transition-all main'>
                    <NavbarAdmin />
                    <Outlet />
                </main>
            </div>
        ) : (
            <div>
                <Header />
                    <Outlet />
                <Footer />
            </div>
        )
    )
}

export default Layout
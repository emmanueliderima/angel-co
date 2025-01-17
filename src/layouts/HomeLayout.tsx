import Sidebar from "@/components/sidebar"
import React from "react"
import { Outlet } from "react-router-dom"

interface HomeLayoutProps { 
    children?: React.ReactNode 
}

const HomeLayout: React.FC<HomeLayoutProps> = () => {
  return (
    <main className="relative border border-solid border-orange-800">
      Navbar

      <div className="flex">
        <Sidebar />

        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-26 max-md:pb-14 sm:px-14">
          <div className="w-full">
            <Outlet />
          </div>
        </section>
      </div>
    </main>
  )
}

export default HomeLayout

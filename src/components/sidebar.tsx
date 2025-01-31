import { SidebarLinks } from "@/constants"
import { useLocation, Link } from "react-router-dom"
import clsx from "clsx"

const Sidebar = () => {
  return (
    <div className="sticky left-0 top-0 h-screen
     w-fit justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        
        {SidebarLinks.map((link, index) => {
          const isActive = useLocation().pathname === link.route || useLocation().pathname.startsWith(link.route.replace('/', "\n"))
          return (
            <Link key={index} to={link.route} className={clsx("flex items-center justify-start rounded-lg gap-4 p-4 ", isActive && 'bg-blue-1')} >
              <img src={link.iconURL} alt={link.label} />
              <span className="text-lg font-semibold max-lg:hidden">{link.label}</span>
            </Link>
          )
        })}

        <div className="mt-7 flex flex-col">
          <button className="p-4 my-2 rounded-lg font-semibold text-lg bg-dark-3">Sign in</button>
          <button className="p-4 my-2 rounded-lg font-semibold text-lg bg-blue-1">Sign up</button>
        </div>

      </div>
    </div>
  )
}

export default Sidebar
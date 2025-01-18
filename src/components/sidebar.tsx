import { SidebarLinks } from "@/constants"
import { useLocation } from "react-router-dom"
import clsx from "clsx"

const Sidebar = () => {
  return (
    <div className="sticky left-0 top-0 h-screen
     w-fit justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]">
      <div className="flex flex-1 flex-col gap-6">
        
        {SidebarLinks.map((link, index) => {
          const isActive = useLocation().pathname === link.route || useLocation().pathname.startsWith(link.route.replace('/', "\n"))
          return (
            <a key={index} href={link.route} className={clsx("flex items-center justify-start rounded-lg gap-4 p-4 ", isActive && 'bg-blue-1')} >
              <img src={link.iconURL} alt={link.label} />
              <span className="text-lg font-semibold max-lg:hidden">{link.label}</span>
            </a>
          )
        })}

      </div>
    </div>
  )
}

export default Sidebar
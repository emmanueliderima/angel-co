import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose
  } from "@/components/ui/sheet"  
import { SidebarLinks } from "@/constants"
import clsx from "clsx"
import { useLocation } from "react-router-dom"


const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <img src="/icons/hamburger.svg" alt="menu" className="cursor-pointer sm:hidden" />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-dark-1 border-none">
            <a href="/">
                <img src="/logo-no-bg.png" alt="logo" className="w-[100px] h-[80px]" />
            </a>

            <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh-72px)]">
                <SheetClose asChild>
                    <section className="flex h-full flex-col gap-6 pt-16 px-3 text-white">

                        {SidebarLinks.map((link, index) => {
                            const isActive = useLocation().pathname === link.route || useLocation().pathname.startsWith(link.route.replace('/', "\n"))
                            return (
                                <SheetClose asChild>
                                    <a key={index} href={link.route} className={clsx("flex items-center w-full max-w-60 rounded-lg gap-4 p-4", isActive && 'bg-blue-1')} >
                                        <img src={link.iconURL} alt={link.label} />
                                        <span className="text-lg font-semibold">{link.label}</span>
                                    </a>
                                </SheetClose>
                            )
                        })}

                    </section>
                </SheetClose>
            </div>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav
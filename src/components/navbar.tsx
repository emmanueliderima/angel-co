import MobileNav from "./MobileNav"


const Navbar = () => {
  return (
    <div className='flex justify-between fixed top-0 left-0 w-full z-50 px-6 py-4 lg:px-10  items-center h-16 bg-dark-1 text-white'>
        <a href="/">
            <img src="/logo-no-bg.png" alt="logo" className="w-[100px] h-[80px]" />
        </a>

        <div className="flex flex-between gap-5">
            <MobileNav />
        </div>
    </div>
  )
}

export default Navbar
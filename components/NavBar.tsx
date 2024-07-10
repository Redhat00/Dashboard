import Image from "next/image"
import Link from "next/link"
import ThemeToggle from "@/components/ThemeToggle"


const NavBar  = () => {
    return (
        <div className="top-0 w-full border h-20 md:h-15">
            <nav className="h-full w-full flex justify-between items-center px-4 md:px-8">
                <div className="flex gap-4 dark:text-white">
                    <Image src="/hamburger.svg" alt="" width={24} height={24} className="hidden lg:flex"/>
                    <p className="text-lg">Transactions</p>
                </div>

                 {/* mobile hambuger */}
                <div className="flex md:hidden">
                    <Image src="hamburger.svg" alt="" width={24} height={24}/>
                </div>
                
                {/*right part of the navigation bar */}
                <div className="hidden md:flex w-fit items-center pl-2 gap-3 dark:text-white">
                    <div className="flex gap-2 items-center min-w-fit">
                        <ThemeToggle/>
                        <Image src="/icons8-notification-192.png" alt="notification icon" width={24} height={24} className="cursor-pointer dark:invert"/>
                    </div>
                    <div className="flex justify-between border-l-2 w-fit gap-4 pl-3 right-0">
                        <Link href="/" className="flex items-center right-0 gap-4 ">
                            <Image src="/icons8-male-user-96.png" alt="" width={34} height={34} className="dark:invert"/>
                            <p className="">Daniel Daniel</p>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;
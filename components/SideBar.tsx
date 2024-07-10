"use client"

import Image from "next/image"
import { sidebarLinks, logoutLink } from "@/constants"
import { usePathname } from 'next/navigation'
import Link from "next/link"
import {cn} from "@/lib/utils"



const SideBar = () => {
    const pathname = usePathname();

    return (
        <section className="hidden md:flex left-0 flex-col lg:w-[20%] min-h-screen border overflow-hidden md:w-[10%]">
            <nav className="px-6 flex flex-col py-7 md:px-2 justify-between">
                <Link href="/" className="md:hidden lg:flex items-center justify-center w-fit ml-3">
                    <Image src="/logo.svg" alt="logo" width={120} height={38} className="cursor-pointer dark:invert" />
                </Link>

                <div className="lg:hidden flex flex-1 items-center justify-center border rounded-lg">
                    <div className="rounded-full border hover:bg-[#1e433f]">
                        <Image src="/hamburger.svg" alt="" width={24} height={23}/>
                    </div>
                </div> 
                
                <div className="flex flex-col pt-[7rem]">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.routes || pathname.startsWith(`${link.routes}/`)

                        return (
                            <Link href={link.routes} key={link.label} className={cn("flex gap-2 items-center justify-between p-4 px-2 rounded-lg  hover:bg-[#c4bbbb]", { "bg-[#1E1E1E]": isActive})}>
                                <div className="size-6 gap-2 flex flex-1">
                                    <Image src={link.imgUrl} alt={link.label} width={24} height={24} className={cn({'brightness-[3] invert-0 dark:invert': isActive})}/>
                                    <p className={cn("items-center flex flex-1 justify-between max-xl:hidden", { "!text-white": isActive })}>
                                    {link.label}</p>
                                </div>
                            </Link>
                        )})}

                    {logoutLink.map((items) => {
                        return (
                            <Link href={items.routes} key={items.label} className="flex gap-2 items-center p-4 pt-[9rem] rounded-lg justify-start text-[#726e6e]">
                                <Image src={items.imgUrl} alt="" width={24} height={24}/>
                                <p className="items-center">
                                    {items.label}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </nav>
        </section>
    )
}

export default SideBar
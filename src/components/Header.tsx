'use client'

import ThemeSwitcher from "./ThemeSwitcher"
import Link from "next/link"
import { Nav_links } from "@/lib/data"
import Button from "./button"
import { Drawer, DrawerClose, DrawerContent, DrawerTitle, DrawerTrigger } from "./ui/drawer"
import { IconButton } from "./icon-button"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"
import { useWindowSize } from "react-use"
import { useFramerScroll } from "@/lib/use-scroll"
import { cn } from "@/lib/utils"

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const size = useWindowSize();
    const scrolled = useFramerScroll(40)

    useEffect(() => {
        if(size?.width && size?.width > 767 && isOpen) {
            setIsOpen(false);
        }
    }, [size, isOpen])
  return (
    <>
        <header className={cn('sticky top-0 z-30 w-full border-b border-transparent', scrolled ? 'border-gray-100 dark:border-gray-800  backdrop-blur-xl' : '')}>
            <div className="flex justify-between items-center w-full mx-auto max-w-7xl p-4 md:px-8">
                <Link href={"/"}>
                    <div className="text-gray-600 dark:text-white font-bold text-2xl md:text-3xl tracking-[15px]">ADI</div>
                </Link>
                <div className="md:flex md:justify-between md:items-center md:gap-6 hidden">
                    <ul className="list-none flex font-medium gap-6 dark:text-white text-gray-600">
                        {Nav_links.map((item, index) => (
                            <li key={index}>
                                <Link href={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="w-0.5 h-8 bg-gray-100 dark:bg-white"></div>
                    <ThemeSwitcher/>
                    <Button onClick={() => window?.open('/files/cv-adi.pdf', '_blank')}>
                        Download CV
                    </Button>
                </div>

                <Drawer open={isOpen} onOpenChange={setIsOpen} direction="right">
                    <DrawerTrigger asChild className="flex md:hidden">
                        <IconButton>
                            <Menu/>
                        </IconButton>
                    </DrawerTrigger>
                    <VisuallyHidden>
                        <DrawerTitle></DrawerTitle>
                    </VisuallyHidden>
                    <DrawerContent>
                        <div className="">
                            <div className="flex justify-between items-center p-4 border-b">
                                <Link href={"/"}>
                                    <div className="text-gray-600 dark:text-white font-bold text-2xl md:text-3xl tracking-[15px]">ADI</div>
                                </Link>
                                <DrawerClose asChild>
                                    <IconButton>
                                        <X/>
                                    </IconButton>
                                </DrawerClose>
                            </div>

                            <div className="p-4 border-b">
                                <ul className="flex flex-col gap-2 font-medium dark:text-white text-gray-600">
                                    {Nav_links.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.href} onClick={() => {
                                                const timeoutId = setTimeout(() => {
                                                setIsOpen(false);
                                                clearTimeout(timeoutId);
                                                }, 500)}}>{item.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex p-4 justify-between items-center">
                                <p className="text-gray-600 dark:text-white">Switch Theme</p>
                                <IconButton asChild>
                                    <ThemeSwitcher/>
                                </IconButton>
                            </div>
                            <div className="px-4">
                                <Button onClick={() => window?.open('/files/cv-adi.pdf', '_blank')} className="w-full">
                                    Download CV
                                </Button>
                            </div>
                        </div>
                    </DrawerContent>
                </Drawer>
            </div>
        </header>
    </>
  )
}

export default Header

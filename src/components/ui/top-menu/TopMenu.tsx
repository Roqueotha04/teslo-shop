import Link from "next/link"
import { MontserratAlternates } from "@/src/config/fonts"
import { IoCartOutline, IoSearchOutline } from "react-icons/io5"

export const TopMenu = () =>{
    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div>
                <Link href="/">
                    <span className={`${ MontserratAlternates.className} antialiased font-bold `}> Teslo </span>
                    <span> | Shop </span>
                </Link>
            </div>

            <div className="hidenn sm:block">

                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/men">Hombres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/women">Mujeres</Link>
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-100" href="/category/kids">Niños</Link>
            </div>

            <div className="flex items-center">
                <Link href="/search" className="mx-2">
                    <IoSearchOutline className="w-5 h-5"></IoSearchOutline>
                </Link>

                <Link href="/cart">
                <div className="relative">
                    <span className="absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
                        3
                    </span>
                    <IoCartOutline className="w-5 h-5"></IoCartOutline>
                </div>
                </Link>

                <button className="m-2 p-2 rounded-md transition-all hover:bg-gray-100">
                    Menu
                </button>
            </div>

        </nav>
    )
}
import Link from "next/link"
import { MontserratAlternates } from "@/src/config/fonts"

export const TopMenu = () =>{
    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div>
                <Link href="/">
                    <span className={`${ MontserratAlternates.className} antialiased font-bold `}> Teslo </span>
                </Link>
            </div>
        </nav>
    )
}
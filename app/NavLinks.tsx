'use client'

import { categories } from "../constants"
import NavLink from "./NavLink"
import { usePathname } from "next/navigation"

type Props = {
    Menu: boolean
    setMenu: Function
}

function NavLinks({ Menu, setMenu }: Props) {
    const pathName = usePathname();

    const isActive = (path: string) => {
        return pathName?.split('/').pop() === path
    }
    return (
        <nav className={`grid ${Menu ? 'flex flex-row' : 'grid-cols-4 md:grid-cols-7'} text-xs md:text-sm gap-4 ${Menu ? 'p-5' : 'pb-10'} max-w-6xl mx-auto ${!Menu && 'border-b'}`}>
            {categories.map((category) => (
                <NavLink key={category} category={category} isActive={isActive(category)} setMenu={setMenu} />
            ))}
        </nav>
    )
}

export default NavLinks
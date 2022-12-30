import Link from "next/link"

type Props = {
    category: String,
    isActive: boolean,
    setMenu: Function
}

function NavLink({ category, isActive, setMenu }: Props) {
    return (
        <div onClick={() => setMenu(false)}>
            <Link href={`/news/${category}`} className={`navLink ${isActive && 'underline decoration-orange-400 underline-offset-4'}`} legacyBehavior>
                {category}
            </Link>
        </div>
    )
}

export default NavLink
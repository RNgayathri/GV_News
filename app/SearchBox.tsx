'use client'

import { useRouter } from "next/navigation";
import { FormEvent, HtmlHTMLAttributes, useState } from "react"

function SearchBox() {
    const [input, setInput] = useState('');
    const router = useRouter();
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input) return;
        router.push(`/search?term=${input}`)

    }
    return (
        <form onSubmit={handleSearch} className="max-w-6xl max-auto flex items-center justify-between px-5 mx-auto p-3">
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search Keywords..."
                className="w-full h-15 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400" />
            <button type="submit" disabled={!input} className="text-orange-400 disabled:text-gray-400">Search</button>
        </form>
    )
}

export default SearchBox
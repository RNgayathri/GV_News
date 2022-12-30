'use client'
import React, { useState } from 'react'
import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import DarkModeButton from './DarkModeButton'
import { BrowserView, MobileView, isMobile } from "react-device-detect"
import { countries } from "./CountryConstants";

function Header() {
    const [Menu, setMenu] = useState(false)
    const [ctyMenu, setCtyMenu] = useState(false)
    const [cty, setCty] = useState(-1)
    return (
        <header>
            <div className='flex flex-row p-10 items-center justify-between'>
                <MobileView>
                    <button className="relative" type="button">
                        <Bars3Icon className='h-8 w-8 cursor-pointer' onClick={() => setMenu(!Menu)} />
                        {Menu && <div className="z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 absolute top-12"><NavLinks Menu={Menu} setMenu={setMenu} /></div>}
                    </button>
                </MobileView>
                {/* <BrowserView>
                    <button className="relative" type="button">
                        <Bars3Icon className='h-8 w-8 cursor-pointer' onClick={() => setMenu(!Menu)} />
                        {Menu && <div className="flex flex-col z-10 w-44 bg-white rounded divide-y divide-gray-500 shadow dark:bg-gray-800 absolute top-10">
                            <Link href={`/technologies`} onClick={() => {
                                setMenu(false)

                            }} className='text-center p-2'>
                                <span className="hover:font-bold transition-transform duration-200 ease-out">Technologies</span>
                            </Link>
                            <Link href={`/contact`} onClick={() => {
                                setMenu(false)

                            }} className='text-center p-2'>
                                <span className="hover:font-bold transition-transform duration-200 ease-out">Contact</span>
                            </Link>
                        </div>}
                    </button>
                </BrowserView> */}
                <Link href="/" prefetch={false}>
                    <h1 className='font-serif text-4xl text-center underline decoration-6 decoration-orange-400'>GV NEWS</h1>
                </Link>
                <div className='flex items-center justify-end space-x-2'>
                    <DarkModeButton />
                    {/* <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800'>Subscribe Now</button> */}
                    <button className="flex bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-xl dark:bg-slate-800" type="button" onClick={() => setCtyMenu(!ctyMenu)}>
                        <span className='text-center'>
                            {cty != -1 ? `${countries[cty].emoji} ${countries[cty].name}` : "ALL"}
                        </span><ChevronDownIcon className='h-5 w-5 ml-3 mt-1' />
                        {ctyMenu && <div className="flex flex-col z-10 w-44 bg-white rounded divide-y divide-gray-500 shadow dark:bg-gray-800 absolute top-20 right-10">
                            <Link href={`/`} onClick={() => {
                                setCty(-1)
                                setCtyMenu(false)

                            }} className='text-center p-2'>
                                <span className="hover:font-bold transition-transform duration-200 ease-out">ALL</span>
                            </Link>
                            {countries.map((country, i) =>

                                <span className='text-center p-2' key={country.code} onClick={() => {
                                    setCty(i)
                                    setCtyMenu(false)

                                }}>
                                    <Link href={`newslist/${countries[i].code}`}>
                                        <span className="hover:font-bold transition-transform duration-200 ease-out">{country.emoji} {country.name}</span>
                                    </Link>
                                </span>
                            )}
                        </div>}
                    </button>
                </div>
            </div >
            <BrowserView><NavLinks Menu={isMobile ? Menu : false} setMenu={setMenu} /></BrowserView>
            <SearchBox />
        </header >
    )
}

export default Header
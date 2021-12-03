import React from 'react'
import { NavLink } from 'react-router-dom'

const arrMenuItem = [{title:''}]

export default function Header(props) {
    return (
        <header class="p-4 bg-coolGray-100 text-coolGray-800 bg-black bg-opacity-40 text-white fixed w-full z-10" >
            <div class="container flex justify-between h-16 mx-auto">
                <a href="#" aria-label="Back to homepage" class="flex items-center p-2">
                    <img src="https://tix.vn/app/assets/img/icons/web-logo.png" alt="Tix" className="h-12"/>
                </a>
                <ul className="items-stretch hidden space-x-3 lg:flex" style={{lineHeight:'2rem'}}>
                    <li class="flex">
                        <NavLink to="/" href="#" class=" items-center px-4 -mb-1 border-b-1 border-transparent text-violet-600 border-violet-600" activeClassName="border-b-1 border-white">Home</NavLink>
                    </li>
                    <li class="flex">
                        <NavLink to="/contact" href="#" class=" items-center px-4 -mb-1 border-b-1 border-transparent"  activeClassName="border-b-1 border-white">Contact</NavLink>
                    </li>
                    <li class="flex">
                        <NavLink to="/news" href="#" class=" items-center px-4 -mb-1 border-b-1 border-transparent"  activeClassName="border-b-1 border-white">News</NavLink>
                    </li>
                </ul>
                <div class="items-center flex-shrink-0 hidden lg:flex">
                    <button class="self-center px-8 py-3 rounded">Sign in</button>
                    <button class="self-center px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50">Sign up</button>
                </div>
                <button class="p-4 lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-coolGray-800">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
        </header>
    )
}

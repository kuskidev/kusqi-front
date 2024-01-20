'use client'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { mainMenuItemsList } from '@/app/lib/main-nav/main-menu-items'
import React from 'react'
import NavButton from './main-nav-button/NavButton'
import { useRouter } from 'next/navigation'
import AuthButton from './auth-button/AuthButton'
import { authButtons } from '@/app/lib/main-nav/auth-button-items'
import ShopCartButton from '../shop-cart-button/ShopCartButton'

const MainNav = () => {
    const route = useRouter()
    return (
        <nav className="flex flex-row justify-start w-full h-28 items-center">
            <div className="flex flex-row w-1/4 h-full items-center justify-center">
                <div className="pt-2 relative mx-auto text-gray-600">
                    <input
                        className="border-2 border-gray-300 bg-white w-80 h-12 px-5 pr-16 rounded-3xl text-sm focus:outline-none"
                        type="search"
                        name="Buscar..."
                        placeholder="Buscar..."
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-6 mr-4 flex justify-center items-center">
                        <FaMagnifyingGlass />
                    </button>
                </div>
            </div>
            <div className="w-3/4 h-full flex flex-row items-center border-b-2 border-l-2 border-base-300">
                <div className="flex flex-row justify-evenly gap-3 w-3/5">
                    {mainMenuItemsList.map((item, index) => (
                        <NavButton
                            tooltip={item.tooltip}
                            Icon={item.icon}
                            action={() => route.push(item.link)}
                            key={index}
                        />
                    ))}
                </div>
                <div className="flex flex-row w-2/5 h-full items-center justify-center gap-7">
                    <ShopCartButton />
                    {authButtons.map((item, index) => (
                        <AuthButton
                            key={index}
                            buttonText={item.title}
                            action={() => route.push(item.link)}
                            Icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default MainNav

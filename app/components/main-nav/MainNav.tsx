'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import AuthButton from './auth-button/AuthButton'
import { authButtons } from '@/app/lib/main-nav/auth-button-items'
import ShopCartButton from '../shop-cart-button/ShopCartButton'
import CentralMenu from './central-menu/CentralMenu'
import SearchSection from './search-section/SearchSection'

const MainNav = () => {
    const route = useRouter()
    return (
        <nav className="bg-neutral-content flex flex-row justify-start w-full h-28 items-center fixed top-0">
            <div className="w-1/4 h-full ">
                <SearchSection />
            </div>
            <div className="w-3/4 h-full flex flex-row items-center border-b-2 border-l-2 border-base-300">
                <div className="w-3/5">
                    <CentralMenu />
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

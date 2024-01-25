import { mainMenuItemsList } from '@/app/lib/main-nav/main-menu-items'
import React from 'react'
import NavButton from '../main-nav-button/NavButton'
import { useRouter } from 'next/navigation'
import { FaAlignJustify } from 'react-icons/fa6'

type MenuItemsProps = {
    route: ReturnType<typeof useRouter>
}

const MenuItems = ({ route }: MenuItemsProps) => {
    return (
        <>
            {mainMenuItemsList.map((item, index) => (
                <NavButton tooltip={item.tooltip} Icon={item.icon} action={() => route.push(item.link)} key={index} />
            ))}
        </>
    )
}

const CentralMenu = () => {
    const route = useRouter()

    return (
        <>
            <div className="lg:hidden">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        role="button"
                        className="text-base ml-4 h-14 w-14 rounded-full border-2 border-base-300 flex flex-row justify-center items-center"
                    >
                        <FaAlignJustify size={30} />
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-64">
                        {mainMenuItemsList.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <li key={index} className="flex flex-row justify-start items-center">
                                    <div role="link" onClick={() => route.push(item.link)} className="w-full text-base">
                                        <Icon size={20} />
                                        <a>{item.tooltip}</a>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="w-full flex flex-row justify-evenly gap-3 max-lg:hidden">
                <MenuItems route={route} />
            </div>
        </>
    )
}

export default CentralMenu

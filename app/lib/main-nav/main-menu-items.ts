import { MainMenuItemsType } from '@/app/types/components-types'
import { FaShop, FaBagShopping, FaHouse, FaEarlybirds } from 'react-icons/fa6'

export const mainMenuItemsList: MainMenuItemsType[] = [
    {
        title: 'Home',
        icon: FaHouse,
        link: '/',
        tooltip: 'Inicio',
    },
    {
        title: 'Shops',
        icon: FaShop,
        link: '/shops',
        tooltip: 'Tiendas',
    },
    {
        title: 'Products',
        icon: FaBagShopping,
        link: '/products',
        tooltip: 'Productos',
    },
    {
        title: 'About',
        icon: FaEarlybirds,
        link: '/about',
        tooltip: 'Kusqi',
    },
]

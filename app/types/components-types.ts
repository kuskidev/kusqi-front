import { IconType } from 'react-icons'

export type MainMenuItemsType = {
    title: string
    icon: IconType
    link: string
    tooltip: string
}

export type AuthButtonsType = {
    title: string
    link: string
    tooltip: string
    icon: IconType
}

export type PostType = {
    id: number
    title: string
    body: string
    media: string[]
    shop: string
    publishedAt: string
}

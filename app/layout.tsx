import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainNav from './components/main-nav/MainNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Kusqi',
    description: 'Crea tu tienda online en minutos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MainNav />
                {children}
            </body>
        </html>
    )
}

import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'

const ShopCartButton = () => {
    return (
        <button
            className="tooltip tooltip-bottom bg-neutral-content text-base border-base rounded-full h-14 w-14 border-2 flex justify-center items-center"
            data-tip="Carrito de compras"
        >
            <FaCartShopping size={24} />
        </button>
    )
}

export default ShopCartButton

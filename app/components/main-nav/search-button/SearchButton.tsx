import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

const SearchButton = () => {
    return (
        <button className="bg-neutral-content text-base border-base rounded-full h-12 w-12 border-2 flex justify-center items-center xl:hidden">
            <FaMagnifyingGlass size={24} />
        </button>
    )
}

export default SearchButton

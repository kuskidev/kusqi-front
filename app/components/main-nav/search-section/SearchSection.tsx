import React from 'react'
import { FaEarlybirds, FaMagnifyingGlass } from 'react-icons/fa6'
import SearchButton from '../search-button/SearchButton'

const SearchSection = () => {
    return (
        <div className="flex flex-row h-full items-center justify-center gap-6">
            <div className="min-h-10 min-w-10 flex flex-row justify-center items-center">
                <FaEarlybirds size={36} />
            </div>
            <div className="pt-2 relative mx-0 text-gray-600 max-xl:hidden">
                <input
                    className="border-2 border-gray-300 bg-white w-full max-w-80 h-12 px-5 pr-16 rounded-3xl text-sm focus:outline-none"
                    type="search"
                    name="Buscar..."
                    placeholder="Buscar..."
                />
                <button type="submit" className="absolute right-0 top-0 mt-6 mr-4 flex justify-center items-center">
                    <FaMagnifyingGlass />
                </button>
            </div>
            <div className="dropdown dropdown-center">
                <SearchButton />
                <div tabIndex={0} className="card compact dropdown-content z-[1] shadow bg-base-100 rounded-box w-fit">
                    <div tabIndex={0} className="card-body">
                        <h2 className="card-title">Busca lo que desees</h2>
                        <div className="join">
                            <div>
                                <div>
                                    <input className="input input-bordered join-item" placeholder="Buscar" />
                                </div>
                            </div>
                            <select defaultValue={'Ciudad'} className="select select-bordered join-item">
                                <option value="Ciudad" disabled defaultChecked>
                                    Ciudad
                                </option>
                                <option value="Oxapampa">Oxapampa</option>
                            </select>
                            <div className="indicator">
                                <button className="btn join-item bg-primary border-primary">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchSection

import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    Icon: IconType
    action: () => void
    buttonText: string
}

const AuthButton = ({ Icon, action, buttonText }: Props) => {
    return (
        <div className="flex flex-row justify-end items-center text-base cursor-pointer" onClick={action}>
            <button className="w-32 h-fit min-h-10 border-base border-2 rounded-3xl bg-neutral-content max-xl:hidden">
                {buttonText}
            </button>
            <div className="bg-neutral-content border-base rounded-full h-12 w-12 border-2 flex justify-center items-center -ml-5">
                <Icon size={24} />
            </div>
        </div>
    )
}

export default AuthButton

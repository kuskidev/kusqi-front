import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    action: () => void
    Icon: IconType
    className?: string
    tooltip?: string
}

const NavButton = ({ action, Icon, className, tooltip }: Props) => {
    return (
        <button
            className={`text-base w-20 h-20 rounded-full bg-primary hover:bg-secondary flex justify-center items-center hover:text-neutral-50 ${className} ${tooltip && 'tooltip tooltip-bottom'}`}
            onClick={action}
            data-tip={tooltip ?? ''}
        >
            <Icon size={32} />
        </button>
    )
}

export default NavButton

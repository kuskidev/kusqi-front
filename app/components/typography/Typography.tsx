import React from 'react'

type Props = {
    children: React.ReactNode
    className?: string
    upperCaseTitle?: boolean
}

const Typography = ({ children, className, upperCaseTitle }: Props) => {
    return <div className={`${className}`}>{upperCaseTitle ? children?.toString().toUpperCase() : children}</div>
}

export default Typography

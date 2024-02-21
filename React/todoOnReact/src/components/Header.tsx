import React from 'react'
import Logo from '../assets/Logo.svg'

export default function Header() {
    return (
        <header className="h-1/4 bg-[var(--gray-700)] w-full flex flex-col">
            <img
                className="h-1/3 w-48 m-auto "
                src={Logo}
                alt="Logo" />
        </header>
    )
}

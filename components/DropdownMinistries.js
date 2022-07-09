import React from 'react'
import Link from "next/link"


const DropdownMinistries = () => {
    return (
        <ul className="grid grid-template-rows-1 text-left min-w-max bg-blue-900 shadow lg:bg-gray-100 lg:opacity-85 rounded">
            <li className = "px-4 py-1 hover:bg-blue-300 hover:text-white">
                <Link href="/sacraments">Sacraments</Link> 
            </li>           
        </ul>
    )
}

export default DropdownMinistries
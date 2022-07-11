import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useRouter } from 'next/router'


const DropdownMinistries = () => {
    const router = useRouter();
    const { showNavbarMenu, showCloseButton } = useContext(GlobalContext); 

    return (
        <ul className="grid grid-template-rows-1 text-left min-w-max bg-blue-800 shadow lg:bg-gray-100 lg:opacity-85 rounded">
            <li className = "px-4 py-1 hover:bg-blue-300 hover:text-white"
            onClick = {() => { 
                        router.push("/sacraments");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                Sacraments
            </li>           
        </ul>
    )
}

export default DropdownMinistries
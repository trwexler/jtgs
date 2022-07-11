import React, { useContext} from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useRouter } from 'next/router'


const DropdownRE = () => {
    const router = useRouter();
    const { showNavbarMenu, showCloseButton } = useContext(GlobalContext); 
    
    return (
        <>
            <ul className="grid grid-template-rows-2 text-left lg:min-w-max bg-blue-800 shadow lg:bg-gray-100 lg:opacity-85 rounded">
                <li className="px-4 py-2 hover:bg-blue-300 hover:text-white border-b"
                onClick = {() => { 
                        router.push("/religious-education");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    Religious Education
                </li>
                <li className="px-4 py-2 hover:bg-blue-300 hover:text-white"
                onClick = {() => { 
                        router.push("/rcia");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    RCIA-Rite of Christian Initiation of Adults
                </li>            
            </ul>
        </>
    )

    
}

export default DropdownRE




import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import { useRouter } from 'next/router'



const DropdownPlaylist = () => {

    const router = useRouter();
    const { showNavbarMenu, showCloseButton } = useContext(GlobalContext); 
    
    return (
        <>
            <ul className = "grid grid-template-rows-2 text-left min-w-max bg-blue-800 shadow lg:bg-gray-100 lg:opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b"
                onClick = {() => { 
                        router.push("/christmas-playlist");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    Christmas Playlist
                </li>
                
                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white"
                onClick = {() => { 
                        router.push("/lenten-playlist");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    Lenten Playlist
                </li>
            </ul>
        </>
        
    )
}

export default DropdownPlaylist
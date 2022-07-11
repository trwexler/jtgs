import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Link from "next/link"
import { useRouter } from 'next/router'



const DropdownHome = () => {

    const router = useRouter();
    const { showNavbarMenu, showCloseButton } = useContext(GlobalContext); 
    
    
    return (
        <>
            <ul className = "grid grid-template-rows-6 text-left min-w-max bg-blue-800 shadow lg:bg-gray-100 lg:opacity-85 rounded">
                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white transition-all border-b">
                    <Link href = "https://www.google.com/maps/place/805+Warren+St,+Beverly,+NJ+08010/@40.0641632,-74.9248504,17z/data=!3m1!4b1!4m5!3m4!1s0x89c14c8bc39ef5b9:0x6e26d12b00db095c!8m2!3d40.0641632!4d-74.9248504">
                        Directions
                    </Link>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p onClick = {() => router.push("https://www.jppc.net/onlinebulletins/511template.pdf")}>
                        Current Bulletin
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b">
                    <p onClick = {() => router.push("https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK")}>
                        Archived Bulletin
                    </p>
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b"
                onClick = {() => { 
                        router.push("/staff");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    Staff
                </li>


                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white border-b"
                onClick = {() => { 
                        router.push("/parish-history");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    Parish History
                </li> 
            

                <li className = "px-4 py-2 hover:bg-blue-300 hover:text-white"
                onClick = {() => { 
                        router.push("/st-peters-cemetery");
                        showNavbarMenu();
                        showCloseButton();
                        }}>
                    St. Peters Cemetery
                </li>
            </ul>            
        </>
    )
}

export default DropdownHome
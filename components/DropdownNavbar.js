import { useReducer } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import DropdownHome from './DropdownHome';
import DropdownMinistries from './DropdownMinistries';
import DropdownRE from './DropdownRE';
import DropdownForm from './DropdownForm';
import DropdownPlaylist from './DropdownPlaylist';
import { useRouter } from "next/router";
import Link from "next/link";



const DropdownNavbar = () => {
    const router = useRouter();

    const reducer = (state,action) => {

        switch(action.type) {

            case 'showHome':
                return {...state, showDropdownHome: !state.showDropdownHome, showDropdownMinistries: false, showDropdownRE: false, showDropdownForm: false, showDropdownPlaylist: false }

            case 'showMinistries':
                return {...state, showDropdownMinistries: !state.showDropdownMinistries, showDropdownHome: false, showDropdownRE: false, showDropdownForm: false, showDropdownPlaylist: false}   

            case 'showRE':
                return {...state, showDropdownRE: !state.showDropdownRE, showDropdownHome: false, showDropdownMinistries: false, showDropdownForm: false, showDropdownPlaylist: false}    

            case 'showForm':
                return {...state, showDropdownForm: !state.showDropdownForm, showDropdownHome: false, showDropdownMinistries: false, showDropdownRE: false, showDropdownPlaylist: false}

            case 'showPlaylist':
                return {...state, showDropdownPlaylist: !state.showDropdownPlaylist, showDropdownHome: false, showDropdownMinistries: false, showDropdownRE: false, showDropdownForm: false }    

            default: 
            throw new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, { showDropdownHome:false, showDropdownMinistries:false, showDropdownRE:false, showDropdownForm:false, showDropdownPlaylist:false })

    
    return (
        <>
            <ul className="grid grid-template-rows-8 text-center text-white min-w-max text-sm bg-black opacity-85 rounded ">
                <li className="px-4 py-2 relative hover:bg-blue-800 border-b cursor-pointer"
                    onClick = {() => router.push("/")}>
                    Home
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down"
                            onClick={() =>  dispatch({ type: 'showHome' }) }>
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className="absolute z-10"> */}
                    <div className="z-10"> 
                        {state.showDropdownHome ? <DropdownHome /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b cursor-pointer"
                    onClick={() => dispatch({ type:"showMinistries" })}>
                    Ministries
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className="absolute z-10"> */}
                    <div className="z-10">
                        {state.showDropdownMinistries ? <DropdownMinistries /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b cursor-pointer"
                onClick={() => dispatch({ type:"showRE" })}>
                    Religious Education
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className="absolute z-10"> */}
                    <div className="z-10">
                        {state.showDropdownRE ? <DropdownRE /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 border-b cursor-pointer"
                onClick={() => dispatch({ type:"showForm" })}>
                    Forms
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className="absolute z-10"> */}
                    <div className="z-10">
                        {state.showDropdownForm ? <DropdownForm /> : null}
                    </div>
                </li>


                <li className="px-4 py-2 hover:bg-blue-800 border-b cursor-pointer">
                    <Link href="/donations">Donations</Link>
                </li>


                <li className="px-4 py-2 hover:bg-blue-800 border-b cursor-pointer" onClick={() =>
                    router.push("/photo-gallery")
                }>
                    Photo Gallery
                </li>
                

                <li className="px-4 py-2 hover:bg-blue-800 border-b cursor-pointer">
                    <Link href="/mass-livestream">Mass-Livestream</Link>
                </li>


                <li className="px-4 py-2 relative hover:bg-blue-800 cursor-pointer"
                onClick = {() => dispatch({ type:"showPlaylist" })}>
                    Playlists
                    <span className="ml-2">
                        <FontAwesomeIcon
                            icon={faCaretDown}
                            className="fas fa-caret-down">
                        </FontAwesomeIcon>
                    </span>

                    {/* <div className = "absolute z-10"> */}
                    <div className = "z-10">
                        {state.showDropdownPlaylist? <DropdownPlaylist/> : null}
                    </div>
                </li>
            </ul>


        </>
    )
}

export default DropdownNavbar
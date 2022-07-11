import React, { useState, useReducer } from 'react'
import Image from "next/image"
import ReactAudioPlayer from 'react-audio-player'



const LentenPlaylist = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const reducer = (state, action) => {

        switch(action.type) {

            case "CurrentSong":
                return { ...state, selectedSong:action.payload}

            case "SongTitle":
                return { ...state, selectedTitle:action.payload}   

            default:
                throw new Error()     
        }
    }

    // const [selectedSong, setSelectedSong] = useState("")
    // const [selectedTitle, setSelectedTitle] = useState("")

    const [state, dispatch] = useReducer(reducer, { selectedSong:"", selectedTitle:""})

    return (
        <div className="mx-20 lg:mx-44">
            <Image
                className=""
                src={imgURL}
                //loader function generates the URL for the image by appending a root domain to the provided source
                //apparently we don't need the loader function for locally stored images
                loader={() => imgURL}
                alt=""
                // layout = "fill" 
                layout="responsive"
                objectFit="cover"
                width={1250}
                height={380}
            />

            <p className="text-xl md:text-2xl lg:text-3xl mt-8 mb-8 text-center text-sky-600 tracking-wider">
                Lenten Playlist
            </p>

            <div className="lg:mx-36">
                <p className="text-sm md:text-md lg:text-lg mb-4">{state.selectedTitle}</p>
            <ReactAudioPlayer className="w-full" src={`${state.selectedSong}`} autoPlay controls />


            <ul className="w-50 mt-10 leading-10">
                <li
                    className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                    // onClick={() => { setSelectedSong("/Believer.mp3")
                    // setSelectedTitle("Believer - Imagine Dragons") }}
                    onClick={() => { dispatch({type:"CurrentSong", payload:"Believer.mp3"})
                    dispatch({type:"SongTitle", payload:"Believer - Imagine Dragons"}) }} >
                    <p>1. Believer - Imagine Dragons</p>
                    <p>3:36</p>

                </li>


                <li
                    className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { dispatch({type:"CurrentSong", payload:"Demons.mp3"})
                    dispatch({type:"SongTitle", payload:"Demons - Imagine Dragons"}) }}>
                    <p>2. Demons - Imagine Dragons </p>
                    <p>3:56</p>
                </li>


                <li
                    className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { dispatch({type:"CurrentSong", payload:"It'sASin.mp3"})
                    dispatch({type:"SongTitle", payload:"It's A Sin - Pet Shop Boys"}) }}>    
                    <p>3. It&#34;s A Sin - Pet Shop Boys</p>
                    <p>5:10</p>
                </li>


                <li
                    className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { dispatch({type:"CurrentSong", payload:"Believer.mp3"})
                    dispatch({type:"SongTitle", payload:"Believer - Imagine Dragons"}) }}>    
                    <p>4. Believer - Imagine Dragons</p>
                    <p>3:36</p>

                </li>


                <li
                    className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { dispatch({type:"CurrentSong", payload:"Demons.mp3"})
                    dispatch({type:"SongTitle", payload:"Demons - Imagine Dragons"}) }}>    
                    <p>5. Demons - Imagine Dragons </p>
                    <p>3:56</p>
                </li>


                <li
                    className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                    onClick={() => { dispatch({type:"CurrentSong", payload:"It'sASin.mp3"})
                    dispatch({type:"SongTitle", payload:"It's A Sin - Pet Shop Boys"}) }}>      
                    <p>6. It&#34;s A Sin - Pet Shop Boys</p>
                    <p>5:10</p>
                </li>

            </ul>

            </div>

        </div>
    )
}

export default LentenPlaylist
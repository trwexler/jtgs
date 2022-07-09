import { useReducer } from "react";
import Image from "next/image"
import ReactAudioPlayer from 'react-audio-player'
import Link from "next/link";


const ChristmasPlaylist = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const reducer = (state, action) => {
        switch (action.type) {
            case "CurrentSong":
                return { ...state, selectedSong: action.payload }

            case "SongTitle":
                return { ...state, selectedTitle: action.payload }

            default:
                throw new Error()
        }
    }

    // const [selectedSong, setSelectedSong] = useState("")
    // const [selectedTitle, setSelectedTitle] = useState("")
    const [state, dispatch] = useReducer(reducer, { selectedSong: "", selectedTitle: "" })


    return (
        <div className="mx-20 lg:mx-44">
            <Image
                className=""
                src={imgURL}                
                loader={() => imgURL}
                alt=""
                layout="responsive"
                objectFit="cover"
                width={1250}
                height={380}
            />

            <p className="text-xl md:text-2xl lg:text-3xl mt-8 mb-8 text-center text-sky-600 tracking-wider">
                Christmas Playlist
            </p>

            <div className="lg:mx-36">
                <p className="text-md md:text-lg lg:text-xl mb-4">{state.selectedTitle}</p>
                <ReactAudioPlayer className="w-full" src={`${state.selectedSong}`} autoPlay controls />


                <ul className="w-50 mt-10 leading-10">
                    <li
                        className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                        // onClick={() => { setSelectedSong("/Believer.mp3")
                        // setSelectedTitle("Believer - Imagine Dragons") }} >
                        onClick={() => {
                            dispatch({ type: "CurrentSong", payload: "/Believer.mp3" })
                            dispatch({ type: "SongTitle", payload: "Believer - Imagine Dragons" })
                        }} >
                        <p>1. Believer - Imagine Dragons</p>
                        <p>3:36</p>

                    </li>


                    <li
                        className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                        onClick={() => {
                            dispatch({ type: "CurrentSong", payload: "Demons.mp3" })
                            dispatch({ type: "SongTitle", payload: "Demons - Imagine Dragons" })
                        }}>
                        <p>2. Demons - Imagine Dragons </p>
                        <p>3:56</p>
                    </li>


                    <li
                        className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg border-b-2 py-2 hover:text-sky-600"
                        onClick={() => {
                            dispatch({ type: "CurrentSong", payload: "It'sASin.mp3" })
                            dispatch({ type: "SongTitle", payload: "It's A Sin - Pet Shop Boys" })
                        }}>
                        <p>3. It&#39;s A Sin - Pet Shop Boys</p>
                        <p>5:10</p>
                    </li>


                    <li
                        className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                        onClick={() => {
                            dispatch({ type: "CurrentSong", payload: "Believer.mp3" })
                            dispatch({ type: "SongTitle", payload: "Believer - Imagine Dragons" })
                        }}>
                        <p>4. Believer - Imagine Dragons</p>
                        <p>3:36</p>

                    </li>


                    <li
                        className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                        onClick={() => {
                            dispatch({ type: "CurrentSong", payload: "Demons.mp3" })
                            dispatch({ type: "SongTitle", payload: "Demons - Imagine Dragons" })
                        }}>
                        <p>5. Demons - Imagine Dragons </p>
                        <p>3:56</p>
                    </li>


                    <li
                        className="cursor-pointer flex justify-between text-sm md:text-md lg:text-lg py-2 border-b-2 hover:text-sky-600"
                        onClick={() => {
                            dispatch({ type: "CurrentSong", payload: "It'sASin.mp3" })
                            dispatch({ type: "SongTitle", payload: "It's A Sin - Pet Shop Boys" })
                        }}>
                        <p>6. It&#39;s A Sin - Pet Shop Boys</p>
                        <p>5:10</p>
                    </li>

                </ul>

            </div>

            {/* <div>
                <p className="text-xl mt-16 underline text-center hover:text-teal-600">
                    <Link href="https://www.youtube.com/watch?v=AdadBIqqyZg">Christmas Songs Mix</Link>
                </p>
            </div> */}

        </div>
    )
}

export default ChristmasPlaylist
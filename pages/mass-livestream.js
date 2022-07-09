import React from 'react'
import Link from "next/link"
import ReactPlayer from "react-player/youtube";
import YouTube from "react-youtube";
import Image from "next/image";




const MassLivestream = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const opts = {
        // height: '390',
        // width: '640',
        playerVars: {
            autoplay: 1,
        },
    };


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

            <p className="text-xl md:text-2xl lg:text-3xl mt-8 text-sky-600 text-center tracking-wider">
                Mass Livestream
            </p>

            <p className="text-md md:text-lg lg:text-xl mt-8 text-sky-600 text-center">
                <Link href="https://www.youtube.com/channel/UCCS4c14stjvrJ5S49p6F_SQ">MASS - Livestreamed on Youtube </Link>
            </p>

            <p className="text-lg md:text-xl lg:text-2xl mt-8 mb-4 text-sky-600 text-center">
                Current Livestream
            </p>


            {/* Hydration failed error */}
            {/* <ReactPlayer
                url="https://www.youtube.com/watch?v=21X5lGlDOfg"
                playing={true}
                // muted={true}
                controls={false}
            /> */}


            <div className="aspect-w-16 aspect-h-9 lg:aspect-w-16 lg:aspect-h-9 lg:mx-20">
                <iframe src="https://www.youtube.com/embed/86YLFOog4GM?autoplay=1" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>                    
                </iframe>
            
            </div>


            {/* <YouTube className="aspect-w-16 aspect-h-9 lg:aspect-[16/9]" videoId="21X5lGlDOfg" opts={opts} /> */}


        </div>
    )
}

export default MassLivestream
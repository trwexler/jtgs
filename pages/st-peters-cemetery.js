import React from 'react'
import Image from "next/image"



const StPetersCemetery = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


    return (
        <div className="mx-20 md:mx-32 lg:mx-44">
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

            <p className="text-2xl lg:text-3xl py-10 pb-5 text-sky-600 text-center tracking-wider">
                St. Peter&#39;s Cemetery
            </p>

            <p className="text-lg lg:text-2xl mt-5 mb-5 text-sky-600">
                St. Peter&#39;s Roman Catholic Cemetery and Mausoleum Est. 1917
            </p>

            <p className="text-sm md:text-md lg:text-lg mb-5 leading-8 lg:leading-10">
                Please Contact the Parish Office for Plot &#38; Mausoleum Availability.
            </p>

            <p className="text-sm md:text-md lg:text-lg mt-2">
                856.461.0100
            </p>
            
        </div>
    )
}

export default StPetersCemetery
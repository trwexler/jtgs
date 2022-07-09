import React from 'react'
import Image from "next/image"



const ParishHistory = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


    return (
        <div className="mx-20 md:mx-32 lg:mx-44">
            <Image
                className=""
                src={imgURL}
                //loader function generates the URL for the image by appending a root domain to the provided source
                //apparently we don't need the loader function for locally stored images
                loader={() => imgURL}
                alt=""                
                layout="responsive"
                objectFit="cover"
                width={1250}
                height={380}
            />

            <p className="text-2xl lg:text-3xl py-10 pb-5 text-sky-600 text-center tracking-wider">
                Parish History
            </p>

            <p className="text-lg lg:text-xl lg:text-2xl mt-5 text-sky-600">
                Jesus, the Good Shepherd Parish History
            </p>

            <p className="text-sm md:text-md lg:text-lg mt-5 leading-8 lg:leading-10">
                Established in 2008 through merger of the parishes of St. Peter in Riverside and St. Joseph in Beverly, this vibrant Catholic family of the Diocese of Trenton serves the communities of Beverly, Burlington Township, Delanco, Edgewater Park and Riverside.
            </p>
            
        </div>
    )
}

export default ParishHistory
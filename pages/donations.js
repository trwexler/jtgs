import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Donations = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


    return (
        <div className="mx-20 md:mx-32 lg:mx-44">
            <div>
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
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl py-10 pb-5 text-sky-600 text-center tracking-wider">
                Donations
            </p>

            <p className="text-md md:text-lg lg:text-xl mt-5 underline text-center hover:text-teal-600">
                <Link href="https://www.osvhub.com/jesusthegoodshepherd/sign_in?redirectUri=%2Fjesusthegoodshepherd%2Ffunds">Click Here to donate</Link>
            </p>

            <p className="text-sm md:text-md lg:text-lg text-center mt-5">
                Thank You
            </p>
        </div>
    )
}

export default Donations
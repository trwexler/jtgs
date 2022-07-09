import React from 'react'
import Link from "next/link"
import Image from "next/image"



const CatholicCharities = () => {

    let imgURL1 =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    let imgURL2 =
        "https://www.jesusthegoodshepherd.org/wp-content/uploads/CC2012-LogoPMS-300x162.jpg";


    return (
        <div className="mx-20 lg:mx-48">
            <Image
                className=""
                src={imgURL1}                
                loader={() => imgURL1}
                alt=""
                layout="responsive"
                objectFit="cover"
                width={1250}
                height={380}
            />

            <p className="text-xl md:text-2xl lg:text-3xl mt-8 mb-10 text-sky-600 text-center tracking-wider">
                Catholic Charities
            </p>

            <div className="flex flex-col lg:flex-row justify-between lg:items-center">
                <div>
                    <Image
                        src={imgURL2}
                        loader={() => imgURL2}
                        alt=""
                        width={350}
                        height={200}>
                    </Image>
                </div>



                <p className="px-10 leading-8 text-md md:text-lg lg:text-xl lg:flex-1 lg:leading-10">
                    Know someone needing assistance with food, housing, drug addiction, mental health, domestic violence or immigration? Contact
                    Catholic Charities, Diocese of Trenton
                    <Link href="https://www.catholiccharitiestrenton.org/">
                        <span className="text-blue-700 font-semibold cursor-pointer"> www.catholiccharitiestrenton.org</span>
                    </Link>
                </p>
            </div>

        </div>

    )
}

export default CatholicCharities
import React from 'react'
import Image from "next/image"
import Link from "next/link"


const RCIA = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";


    return (
        <div className="mx-20 lg:mx-32 min-h-screen">
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
                R.C.I.A- Christian Initiation of Adults
            </p>

            <p className="text-sm md:text-md lg:text-lg mt-10 leading-8 lg:leading-10">
                The R.C.I.A program is a process of preparing adults for initiation into the Church through the reception of the sacraments of Baptism, Holy Communion, and Confirmation. Anyone who is not baptized, comes from other traditions, or wants to learn more about their Catholic Faith is welcome!
            </p>


            <p className="text-xl mt-8 text-sky-600">Contact:</p>

            <p className="text-sm md:text-md lg:text-lg mt-8">
                Name: &#34;Mr. Gary Schmitt - Deacon&#34;
            </p>

            <p className="text-sm md:text-md lg:text-lg mt-2">
                Contact: &#34;856.461.0100 ext. 202&#34;
            </p>

            <p className="text-sm md:text-md lg:text-lg mt-2">
                <Link href={"mailto: g.schmitt@jesusthegoodshepherd.org"}>
                    <a className="text-gray-600 text-md lg:text-lg underline">g.schmitt@jesusthegoodshepherd.org</a>
                </Link>

            </p>

            <p className="text-sm md:text-md lg:text-lg mt-8">
                Name: &#34;Sheryl Zoppina - Parish Secretary&#34;
            </p>

            <p className="text-sm md:text-md lg:text-lg mt-2">
                Contact: &#34;856.461.0100 ext. 201&#34;
            </p>

            <p className="text-sm md:text-md lg:text-lg mt-2">
                <Link href={"mailto: s.zoppina@jesusthegoodshepherd.org"}>
                    <a className="text-gray-600 text-md lg:text-lg underline">s.zoppina@jesusthegoodshepherd.org</a>
                </Link>
            </p>
        </div>
    )
}

export default RCIA
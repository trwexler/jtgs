import React from 'react'
import Link from "next/link"
import Image from "next/image"



const Card = ({ source, title, telephone, email }) => {

        return (

                <div className="flex flex-col my-10 pt-5 text-center lg:bg-gray-100 lg:px-24 lg:shadow-xl shadow-gray-300 rounded-xl">
                        <div>
                                <Image className="rounded mt-6 shadow text-center lg:px-32"
                                        src={source}
                                        loader={() => source}
                                        alt=""
                                        objectFit="cover"
                                        width={320} height={240}
                                />
                        </div>



                        <div className="py-4">
                                <h5 className="text-gray-900 text-sm text-center md:text-md lg:text-lg font-semibold text-gray-500 mb-2 text-lg lg:text-xl">{title}</h5>
                                <p className="text-gray-700 text-gray-500 text-sm text-center md:text-md lg:text-lg mb-4">{telephone}</p>
                                {/* sending email to the clicked email Id */}
                                
                                        <Link href={`mailto: ${email}`}>
                                        <a className="text-gray-600 text-mdlg:text-lg underline">{email}</a>
                                </Link>

                               
                                
                        </div>
                </div>


        )
}

export default Card
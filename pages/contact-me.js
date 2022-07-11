import React from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";


const ContactForm = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const handleClick = () => {

    }


    return (
        <>
        
            
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
            

            <p className="text-xl md:text-2xl lg:text-3xl my-8 text-red-800 font-semibold tracking-wider text-center">Contact Me</p>

            <div className="mx-20 lg:mx-44">

            <p className="text-sm lg:text-md lg:mx-48">Fields marked with an <span className="text-red-600"> &#42; </span> are required</p>

            <form className="lg:mx-48">
            <div className="flex flex-col my-8">
                <label className="text-lg font-bold pb-2">
                    Name <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col my-8">
                <label className="text-lg font-bold pb-2">
                    Phone
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col my-8">
                <label className="text-lg font-bold pb-2">
                    Email <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
            </div>

            <div className="flex flex-col my-8">
                <label className="text-lg font-bold pb-2">
                    Message <span className="text-red-600"> &#42; </span>
                </label>

                <textarea type="text" rows="8" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
            </div>

            <p className="text-lg font-bold my-8">
                Recaptcha
            </p>

            <ReCAPTCHA
                sitekey="process.env.RECAPTCHA_SITE_KEY"
            // onChange={onChange}
            />

            <button 
            className="mb-24 mt-10 text-lg text-white bg-black px-5 py-3 shadow-lg shadow-gray-400 rounded-lg hover:bg-gray-800 ease-in"
            onClick={ handleClick }>
                Submit
            </button>

            </form>


        </div>
        </>
        
    )
}

export default ContactForm
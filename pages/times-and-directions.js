import React from 'react'
import Image from "next/image";



const Directions = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    

    return (
        <>
        <div>
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
            </div>

        <p className="text-xl md:text-2xl lg:text-3xl text-sky-600 text-center my-10 tracking-wider lg:mx-32">
                Times and Directions
            </p>

            <div className="mx-10 my-20 grid gap-x-32 lg:mx-32 lg:grid-cols-2">
            

            <div>
                <div className="aspect-w-16 aspect-h-9 lg:aspect-w-16 lg:aspect-h-9">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.504241280067!2d-74.92703908467888!3d40.06416317940775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c14c8bc39ef5b9%3A0x6e26d12b00db095c!2s805%20Warren%20St%2C%20Beverly%2C%20NJ%2008010!5e0!3m2!1sen!2sus!4v1654193569369!5m2!1sen!2sus" 
                width="600" height="450" className="border:0;" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
                <p className="text-md md:text-lg lg:text-xl font-bold mt-5">
                    Our Location
                </p>

                <p className="text-sm md:text-md lg:text-lg ">
                    Jesus, The Good Shepherd Parish at St. Joseph&#39;s Church
                </p>

                <p className="text-sm md:text-md lg:text-lg mb-5">
                    805 Warren St, Beverly, NJ 08010
                </p>
            </div>

            <div>
                <p className="text-md md:text-lg lg:text-xl font-bold">
                    Mass Schedule  /  Horario De Las Misas  /  Horario De Missa
                </p>

                <p className="text-sm md:text-md lg:text-lg font-semibold mt-5">
                    Saturday Evening / Sabado
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    5:00 pm
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    7:30 pm in Portugues
                </p>

                <p className="text-sm md:text-md lg:text-lg font-semibold mt-5">
                    Sunday / Domingo
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    8:00 am
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    10:00 am
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    12:00 pm  en Espanol
                </p>

                <p className="text-sm md:text-md lg:text-lg font-semibold mt-5">
                    Weekday Mass  /  Misa diaria  /  Missa diaria
                </p>
                <p>
                    Weekday Mass is in Church 9:00 am.
                </p>

                <p className="text-sm md:text-md lg:text-lg font-semibold mt-5">
                    Holy Hour
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    Tuesday, 7 pm Holy Hour in English
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    Miércoles, 7 pm Hora Santa en Español
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    Quinta-feria, 8 pm Grupo de oração em Português
                </p>

                <p className="text-sm md:text-md lg:text-lg font-semibold mt-5">
                    Holy Days Mass Schedule
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    7:00 pm Vigil Mass
                </p>
                <p className="text-sm md:text-md lg:text-lg ">
                    Holy Days 9:00 am and 7:00 pm
                </p>

            </div>
        </div>
        </>
        
    )
}

export default Directions
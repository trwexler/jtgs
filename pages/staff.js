import Card from "../components/Card.js";
import Image from "next/image"
import { staffData } from "../components/StaffData.js";



const Staff = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";



    return (

        // <div className="flex flex-col justify-around my-4 px-20 mx-auto font-Alice font-semibold  lg:w-full">
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

            <p className="text-xl md:text-2xl lg:text-3xl py-10 pb-5 text-sky-600 text-center tracking-wider">
                MEET OUR STAFF
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">

                {/* <div className="mt-6">
                <ul className="leading-8 text-lg text-gray-500 cursor-pointer">
                    <li className="hover:text-teal-500">Directions</li>
                    <li className="hover:text-teal-500">Archived Bulletins</li>
                    <li className="hover:text-teal-500">Current Bulletin</li>
                    <li className="hover:text-teal-500">Staff</li>
                    <li className="hover:text-teal-500">Parish History</li>
                    <li className="hover:text-teal-500">St Peters Cemetery</li>
                </ul>
            </div> */}



                {
                    staffData.map((staff, index) => {
                        return (
                            <Card
                                key={staff.Id}
                                source={staff.Image}
                                title={staff.Name}
                                telephone={staff.Contact}
                                email={staff.Email} />

                        )

                    })
                }


            </div>
        </div>
    );
}

export default Staff;
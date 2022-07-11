import Card from "../components/Card.js";
import Image from "next/image"
import { staffData } from "../components/StaffData.js";



const Staff = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";



    return (
        

        <div className="">
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

        <div className="mx-20 md:mx-32 lg:mx-44">           

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20">

                
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
        </div>
    );
}

export default Staff;
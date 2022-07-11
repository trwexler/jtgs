import Image from "next/image"
import { useRouter } from "next/router"



const Sacraments = () => {

    const router = useRouter();

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

            <p className="text-xl md:text-2xl lg:text-3xl mt-8 mb-10 text-red-800 text-center tracking-wider">
                Sacraments
            </p>

            <div className="mx-20 lg:mx-44">

                <div className="flex flex-col md:flex-row justify-between">
                    <div className="md:mr-10">


                        <p className="text-lg lg:text-2xl mt-5 text-sky-600">
                            Sacrament of Baptism
                        </p>

                        <p className="text-sm lg:text-lg mt-2">
                            English: 2:00 pm on the 1st Sunday at St. Joseph&#39;s Church
                            2:00 pm on the 3rd Sunday at St. Joseph&#39;s Church
                        </p>

                        <p className="text-sm lg:text-lg mt-2">
                            Spanish: 2:00 pm on the 2nd Sunday at St. Joseph&#39;s Church
                        </p>

                        <p className="text-sm lg:text-lg mt-2">
                            Portuguese: 2:00 pm on the 4th Sunday at St. Joseph&#39;s Church
                        </p>


                        {/* <p className="text-lg mt-2">
                        Please call the Parish Office for Baptismal Preparation sessions and to schedule the celebration of the sacrament.
                    </p> */}


                    </div>


                    <div className="mt-6 lg:mt-5">
                        <Image className="rounded-lg shadow-xl"
                            src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            //loader function generates the URL for the image by appending a root domain to the provided source
                            loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            alt=""
                            width={320} height={240}
                        />
                    </div>
                </div>

                <p className="text-sm lg:text-lg mt-4 text-sky-600 italic mb-10">
                    Please call the Parish Office for Baptismal Preparation sessions and to schedule the celebration of the sacrament.
                </p>

                {/* <div className="w-3/5 h-[1px] bg-[#C9D5D9] mx-auto my-16"></div> */}
                <div className="w-3/5 h-[1px] bg-[#C9D5D9] mx-auto lg:my-16"></div>

                <div className="flex flex-col mt-10 md:flex-row-reverse md:justify-between">
                    <div className="md:ml-5 lg:ml-10">


                        <p className="text-lg lg:text-2xl mt-5 text-sky-600">
                            Sacrament of Reconciliation (Confession)
                        </p>

                        <p className="text-sm lg:text-lg mt-2 ">
                            Been a while since you&#39;ve gone to Confession?
                            <span className="underline text-sky-600 hover:cursor-pointer ml-1"
                                onClick={() => router.push("https://jesusthegoodshepherd.org/wp-content/uploads/Sacrament-of-Penance.pdf")}>
                                Click here for a reference guide</span>, including a pray for the Act of Contrition.
                        </p>


                    </div>

                    <div className="mt-6 mb-6 lg:mt-5">
                        <Image className="rounded shadow"
                            src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            //loader function generates the URL for the image by appending a root domain to the provided source
                            loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            alt=""
                            width={320} height={240}
                        />
                    </div>
                </div>


                <div className="w-3/5 h-[1px] bg-[#C9D5D9] mx-auto lg:my-16"></div>


                <div className="flex flex-col md:flex-row mt-10 justify-between">
                    <div className="md:mr-10">


                        <p className="text-lg md:text-md lg:text-2xl mt-5 text-sky-600">
                            Anointing of the Sick
                        </p>

                        <p className="text-sm md:text-md lg:text-lg mt-2">
                            Urgent sick calls at any time. Holy Communion will be brought to the sick and the confined regularly upon request.
                        </p>

                        <p className="text-sm md:text-md lg:text-lg mt-2">
                            Call the Parish Office for further information.
                        </p>

                        <p className="text-sm md:text-md lg:text-lg mt-2">
                            Questions about the sacrament of Anointing of the Sick?
                        </p>

                        <p className="text-sm md:text-md lg:text-lg mt-2 mb-5 cursor-pointer text-sky-600"
                            onClick={() => router.push("https://jesusthegoodshepherd.org/wp-content/uploads/Sacrament-of-Anointing-of-the-Sick.pdf")}>
                            Click here for answers.
                        </p>


                    </div>

                    <div className="mb-10 lg:mt-5">
                        <Image className="mt-6 rounded shadow"
                            src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            //loader function generates the URL for the image by appending a root domain to the provided source
                            loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            alt=""
                            width={320} height={240}
                        />
                    </div>
                </div>

                
                <div className="w-3/5 h-[1px] bg-[#C9D5D9] mx-auto lg:my-16"></div>


                <div className="flex flex-col mt-10 md:flex-row-reverse justify-between">
                    <div className="md:ml-5 lg:ml-10">


                        <p className="text-lg md:text-xl lg:text-2xl mt-5 text-sky-600">
                            Sacrament of Marriage (Matrimony)
                        </p>

                        <p className="text-sm md:text-md lg:text-lg mt-2">
                            Please call the Parish Office for arrangements at least nine (9) months in advance of the requested wedding date.
                        </p>


                    </div>

                    <div className="mt-6 mb-6 lg:mt-5">
                        <Image className="rounded shadow"
                            src={"https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            //loader function generates the URL for the image by appending a root domain to the provided source
                            loader={() => "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
                            alt=""
                            width={320} height={240}
                        />
                    </div>
                </div>


                <div className="w-3/5 h-[1px] bg-[#C9D5D9] mx-auto lg:my-16"></div>



            </div>



        </div>
    )
}

export default Sacraments
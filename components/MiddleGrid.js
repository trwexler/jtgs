import { useRouter } from "next/router"



const MiddleGrid = () => {
    const router = useRouter();


    return (
        <>        
        <p className = "text-xl md:text-2xl lg:text-3xl text-center font-semibold tracking-widest text-gray-500 ">ADDITIONAL RESOURCES </p>

        <div className="grid grid-cols-1 py-10 mx-16 lg:mx-36 mt-10 lg:grid-cols-3 gap-10">

            <div className="relative">
                <div className="w-100 lg:h-56 lg:border border-gray-400 rounded-md shadow-lg"></div>
                <p className="cursor-pointer text-sm text-gray-500 font-semibold absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-blue-500 hover:scale-125 transition-all lg:text-xl"
                    onClick={() =>
                        router.push("https://www.usccb.org/resources/2022cal.pdf")
                    }
                >
                    Liturgical Calendar
                </p>
            </div>



            <div className="relative">
                <div className="w-100 lg:h-56 lg:border border-gray-400 rounded-md shadow-lg"></div>
                <p className="cursor-pointer text-sm text-gray-500 font-semibold absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-blue-500 hover:scale-125 transition-all lg:text-xl"
                    onClick={() =>
                        router.push("https://www.jppc.net/onlinebulletins/511template.pdf")
                    }
                >
                    Current Bulletin
                </p>

            </div>


            <div className="relative">
                <div className="w-100 lg:h-56 lg:border border-gray-400 rounded-md shadow-lg"></div>
                <p className="cursor-pointer text-sm text-gray-500 font-semibold absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-blue-500 hover:scale-125 transition-all lg:text-xl"
                    onClick={() =>
                        router.push(
                            "https://drive.google.com/drive/folders/1kCpyRMakRBDVJFjr_v5fTY6-C5t4ALhK"
                        )
                    }
                >
                    Archived Bulletins
                </p>
            </div>



            <div className="relative">
                <div className="w-100 lg:h-56 lg:border border-gray-400 rounded-md shadow-lg"></div>
                <p className="cursor-pointer text-sm text-gray-500 font-semibold absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-blue-500 hover:scale-125 ease-in duration-300 lg:text-xl"
                    onClick={() =>
                        router.push("https://bible.usccb.org/daily-bible-reading")
                    }
                >
                    Daily Readings
                </p>
            </div>


            <div className="relative">
                <div className="w-100 lg:h-56 lg:border border-gray-400 rounded-md shadow-lg"></div>
                <p className="cursor-pointer text-sm text-gray-500 font-semibold absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-blue-500 hover:scale-125 transition-all lg:text-xl"
                    onClick={() =>
                        router.push("https://docs.google.com/document/d/1htsneE3xglAvJETB6jCG9QwJOxKEWz1hkosQ8cx4LOY/edit")
                    }
                >
                    New Parishioner
                </p>

            </div>


            <div className="relative">
                <div className="w-100 lg:h-56 lg:border border-gray-400 rounded-md shadow-lg"></div>
                <p className="cursor-pointer text-sm text-gray-500 font-semibold absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:text-blue-500 hover:scale-125 transition-all lg:text-xl"
                    onClick={() =>
                        router.push("/catholic-charities")
                    }
                >
                    Catholic Charities
                </p>
            </div>
        </div>
        </>

        // <div className = "grid grid-cols-1 place-items-center bg-slate-200 py-10 lg:py-32 mx-16 lg:mx-36 mt-10 tracking-wider lg:grid-cols-3 gap-5">


    )
}

export default MiddleGrid
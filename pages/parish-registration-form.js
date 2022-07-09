import React from 'react'
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
import ReCAPTCHA from "react-google-recaptcha";



const ParishRegistrationForm = () => {

    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    
    const handleClick = () => {

    }
    
return (
    <div className="mx-20 lg:mx-44">

        <Image
                className=""
                src={imgURL}
                //loader function generates the URL for the image by appending a root domain to the provided source
                //apparently we don't need the loader function for locally stored images
                loader={() => imgURL}
                alt=""
                // layout = "fill" 
                layout="responsive"
                objectFit="cover"
                width={1250}
                height={380}
            />


        <p className="text-xl md:text-2xl lg:text-3xl lg:text-3xl mt-8 mb-8 text-red-800 font-semibold tracking-wider text-center lg:mx-44">
            Parish Online Registration Form (Complete One Form For Each Person)
        </p>

        
            <p className="text-lg lg:mx-48">Fields marked with an <span className="text-red-600"> &#42; </span> are required</p>


        <form className="sm:text-sm md:text-md lg:text-lg lg:mx-48">
            {/* <div className="flex flex-col py-4">
                <label className="font-bold pb-2">
                    Last Name <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col py-4">
                <label className="font-bold mb-2">
                    First Name <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
            </div> */}



            
            <div className="flex flex-col justify-between my-8 lg:flex-row ">
                <div className="flex flex-col space-y-2 mb-4">
                <label className="font-bold text-gray-600">
                    Last Name <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg lg:w-[370px] px-4 py-2 shadow-md" />
                </div>

                <div className="flex flex-col space-y-2 ">
                <label className="font-bold text-gray-600">
                    First Name <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg lg:w-[370px] px-4 py-2 shadow-md" />
                </div>                
                
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    Address <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    City <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    US States <span className="text-red-600"> &#42; </span>
                </label>

                <select className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md">
                    <option value="">- Select State -</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="DC">District Of Columbia</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select>
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    Zip <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    Date <span className="text-red-600"> &#42; </span>
                </label>

                <input type="date" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md" placeholder="" />
            </div>


            {/* <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    Email
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    2nd Email
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg  px-4 py-2 shadow-md" />
            </div> */}



            <div className="flex flex-col justify-between my-8 lg:flex-row ">
                <div className="flex flex-col space-y-2 mb-4">
                <label className="font-bold text-gray-600">
                    Email
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg lg:w-[370px] px-4 py-2 shadow-md" />
                </div>

                <div className="flex flex-col space-y-2 ">
                <label className="font-bold text-gray-600">
                    2nd Email
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg lg:w-[370px] px-4 py-2 shadow-md" />
                </div>                
                
            </div>


            <div className="flex flex-col justify-between my-8 lg:flex-row ">
                <div className="flex flex-col space-y-2 mb-4">
                <label className="font-bold text-gray-600">
                    Telephone
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg lg:w-[370px] px-4 py-2 shadow-md" />
                </div>

                <div className="flex flex-col space-y-2 ">
                <label className="font-bold text-gray-600">
                    2nd Telephone
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg lg:w-[370px] px-4 py-2 shadow-md" />
                </div>                
                
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    Birth Date <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    Religion <span className="text-red-600"> &#42; </span>
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md" />
            </div>


            <div className="flex flex-col my-8">
                <label className="font-bold mb-2 text-gray-600">
                    Marital Status <span className="text-red-600"> &#42; </span>
                </label>

                <select className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md">
                    <option value="single">Single</option>
                    <option value="married">Married</option>
                    <option value="seperated">Seperated</option>
                    <option value="divorced">Divorced</option>
                    <option value="widow(er)">Widow (er)</option>
                </select>
            </div>


            <div className="flex flex-col my-8 text-sm md:text-md lg:text-lg ">
                <label className="font-bold mb-2 text-gray-600">
                    Sacraments
                </label>

                <div className="">
                    <input type="checkbox" name="sacraments1" value="None" className="mr-2" />
                    <label>None</label>
                </div>

                <div>
                    <input type="checkbox" name="sacraments2" value="Baptized" className="mr-2" />
                    <label>Baptized</label>
                </div>

                <div>
                    <input type="checkbox" name="sacraments3" value="Communion" className="mr-2" />
                    <label>Communion</label>
                </div>

                <div>
                    <input type="checkbox" name="sacraments4" value="Confirmation" className="mr-2" />
                    <label>Confirmtion</label>
                </div>

                <div>
                    <input type="checkbox" name="sacraments5" value="Marriage" className="mr-2" />
                    <label>Marriage</label>
                </div>

            </div>


            <div className="flex flex-col justify-between my-8 lg:flex-row ">
                <div className="flex flex-col space-y-2 mb-4">
                <label className="font-bold text-gray-600">
                    Office Use Only (Received)
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md" />
                </div>

                <div className="flex flex-col space-y-2 mb-4">
                <label className="font-bold text-gray-600">
                    Parish SOFT
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md" />
                </div>

                <div className="flex flex-col space-y-2">
                <label className="font-bold text-gray-600">
                    OSV
                </label>

                <input type="text" className="border border-stone-300 bg-gray-100 rounded-lg text-sm md:text-md lg:text-lg px-4 py-2 shadow-md" />
                </div>
                
                
            </div>



            <p className="font-bold my-4 text-gray-600">
                Recaptcha
            </p>

            <ReCAPTCHA
                sitekey="process.env.RECAPTCHA_SITE_KEY"
            // onChange={onChange}
            />

            <button
                className="mb-24 mt-16 text-sm md:text-md lg:text-lg text-white bg-black px-5 py-3 shadow-xl shadow-gray-400 rounded-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
                onClick={handleClick}>
                Register
            </button>
        </form>


        
    </div>
)
}

export default ParishRegistrationForm
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";
//import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import emailjs from '@emailjs/browser';
import Recaptcha from 'reaptcha';



const FacilitySchedulingForm = () => {

    // const onChange = (value) => {
    //     console.log("Captcha value:", value);
    // }

    const [captchaVerfied, setCaptchaVerified] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        //account required for info
        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm('service_26sgdkw', 'template_5l62d8k', form.current, 'iaiLgMDyRL7o2dAmK')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    let imgURL =
        "https://images.pexels.com/photos/701816/pexels-photo-701816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

    const handleClick = () => {

    }


    const onVerify = recaptchaResponse => {
        setCaptchaVerified(true)
    };


    return (
        <div className="mx-20 lg:mx-44">
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

            <p className="text-3xl mt-8 mb-8 text-sky-600 tracking-wider text-center lg:mx-44">
                Facility Scheduling Form
            </p>

            <p className="text-lg lg:mx-48">Fields marked with an <span className="text-red-600"> &#42; </span> are required</p>



            <form className="lg:mx-48" ref={form} onSubmit={sendEmail}>



                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Contact Name <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" name="contact_name" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                {/* <div className="flex flex-col">
                    <label className="text-lg font-bold my-2">
                        Date
                    </label>

                    <input type="date" name="date" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" placeholder="" />
                </div> */}

                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Date Requested <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="date" name="date_requested" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>

                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Start Time of Event <span className="text-red-600"> &#42; </span>
                    </label>

                    {/* <input type="datetime-local" name="start_time" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" /> */}
                    <input type="time" name="start_time" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        End Time of Event <span className="text-red-600"> &#42; </span>
                    </label>

                    {/* <input type="datetime-local" name="end_time" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" /> */}
                    <input type="time" name="end_time" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>



                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Sponsor Name (Organization) <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" name="sponsor_name" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Telephone <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="tel" name="telephone" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Email <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="email" name="email" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>




                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Type of Event (Describe)<span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" name="event_type" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Room Being Used (ex. Cafeteria)<span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="text" name="room_requested" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>




                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Expected Number of Attendees <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="number" name="attendees" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Set Up Before Event (Time) <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="time" name="setup_time" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Clean Up After Event (Time) <span className="text-red-600"> &#42; </span>
                    </label>

                    <input type="time" name="cleanup_time" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Special Instructions
                    </label>

                    <textarea type="text" name="instructions" rows="8" className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Paragraph Text
                    </label>

                    <textarea type="text"
                        rows="8"
                        placeholder={"**NOTE** NO alcoholic beverages permitted when children and minors  (21 years of age and younger) are present on the property during event."}
                        className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md" />
                </div>


                <div className="flex flex-col my-8">
                    <label className="text-lg font-bold pb-2">
                        Paragraph Text
                    </label>

                    <textarea
                        type="text"
                        rows="8"
                        className="border border-stone-300 bg-gray-100 rounded-lg text-lg px-4 py-2 shadow-md"
                        placeholder={"FOR OFFICE USE ONLY Date Received:____________________ Facility Scheduled? _________Yes    __________No Extra Parochial Insurance Received? ______Yes ______No ______N/A Processed By: _______________________________________________________"
                        } />
                </div>

                {/* might change it to HCaptcha */}
                <p className="text-lg font-bold my-8">
                    Recaptcha
                </p>

                {/* <ReCAPTCHA
                    // sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    data-size="compact"
                    sitekey='dummykey'
                    onChange={onChange}
                /> */}

                <Recaptcha sitekey="6LcTidkgAAAAAA6UpwyNYHIs7qD8FM9OTFIBf4gX" onVerify={onVerify}/>

                {/* <button
                    className="mb-24 mt-10 text-lg text-white bg-black px-5 py-3 shadow-lg shadow-gray-400 rounded-lg hover:bg-gray-800 ease-in"
                    onClick={handleClick}>
                    Submit
                </button> */}

                <input
                    className="mb-24 mt-10 text-lg text-white bg-black px-5 py-3 shadow-lg shadow-gray-400 rounded-lg hover:bg-gray-800 ease-in"
                    type="submit"
                    // send="value"
                    disabled={!captchaVerfied}
                    />
            </form>

        </div>
    )
}

export default FacilitySchedulingForm
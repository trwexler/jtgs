import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import heroPicture from "../public/SandDune.jpg";
import MiddleGrid from "../components/MiddleGrid";
import Calendar from "../components/Calendar.js";
import SliderHomepage from "../components/SliderHomepage.js"



export default function Home() {
  const router = useRouter();

  let imgURL =
    "https://images.pexels.com/photos/326058/pexels-photo-326058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";


  return (
    <div className="w-screen">

      {/* Background image section */}
      <div className="relative">
        <Image
          className="opacity-80"
          src={imgURL}
          //loader function generates the URL for the image by appending a root domain to the provided source
          //apparently we don't need the loader function for locally stored images
          loader={() => imgURL}
          alt=""
          // layout = "fill" 
          layout="responsive"
          objectFit="cover"
          width={1250}
          height={480}
        />



        {/* used "-translate-x-1/2" to mimic the functionality of translate(-50%) along the x axis which in turn helps in centering the text*/}
        <p className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md text-white leading-6 font-extrabold font-mono tracking-wide lg:text-5xl lg:tracking-wide lg:max-w-2xl ">
          The Parish Community of Jesus,the Good Shepherd
          United by faith, enriched by diversity
        </p>
      </div>




      {/* About the church section */}

      <div className="pt-20 pb-5 mx-16 lg:text-xl lg:leading-10 lg:mx-36">
        <p className = "text-xl md:text-2xl lg:text-3xl text-center font-semibold tracking-widest text-gray-500 mb-10">ABOUT US </p>        
        <p className="mb-10 italic">Established in 2008 through merger of the parishes of St. Peter in Riverside and St. Joseph in Beverly, this vibrant diverse
          Catholic family of the Diocese of Trenton serves the Delaware Riverfront communities of Beverly, Burlington Township, Delanco,
          Edgewater Park and Riverside.</p>
      </div>

      <div className="w-3/5 h-[1px] bg-[#C9D5D9] mx-auto"></div>


      {/* Slider Section */}

      <div className="mb-20">
        <SliderHomepage />
      </div>

      <div className="w-3/5 h-[1px] bg-[#C9D5D9] mx-auto"></div>

      {/* Grid Section */}
      <div className="mt-20 mb-20">
        <MiddleGrid />
      </div>

      <div className="w-3/5 h-[1px] bg-[#C9D5D9] mx-auto"></div>
    

      {/* Calendar Section */}
      
        <Calendar />
      


      {/* Footer Section */}


    </div>
  );
}

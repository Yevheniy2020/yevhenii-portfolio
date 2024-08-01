'use client';
import React, {useEffect, useState} from 'react';
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import useWindowWidth from "@/hooks/useWindowWidth";


const Spinner = ({setIsLoading}) => {
    const [isClient, setIsClient] = useState(false);
    const width = useWindowWidth()
    useEffect(() => {
        setIsClient(true)
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({});
        tl.to('#title_spinner', {
            opacity:1,
            duration: 1
        }).to('#circle_spinner', {
            opacity:1,
            duration: 1
        }).to('#circle_spinner', {
            ease: 'bounce',
            left: width > 576 ? 260: 180,
            duration: 2,
            onComplete: () => {
                setIsLoading(false);
            }
        });
    }, [isClient]);
    return (
       <>
           {isClient &&  <div className='w-screen h-screen bg-black  flex justify-center items-center'>
               <div className='relative'>
                   <span id='title_spinner' className='text-white text-7xl font-semibold relative z-10 font-montserrat tracking-wider text-shadow-sm	opacity-0 sm:text-5xl'>Portfolio</span>
                   <div id='circle_spinner' className='w-[142px] h-[142px] sm:w-[72px] sm:h-[72px] bg-gold rounded-full absolute top-[50%] translate-y-[-50%] z-1 left-[-60px] sm:left-[-20px] opacity-0'/>
               </div>
           </div>}
       </>
    );
};

export default Spinner;

'use client';
import React from 'react';
import DavidCanvas from "@/app/components/pages/About/DavidCanvas";
import BgEffectComponent from "@/app/components/ui/BgEffect/BgEffect.component";
import ReadAbout from "@/app/components/pages/About/ReadAbout";
import SocialComponent from "@/app/components/ui/Social.component";
import MenuComponent from "@/app/components/ui/Menu.component";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";



const About = () => {

    useGSAP(() => {
        gsap.to('#david_model', { opacity: 1, delay: 0.7, x:0 });
    }, []);

    return (
        <BgEffectComponent>
            <div className=' relative pt-[40px] overflow-hidden'>
                <div className='absolute top-0' >
                    <MenuComponent/>
                </div>
               <div className='flex justify-center gap-[100px] pl-[20px] pr-[20px] pb-[20px] md:gap-[20px] xsm:gap-[0px] xsm:flex-col-reverse xsm:items-center '>
                   <ReadAbout/>
                   <div id='david_model' className='relative max-h-[560px] xsm:h-[300px] translate-x-[50px] opacity-0'>
                       <DavidCanvas/>
                       <div className='absolute bottom-[30px] left-[50%]  translate-x-[-50%] z-10 xsm:bottom-[0px]'>
                           <SocialComponent/>
                       </div>
                   </div>
               </div>
            </div>
        </BgEffectComponent>

    );
};

export default About;

'use client';
import React from 'react';
import Form from "@/app/components/pages/Contact/Form/Form";
import SocialComponent from "@/app/components/ui/Social.component";
import BgEffectComponent from "@/app/components/ui/BgEffect/BgEffect.component";
import WavesEffect from "@/app/components/pages/Contact/WavesEffect";
import MenuComponent from "@/app/components/ui/Menu.component";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const Contact = () => {
    useGSAP(() => {
        gsap.to('#contact_title', { opacity: 1, delay: 0.2, x: 0 });
        gsap.to('#contact_circle', { opacity: 1, delay: 0.2, width: 100, height: 100 });
    }, []);

    return (
        <BgEffectComponent>
           <div className='relative z-100 w-screen h-screen m-0 text-center flex flex-col items-center justify-center pt-[50px]'>
               <div className='absolute top-0' >
                   <MenuComponent/>
               </div>
               <div className='relative z-10 mb-[38px]'>
                   <div id='contact_title' className='opacity-0 translate-x-[-50px] relative z-10 font-montserrat font-medium text-4xl text-white' style={{textShadow: '0 4px 4px rgba(0, 0, 0, 0.4)'}}>
                       Get in Touch
                   </div>
                   <div id='contact_circle' className=' w-[0px] h-[0px] rounded-[100px] bg-gold absolute top-[50%] translate-y-[-50%] left-[10px] z-100'/>
               </div>
               <Form/>
               <div className='mt-[20px]'>
                   <SocialComponent/>
               </div>
           </div>
            <WavesEffect/>
        </BgEffectComponent>
    );
};

export default Contact;

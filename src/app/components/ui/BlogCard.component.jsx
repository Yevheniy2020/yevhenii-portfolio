'use client'
import React from 'react';
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


const BlogCardComponent = ({data, isMobile}) => {

    useGSAP(() => {
        if (!isMobile) {
            const tl = gsap.timeline();
            tl.fromTo('#blog_date',
                {opacity: 0, x: '-50px'},
                {
                    opacity: 1,
                    duration: 0.5,
                    x: 0,
                    scrollTrigger: {
                        trigger: '#block_card',
                        start: 'top center',
                        end: 'bottom center',
                        toggleActions: 'play none none none',
                        scrub: true,
                    }
                });
            tl.fromTo('#card_info', {opacity: 0, x: '50px'},
                {
                    opacity: 1,
                    duration: 0.5,
                    x: 0,
                    stagger: 0.2,
                    scrollTrigger: {
                        trigger: '#block_card',
                        start: 'top center',
                        end: 'bottom center',
                        toggleActions: 'play none none none',
                        scrub: true,
                    }
                });

            tl.fromTo('#card_img', {opacity: 0, y: '50px'},
                {
                    opacity: 1,
                    duration: 0.5,
                    y: 0,
                    scrollTrigger: {
                        trigger: '#block_card',
                        start: 'top center',
                        end: 'bottom center',
                        toggleActions: 'play none none none',
                        scrub: true,
                    }
                });
        }
    }, [isMobile]);


    return (
        <div id='block_card' className='pt-[40px] pl-[16px] pr-[16px] '>
            <div  className='flex justify-center gap-[24px] md:flex-col md:items-center'>
                <div id='blog_date' className='flex flex-col gap-[7px] font-montserrat font-light text-white text-5xl xmd:hidden'>
                    <span >{data.month}</span>
                    <div className='w-[30px] h-[2px] bg-gold'/>
                    <span >{data.date}</span>
                </div>
                <Image id='card_img' src={data.path_img} width={576} height={320} alt={data.alt_img} className='w-[576px] h-full object-cover md:w-[420px] md:h-auto md:hidden'/>
                <div className='max-w-[470px] flex flex-col gap-[10px]'>
                    <span id='card_info'  className='font-fira text-3xl text-white xsm:text-2xl'>{data.title}</span>
                    <span id='card_info'  className='font-montserrat text-white text-[18px] xsm:text-[14px]'>{data.tags}</span>
                    <span id='card_info'  className='font-montserrat text-[18px] text-input xsm:text-[14px]'>{data.description}</span>
                    <a id='card_info' href={'blog/' + data.path_route}><span className='font-montserrat text-[20px] underline text-gold xsm:text-[16px]'>Read more</span></a>
                </div>
            </div>
        </div>
    );
};

export default BlogCardComponent;

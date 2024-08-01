'use client'
import React from 'react';
import Image from "next/image";
import BgEffectComponent from "@/app/components/ui/BgEffect/BgEffect.component";
import Link from "next/link";
import useWindowWidth from "@/hooks/useWindowWidth";

const MAIN_PATH_IMAGE = '/image/work';

const works = [
    {path_image: `${MAIN_PATH_IMAGE}/ficeadvisor.jpg`, alt: 'Image of Student Portal (FA)', name: 'FICEADVISER', stack: 'next.js / zustand /mui / storybook / sass', desc: 'Student Portal', path_site: "https://ficeadvisor.com/"},
    {path_image: `${MAIN_PATH_IMAGE}/ufn.jpg`, alt: 'Image of Ukrainian Freedom News', name: 'UFN', stack: 'next.js app route / strapi / sass', desc: 'Ukrainian Freedom News', path_site: "https://ufn-frontend-next-psi.vercel.app/" },
    {path_image: `${MAIN_PATH_IMAGE}/cmo.jpg`, alt: 'Image of Center for International Education (CIE)' , name: 'CMO', stack: 'next.js app route /mui / sass', desc: ' Center for International Education (CIE)', path_site: 'https://cmo.fictadvisor.com/en'},
]

const Work = () => {
    const width = useWindowWidth();
    return (
        <>
            {works.map((work, index) => {

                return(
                    <div className={`h-[100vh] sticky  top-0`} key={index}>
                        <BgEffectComponent>
                            {/*<div id="first_work" className='h-screen flex flex-col justify-center'>*/}
                            {/*    <Link href={work.path_site} >*/}
                            {/*        <div className='flex justify-center p-[20px] pl-[86px]'>*/}
                            {/*            <div className='w-[1056px] h-[630px] relative '>*/}
                            {/*                <Image className='rounded-[10px] w-[1056px] h-[630px] object-contain' src={work.path_image} width={1056} height={630} alt={work.alt}/>*/}
                            {/*                    <span className='w-full h-full bg-black absolute top-0 opacity-[60%] rounded-[10px]'/>*/}
                            {/*                <div className='absolute top-[50%] left-[-86px] translate-y-[-50%] text-white pl-[16px]'>*/}
                            {/*                    <div className='font-fira italic text-4xl md:text-3xl xsm:text-2xl	font-semibold text-shadow-custom'>*/}
                            {/*                        {work.stack}*/}
                            {/*                    </div>*/}
                            {/*                    <div className='font-fira text-9xl md:text-8xl xsm:text-5xl italic font-semibold	text-shadow-custom'>*/}
                            {/*                        {work.name}*/}
                            {/*                    </div>*/}
                            {/*                    <div className='font-fira italic text-4xl xsm:text-2xl md:text-3xl font-semibold	text-shadow-custom'>*/}
                            {/*                        {work.desc}*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </Link>*/}
                            {/*</div>*/}
                            <div id="first_work" className='h-screen flex flex-col justify-center overflow-hidden'>
                                <Link href={work.path_site} >
                                    <div className='flex justify-center flex-col p-[20px]'>
                                        <div className=' text-white pb-[34px] resize z-10'>
                                            <div className='font-fira italic text-xl  pb-[20px]	 font-semibold	text-shadow-custom'>
                                                {work.desc}
                                            </div>
                                            <div className='font-fira text-6xl italic font-semibold pb-[24px]	text-shadow-custom'>
                                                {work.name}
                                            </div>
                                            <div className='font-fira italic text-xl font-semibold text-shadow-custom'>
                                                {work.stack}
                                            </div>
                                        </div>
                                        <div className=' max-w-[1056px] w-full max-h-[630px] h-full relative '>
                                            <Image className='rounded-[10px] max-w-[1056px] w-full max-h-[630px] h-full object-contain relative z-10' src={work.path_image} width={1056} height={630} alt={work.alt}/>
                                            <span className='w-[260px] h-[260px] rounded-full bg-gold absolute bottom-[45%] left-[65%] z-1'/>
                                            <span className='w-full h-full bg-black absolute top-0 opacity-[60%] rounded-[10px] z-20'/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </BgEffectComponent>
                    </div>
                )
            })}
        </>
    );
};

export default Work;

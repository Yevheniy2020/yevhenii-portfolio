import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Mobile = ({work}) => {
    return (
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
                    <div className=' max-w-[1056px] w-full max-h-[630px] h-full relative rounded-[10px]' >
                        <Image className='rounded-[10px] max-w-[1056px] w-full max-h-[630px] h-full object-contain relative z-10' src={work.path_image} width={1056} height={630} alt={work.alt}/>
                        <span className='w-[260px] h-[260px] rounded-full bg-gold absolute bottom-[45%] left-[65%] z-1'/>
                        <span className='w-full h-full bg-black absolute top-0 opacity-[60%] rounded-[10px] z-20'/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Mobile;

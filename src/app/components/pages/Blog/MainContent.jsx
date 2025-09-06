import React, {useLayoutEffect, useState} from 'react';
import Image from "next/image";
import ArrowBottomSVGComponent from "@/app/components/svg/ArrowBottomSVG.component";
import SmallArrowBottomSVGComponent from "@/app/components/svg/SmallArrowBottomSVG.component";
import useWindowWidth from "@/hooks/useWindowWidth";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const mobileStyles = {
    whiteSpace: "nowrap",
    wordWrap: "break-word",
    overflow: "auto",
}

const MainContent = () => {
    const width = useWindowWidth();
    const [isClient, setIsClient] = useState(false);

    useGSAP(() => {
        gsap.to('#arrow_bottom', { opacity: 0 , delay: 1, duration: 1.5, y: 0, repeat: -1  });
        gsap.fromTo('#blog', { opacity: 0, y: '-20px' }, {opacity: 1, delay: 0.7, y: 0});
        gsap.fromTo('#work_position', { opacity: 0, y: '20px' }, {opacity: 1, delay: 0.7, y: 0});
    }, []);

    useLayoutEffect(() => {
        setIsClient(true)
    },[]);

    return (
        <div className='relative'>
            <Image width={1920} height={908} src='/image/blog/photo-yevhenii.jpg' alt='photo where I (yevhenii) drink' className='w-[1920px] h-screen sm:h-[300px] object-cover'/>
            <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
                <div className='flex flex-col items-center justify-center font-montserrat gap-[10px]'>
                    <div id='blog' className='text-5xl font-light text-white text-nowrap sm:text-3xl'>My Blog</div>
                    <span id='work_position' className='text-3xl text-gold font-medium sm:text-2xl text-nowrap' style={width < 576 ? mobileStyles : {}}>Shopify Developer</span>
                </div>
            </div>
            <div id='arrow_bottom' className={`absolute ${width > 576 ? "bottom-[5%]" : 'bottom-[0]'} left-[50%] translate-y-[-50px] translate-x-[-50%] z-50`}>
                {isClient && (width > 576 ? <ArrowBottomSVGComponent/> : <SmallArrowBottomSVGComponent/>)}
            </div>
        </div>
    );
};

export default MainContent;

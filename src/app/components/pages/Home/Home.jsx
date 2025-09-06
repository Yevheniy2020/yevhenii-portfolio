'use client'
import React, {useLayoutEffect, useState} from 'react';
import PlaneEffect from "@/app/components/pages/Home/PlaneEffect";
import MenuComponent from "@/app/components/ui/Menu.component";
import useWindowWidth from "@/hooks/useWindowWidth";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import ArrowBottomSVGComponent from "@/app/components/svg/ArrowBottomSVG.component";
import SmallArrowBottomSVGComponent from "@/app/components/svg/SmallArrowBottomSVG.component";


const mobileStyles = {
    whiteSpace: "nowrap",
    wordWrap: "break-word",
    overflow: "auto",
}

function Home() {
    const width = useWindowWidth();
    const [isClient, setIsClient] = useState(false);

    useLayoutEffect(() => {
       setIsClient(true)
    },[]);

    useGSAP(() => {
        gsap.to('#full_name', { opacity: 1, delay: 0.7, y: 0 });
        gsap.to('#work_position', { opacity: 1 , delay: 1, y: 0  });
        gsap.to('#arrow_bottom', { opacity: 0 , delay: 1, duration: 1.5, y: 0, repeat: -1  });
    }, []);


    return (
        <div className='w-screen h-screen relative'>
            {isClient && <PlaneEffect/>}
            <div className='absolute top-0' >
                <MenuComponent withAnimation={true}/>
            </div>
            <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>
                <div className='flex flex-col items-center justify-center font-montserrat gap-[10px]'>
                    <div id='full_name' className='text-5xl font-light text-white text-nowrap sm:text-3xl opacity-0 translate-y-[-50px]' style={width < 576 ? mobileStyles : {}}>Yevhenii Mynenko</div>
                    <div id='work_position' className='text-3xl text-gold font-medium sm:text-2xl opacity-0 translate-y-[50px]'>Shopify Developer</div>
                </div>
            </div>
            <div id='arrow_bottom' className={`absolute ${width > 576 ? "bottom-[5%]" : 'bottom-[10%]'} left-[50%] translate-y-[-50px] translate-x-[-50%] z-50`}>
                {isClient && (width > 576 ? <ArrowBottomSVGComponent/> : <SmallArrowBottomSVGComponent/>)}
            </div>
        </div>
    );
}

export default Home;

'use client';
import React from 'react';
import GitHubSVGComponent from "@/app/components/svg/GitHubSVG.component";
import GmailSVGComponent from "@/app/components/svg/GmailSVG.component";
import LinkedinSVGComponent from "@/app/components/svg/LinkedinSVG.component";
import TelegramSVGComponent from "@/app/components/svg/TelegramSVG.component";
import Link from "next/link";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";


const socials = [
    {icon: <GmailSVGComponent/>, path: 'duder2019@gmail.com'},
    {icon: <GitHubSVGComponent/>, path: 'https://github.com/Yevheniy2020'},
    {icon: <LinkedinSVGComponent/>, path: 'https://www.linkedin.com/in/yevhenii-mynenko-35384428b/'},
    {icon: <TelegramSVGComponent/>, path: 'https://t.me/yevhenii1985M'}
]

const SocialComponent = () => {
    useGSAP(() => {
        gsap.to('#social_items', { opacity: 1, delay: 1, stagger: 0.2 });
    }, []);

    return (
        <div className='flex gap-[10px] text-white'>
            {socials.map((social, index) => {
                return(
                    <Link key={index} id='social_items' className='opacity-0' href={socials[0] === social ? "mailto:" + social.path : social.path} target="_blank" >
                        <div className='border-[1px] color-white p-[9px] rounded-[100px]'>
                            {social.icon}
                        </div>
                    </Link>
                )
            })}
        </div>
    );
};

export default SocialComponent;

'use client'
import React from 'react';
import Link from "next/link";
import useWindowWidth from "@/hooks/useWindowWidth";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const MenuComponent = () => {
    const width = useWindowWidth();
    useGSAP(() => {
        gsap.to('#nav_item', { opacity: 1, stagger: 0.2, delay: 1.5, x:0 });
        gsap.to('#nav_name', { opacity: 1 , delay: 1.5, x:0 });

    }, []);
    return (
        <div className={'w-screen flex justify-between pt-[20px] pl-[40px] pr-[40px] sm:pl-[20px] sm:pr-[20px]  font-montserrat font-normal text-xs text-white'}>
            <Link id='nav_name' href="/" className='sm:text-gold opacity-0 translate-x-[-50px]'>{width > 576 ? "YEVHENII MYNENKO" : 'MYNENKO'}</Link>
            <nav>
                <ul className='flex gap-[40px] sm:gap-[10px]'>
                    <li id='nav_item' className='opacity-0 translate-x-[50px]'>
                        <a href="/#first_work">
                            WORK
                        </a>
                    </li>
                    <li id='nav_item' className='opacity-0 translate-x-[50px]'>
                        <Link href="/about">
                            ABOUT
                        </Link>
                    </li>
                    <li id='nav_item' className='opacity-0 translate-x-[50px]'>
                        <a href="/CV_Mynenko.pdf" download="CV_Mynenko.pdf">
                            RESUME
                        </a>
                    </li>
                    <li id='nav_item' className='opacity-0 translate-x-[50px]'>
                        <Link href="/contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MenuComponent;

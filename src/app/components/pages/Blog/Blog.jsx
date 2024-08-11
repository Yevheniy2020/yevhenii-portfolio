'use client'
import React from 'react';
import MainContent from "@/app/components/pages/Blog/MainContent";
import BlogList from "@/app/components/pages/Blog/BlogList";
import BgEffectComponent from "@/app/components/ui/BgEffect/BgEffect.component";
import MenuComponent from "@/app/components/ui/Menu.component";
import Form from "@/app/components/pages/Contact/Form/Form";
import SocialComponent from "@/app/components/ui/Social.component";
import WavesEffect from "@/app/components/pages/Contact/WavesEffect";

const Blog = () => {
    return (
        <BgEffectComponent>
            <div className='absolute top-0 z-50' >
                <MenuComponent withAnimation={true}/>
            </div>
            <MainContent/>
            <BlogList/>
        </BgEffectComponent>
    );
};

export default Blog;

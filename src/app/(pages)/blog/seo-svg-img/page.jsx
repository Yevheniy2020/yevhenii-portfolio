'use client'
import React from 'react';
import MenuComponent from "@/app/components/ui/Menu.component";
import BgEffectComponent from "@/app/components/ui/BgEffect/BgEffect.component";
import ArticleContent1Component from "@/app/components/pages/Article/ArticleContent1.component";

const Page = () => {
    return (
        <div className='overflow-hidden'>
            <BgEffectComponent>
                <div className='absolute top-0 z-50' >
                    <MenuComponent/>
                </div>
                <ArticleContent1Component/>
            </BgEffectComponent>
        </div>
    );
};

export default Page;

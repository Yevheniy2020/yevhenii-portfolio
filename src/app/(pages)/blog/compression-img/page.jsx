import React from 'react';
import BgEffectComponent from "@/app/components/ui/BgEffect/BgEffect.component";
import MenuComponent from "@/app/components/ui/Menu.component";
import ArticleContent2Component from "@/app/components/pages/Article/ArticleContent2.component";

const Page = () => {
    return (
        <div className='overflow-hidden'>
            <BgEffectComponent>
                <div className='absolute top-0 z-50' >
                    <MenuComponent/>
                </div>
                <ArticleContent2Component/>
            </BgEffectComponent>
        </div>
    );
};

export default Page;

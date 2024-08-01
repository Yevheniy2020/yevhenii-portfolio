import React from 'react';
import '../../ui/BgEffect/styles.css';
import CanvasModel from "@/app/components/pages/About/Model";
import BgEffectComponent from "@/app/components/ui/BgEffect/BgEffect.component";
import SocialComponent from "@/app/components/ui/Social.component";
import ReadAbout from "@/app/components/pages/About/ReadAbout";



const About = () => {
    return (
        <div className='w-screen h-[400vh] relative'>
            <div className='absolute top-0'>
               {/*<ReadAbout/>*/}
            </div>
           {/*<BgEffectComponent/>*/}
           {/* <SocialComponent/>*/}
            {/*<CanvasModel/>*/}
        </div>

        // <div className='h-screen w-screen bg-shaders'>
        //     <CanvasModel/>
        // </div>
    );
};

export default About;

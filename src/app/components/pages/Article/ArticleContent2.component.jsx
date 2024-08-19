import React from 'react';
import Image from "next/image";

const ArticleContent2Component = () => {
    return (
        <div className='flex flex-col items-center pl-[16px] pr-[16px]'>
            <div className='max-w-[680px] w-full  pt-[100px] pb-[50px] sm:pt-[70px] sm:pb-[30px]'>
                <Image src="/image/blog/articles/compression-img/promo.jpg" width={680} height={380} alt='article about seo , svg and tag img' className='max-w-[680px] w-full  object-cover'/>
                <div className='font-montserrat text-white text-[18px] sm:text-[14px]'>
                    <div className='font-fira text-[42px] leading-[55px] pt-[32px] font-semibold sm:text-3xl sm:pt-[18px]'>What’s the Problem with Compressed Images?</div>
                    <div className='w-full h-[2px] bg-gold mt-[18px] sm:mt-[12px]'/>
                    <div className='text-2xl pt-[24px] font-semibold sm:text-[18px] sm:pt-[12px]'>Introduction</div>
                    <div className='pt-[24px] sm:pt-[12px]'>When our search engine robots start processing our website, approximately 70% of the main content is pictures. Let’s imagine that our website is an online store, we can say for sure that pictures are very important. These robots look at many factors of the picture and in this article we will understand more about resolution and metadata.</div>
                    <div className='pt-[32px] sm:pt-[18px]'>Okay, let me give you an example of the problem.</div>
                    <div className='pt-[18px] sm:pt-[14px]'>First site:</div>
                    <div  className='pt-[12px]'>
                        <Image src="/image/blog/articles/compression-img/staff.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[24px] sm:pt-[12px]'>Zoom it</div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/compression-img/staff-zoom.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[12px]'>Intrinsic size and render size: 274 x 338px</div>
                    <div className='pt-[32px] sm:pt-[18px]'>
                        As we can see, the image is compressed, this approach when compressing the image for the site is a fundamental in SEO, however has some pitfalls.
                    </div>
                    <div className='pt-[24px] sm:pt-[12px]'>
                        So, that’s what we have
                    </div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/compression-img/carbon_1.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full object-cover'/>
                    </div>
                    <div className='pt-[12px]'>We see in our tag img , that our image comes immediately optimized in src.</div>
                    <div className='pt-[24px] sm:pt-[12px]'>
                        Then what does google have to say about it?
                    </div>
                    <div className='mt-[12px] p-[20px] bg-opacity-block relative sm:p-[12px]'>
                        Google processes high-resolution images more favorably, particularly for features like Google News and Google Discover. Images should ideally be at least 1200 pixels in width for Google Discover, and even larger sizes are recommended for main content or hero images to ensure they appear sharp and clear on all devices. Higher resolution images are also prioritized for rich results and can enhance visibility across various Google platforms.
                        <br/>
                        <br/>
                        Also, Google utilizes metadata to better understand and index images. This includes IPTC data (which can cover everything from copyright to descriptive information about the image) and EXIF data, which includes details from the camera settings. Accurate and descriptive metadata can improve an image‘s relevancy in search results, making it more likely to be featured prominently. Metadata plays a crucial role in how images are contextualized and understood by Google‘s algorithms.
                        <div className='h-full w-[2px] absolute top-0 left-0 bg-gold'/>
                    </div>
                    <div className='pt-[32px] sm:pt-[18px] font-semibold text-2xl sm:text-[14px]'>So, how can we fix it?</div>
                    <div className='pt-[18px] sm:pt-[12px]'>
                        <span className='text-gold'>srcset</span> - one or more strings separated by commas, indicating possible image sources for the user agent to use.
                        <br/>
                        <a className='underline break-words' href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img</a>
                    </div>
                    <div className='pt-[18px] sm:pt-[12px]'>The right realization</div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/compression-img/carbon_2.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[32px] font-semibold text-2xl sm:text-[14px] sm:pt-[18px]'>Conclusion</div>
                    <div className='pt-[18px] sm:pt-[14px]'>Using compressed images on websites, particularly e-commerce platforms, must be carefully managed to ensure SEO effectiveness without compromising image quality. High-resolution images not only enhance user experience but are also prioritised by Google for better indexing and visibility in features like Google News and Discover. By effectively utilizing tools such as srcset and maintaining rich metadata, websites can optimize their visual content for both speed and clarity, thereby achieving a better ranking and attracting more users.</div>
                </div>
            </div>
        </div>
    );
};

export default ArticleContent2Component;

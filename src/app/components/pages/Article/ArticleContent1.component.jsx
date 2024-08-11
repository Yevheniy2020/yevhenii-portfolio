import React from 'react';
import Image from "next/image";

const ArticleContent1Component = () => {

    return (
        <div className='flex flex-col items-center pl-[16px] pr-[16px]'>
            <div className='max-w-[680px] w-full  pt-[100px] pb-[50px] sm:pt-[70px] sm:pb-[30px]'>
                <Image src="/image/blog/articles/seo-svg-img/promo.jpg" width={680} height={380} alt='article about seo , svg and tag img' className='max-w-[680px] w-full  object-cover'/>
                <div className='font-montserrat text-white text-[18px] sm:text-[14px]'>
                    <div className='font-fira text-[42px] leading-[55px] pt-[32px] font-semibold sm:text-3xl sm:pt-[18px]'>Is Using SVG with the Tag Img Good for Your Website’s SEO?</div>
                    <div className='w-full h-[2px] bg-gold mt-[18px] sm:mt-[12px]'/>
                    <div className='text-2xl pt-[24px] font-semibold sm:text-[18px] sm:pt-[12px]'>Introduction</div>
                    <div className='pt-[24px] sm:pt-[12px]'>Recently, I have been focusing on improving the SEO aspects of a particular online resource. A critical area that often causes difficulties is the optimization of images, which play a key role in both website performance and search engine rankings. Delving into the complexities of image optimization, I discovered one very interesting fact about svg and the img tag.</div>
                    <div className='pt-[32px] sm:pt-[18px]'>Okay, let's go to some websites and look at svg.</div>
                    <div className='pt-[18px] sm:pt-[14px]'>First site:</div>
                    <div  className='pt-[12px]'>
                        <Image src="/image/blog/articles/seo-svg-img/rozetka.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[24px] sm:pt-[12px]'>Zoom it</div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/seo-svg-img/rozetka-zoom.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[12px]'>Intrinsic size as render: 40 x 40 px</div>
                    <div className='pt-[24px] sm:pt-[12px]'>Second site:</div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/seo-svg-img/hiutdenim.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[24px] sm:pt-[12px]'>Zoom it</div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/seo-svg-img/hiutdenim-zoom.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[12px]'>Intrinsic size: 2160 x 390 px</div>
                    <div className='pt-[32px] sm:pt-[18px]'>
                        In the two examples we can see the difference in resolution of our SVG, how can this affect SEO?
                    </div>
                    <div className='pt-[24px] sm:pt-[12px]'>
                        Unfortunately, in the second example we can get a rather bad result. The point is that the search robot is very sensitive to media resources, in this example to images. It will first go through the pictures, determining their priority, it uses indicators such as relevance, resolution of the picture and how it is optimized. Now let's go back to our 2nd example and see that there's an SVG of a good format that can, firstly, be read by the search engine robot, secondly, be read as the main picture.
                    </div>
                    <div className='pt-[24px] sm:pt-[12px]'>
                        Here's what google says about it
                    </div>
                    <div className='mt-[12px] p-[20px] bg-opacity-block relative sm:p-[12px]'>
                        <div className='mb-[12px]'>
                            Include compelling, high-quality images in your content, especially large images that are more likely to generate visits from Discover. Large images need to be at least 1200 px wide
                        </div>
                        <a className='underline break-words' href="https://developers.google.com/search/docs/appearance/google-discover">https://developers.google.com/search/docs/appearance/google-discover</a>
                        <div className='h-full w-[2px] absolute top-0 left-0 bg-gold'/>
                    </div>
                    <div className='pt-[24px] sm:pt-[12px]'>
                        <div>
                            Also, if we open a very popular validator site and select any site that has alt problems, we will see these SVGs that are parsed perfectly by google. As I described above, this is not safe or just not the right approach.
                        </div>
                        <br/>
                        <a className='underline' href="https://validator.w3.org/">https://validator.w3.org/</a>
                    </div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/seo-svg-img/validator.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full object-cover'/>
                    </div>
                    <div className='pt-[24px] font-semibold text-2xl sm:text-[14px] sm:pt-[12px]'>How can we solve this problem?</div>
                    <div className='pt-[18px] sm:pt-[14px]'>The solution to this problem is very simple and varied.  We need to make our search robot not find our tag img with SVG, how can we do it?</div>
                    <div className='pt-[32px] sm:pt-[18px] text-gold'>Background Image</div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/seo-svg-img/carbon_1.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[12px]'>This is a very easy method to insert a proper svg because the background-image tag is not indexed by robots</div>
                    <div className='pt-[32px] sm:pt-[18px] text-gold'>Pseudo-elements</div>
                    <div className='pt-[12px]'>
                        <Image src="/image/blog/articles/seo-svg-img/carbon_2.jpg" width={680} height={380} alt='rozetka shop img logo' className='max-w-[680px] w-full  object-cover'/>
                    </div>
                    <div className='pt-[12px]'>A very quick and easy way to get the desired results. Here also google robots will not index our SVGs</div>
                    <div className='pt-[32px] font-semibold text-2xl sm:text-[14px] sm:pt-[18px]'>Conclusion</div>
                    <div className='pt-[18px] sm:pt-[14px]'>The problem described by me is unpopular and very unpleasant for medium and large sites. However, it is solved quite easily and quickly and moreover gives a boost to your site. I did not describe the solution to this problem, as suggested by Google - through robots file, because, I am deeply convinced that this is a very bad way or what they call - "crutch". However, you should always consider this option. Thank you for your attention!</div>
                </div>
            </div>
        </div>
    );
};

export default ArticleContent1Component;

import React from 'react';
import BlogCardComponent from "@/app/components/ui/BlogCard.component";
import useWindowWidth from "@/hooks/useWindowWidth";

const staticData  = [
    {
        month: 'JUL',
        date: '23',
        title: 'Is Using SVG with the Tag Img Good for Your Website’s SEO?',
        tags: '#seo #semantics',
        description: 'The problem described by me is unpopular and very unpleasant for medium and large sites. However, it is solved quite easily and quickly and moreover gives a boost to your site. I did not describe the solution to this problem, as suggested by Google - through robots file, because, I am...',
        path_route: 'seo-svg-img',
        path_img: '/image/blog/articles/seo-svg-img/promo.jpg',
        alt_img: 'article about seo , svg and tag img'
    },
    {
        month: 'AUG',
        date: '14',
        title: 'What is the Problem with Compressed Images?',
        tags: '#seo #img',
        description: 'The use of compressed images on websites, particularly e-commerce platforms, must be carefully managed to ensure SEO effectiveness without compromising image quality. High-resolution images not only enhance user experience but are also favored by Google for...',
        path_route: 'compression-img',
        path_img: '/image/blog/articles/compression-img/promo.jpg',
        alt_img: 'article about compression images'
    }
]

const BlogList = () => {
    const width = useWindowWidth();
    return (
        <div className='mt-[50px] mb-[100px] sm:mt-[0] sm:mb-[20px]'>
            {staticData.map((cardData, index) => {
                return(
                    <>
                        <BlogCardComponent data={cardData} isMobile={width < 576}/>
                    </>
                )
            })}
        </div>
    );
};

export default BlogList;

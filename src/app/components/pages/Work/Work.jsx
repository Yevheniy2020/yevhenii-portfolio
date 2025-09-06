"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import BgEffectComponent from "@/app/components/ui/BgEffect/BgEffect.component";
import Link from "next/link";
import useWindowWidth from "@/hooks/useWindowWidth";
import dynamic from "next/dynamic";

const MAIN_PATH_IMAGE = "/image/work";

const works = [
  {
    path_image: `${MAIN_PATH_IMAGE}/cityOfMist.png`,
    alt: "City of Mist",
    name: "City of Mist",
    stack: "shopify / apps",
    desc: "Shop for Board Games",
    path_site: "https://cityofmist.co/",
  },
  {
    path_image: `${MAIN_PATH_IMAGE}/ficeadvisor.jpg`,
    alt: "Image of Student Portal (FA)",
    name: "FICEADVISOR",
    stack: "next.js / zustand / mui / storybook / sass",
    desc: "Student Portal",
    path_site: "https://ficeadvisor.com/",
  },
  {
    path_image: `${MAIN_PATH_IMAGE}/sleepshop.png`,
    alt: "Image of Sleep Shop",
    name: "SleepShop",
    stack: "shopify / apps",
    desc: " Shop",
    path_site: "https://sleepshop.ca/",
  },
  {
    path_image: `${MAIN_PATH_IMAGE}/enovix.png`,
    alt: "Image of Enovix",
    name: "Enovix",
    stack: "shopify / apps",
    desc: " Shop",
    path_site: "https://enovixauto.com/",
  },
  {
    path_image: `${MAIN_PATH_IMAGE}/love-letters.jpg`,
    alt: "Image of Love Letters",
    name: "Love Letters",
    stack: "shopify / apps",
    desc: " Shop",
    path_site: "https://loveletters-online.com/",
  },
  {
    path_image: `${MAIN_PATH_IMAGE}/mifold.png`,
    alt: "Image of Mifold",
    name: "Mifold",
    stack: "shopify / apps",
    desc: " Shop",
    path_site: "https://mifold.com/",
  },
];

const LazyMobile = dynamic(() => import("./Mobile"), { ssr: false });

const Work = () => {
  const width = useWindowWidth();

  return (
    <>
      {works.map((work, index) => {
        return (
          <div className={`h-[100vh] sticky top-0`} key={index}>
            <BgEffectComponent>
              {width > 576 ? (
                <div
                  id="first_work"
                  className="h-screen flex flex-col justify-center"
                >
                  <Link href={work.path_site}>
                    <div className="flex justify-center p-[20px] pl-[86px]">
                      <div
                        className="w-[1056px] h-[630px] relative rounded-[10px] "
                        style={{ boxShadow: "1px 1px 100px -20px white" }}
                      >
                        <div className="overflow-hidden">
                          <Image
                            id="img_work"
                            className="rounded-[10px] w-[1056px] h-[630px] object-cover "
                            src={work.path_image}
                            width={1056}
                            height={630}
                            alt={work.alt}
                          />
                          <span className="w-full h-full bg-black absolute top-0 opacity-[60%] rounded-[10px]" />
                        </div>
                        <div className="absolute top-[50%] left-[-86px] translate-y-[-50%] text-white pl-[16px]">
                          <div
                            id="work_item"
                            className=" font-fira italic text-4xl md:text-3xl xsm:text-2xl	font-semibold text-shadow-custom"
                          >
                            {work.stack}
                          </div>
                          <div
                            id="work_item"
                            className=" font-fira text-9xl md:text-8xl xsm:text-5xl italic font-semibold	text-shadow-custom"
                          >
                            {work.name}
                          </div>
                          <div
                            id="work_item"
                            className=" font-fira italic text-4xl xsm:text-2xl md:text-3xl font-semibold	text-shadow-custom"
                          >
                            {work.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                <LazyMobile work={work} />
              )}
            </BgEffectComponent>
          </div>
        );
      })}
    </>
  );
};

export default Work;

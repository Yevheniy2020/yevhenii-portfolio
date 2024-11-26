"use client";
import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const ReadAbout = () => {
  const [isOpen, setIsOpen] = useState(false);
  useGSAP(() => {
    gsap.to("#read_title", { opacity: 1, duration: 0.2 });
    gsap.to("#read_line", { opacity: 1, duration: 1, maxWidth: 320 });
    gsap.to("#read_text", { opacity: 1, y: 0, delay: 0.5 });
    gsap.to("#read_button", { opacity: 1, y: 0, delay: 0.7 });
  }, []);

  return (
    <div className="max-w-[730px] mt-[100px] xsm:mt-[28px] xsm:text-center">
      <span
        id="read_title"
        className="opacity-0 font-montserrat font-normal text-4xl text-white xsm:text-3xl"
      >
        Hi! I am Yevhenii
      </span>
      <hr
        id="read_line"
        className="max-w-[1px] xsm:max-w-[242px] bg-gold h-[1px] border-none mt-[10px] xsm:mx-auto"
      />
      <div
        id="read_text"
        className="text-white opacity-0 translate-y-[20px] font-montserrat font-normal text-lg mt-[18px] xsm:text-sm xsm:text-left"
      >
        <p>
          Hello! I’m Yevhenii Mynenko, a dedicated Front-end Developer rooted in
          Chernihiv/Kyiv, Ukraine. With a rich foundation in technology,
          enhanced by over 2 years of professional experience, I specialize in
          crafting user-friendly web applications using a dynamic tech stack
          that includes React, Next.js, Node.js, MUI, SASS, and Tailwind.
        </p>
        <br />
        <p>
          From a young age, I was drawn to technology, a passion that has only
          grown as I’ve delved deeper into web development. My technical journey
          is marked by my role as the Team Lead at the FA Student Portal, where
          I implemented new features, streamlined interactions with backend
          developers, and introduced robust quality assurance processes. This
          role not only honed my technical skills but also enhanced my
          leadership and project management capabilities.
        </p>
        {isOpen && (
          <>
            <br />
            <p>
              My expertise spans across JavaScript, HTML5, CSS, SCSS, and
              includes advanced tools like Figma, Git, React Hooks, Formik, and
              more. My work at the CIE Website project, where I managed the
              project architecture and coordinated with testers and designers,
              solidified my abilities in creating efficient, scalable web
              applications.
            </p>
            <br />
            <p>
              Currently, as a student at the National Technical University of
              Ukraine &apos;Kyiv Polytechnic Institute&apos;, I am pursuing a
              Bachelor’s degree in Information Systems and Technologies. This
              academic pursuit has strengthened my technical background and
              prepared me for the challenges of the ever-evolving tech
              landscape.
            </p>
            <br />
            <p>
              Fluent in Ukrainian and Russian and with intermediate proficiency
              in English, I thrive in multicultural environments, engaging
              effectively with teams and stakeholders from diverse backgrounds.
            </p>
            <br />
            <p>
              I am driven by a mission to leverage technology to solve
              real-world problems and enhance user experiences. Let’s connect!
              You can reach me on LinkedIn, GitHub, or directly via email at
              duder2019@gmail.com or on Telegram.
            </p>
            <br />
            <p>... and so, the journey to innovation and impact continues.</p>
          </>
        )}
      </div>
      <div
        id="read_button"
        onClick={() => setIsOpen(!isOpen)}
        className="opacity-0 translate-y-[20px] flex justify-center mt-[28px]"
      >
        <span className="font-montserrat cursor-pointer border-[1px] pt-[6px] pb-[6px] pr-[25px] pl-[25px] rounded-[20px] text-gold border-gold">
          {isOpen ? "Close" : "Read more"}
        </span>
      </div>
    </div>
  );
};

export default ReadAbout;

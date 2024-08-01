'use client';
import { useState } from 'react';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Form() {

    useGSAP(() => {
        gsap.to('#form_input', { opacity: 1, delay: 0.2, stagger: 0.2, y: 0 });
    }, []);



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        const { name, email, phone, website, message } = formData;
        const submissionData = { name, email, phone, message };

        if (website.trim() !== '') {
            submissionData.website = website;
        }

        try {
            const response = await fetch('/api/contact-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(submissionData)
            });

            const result = await response.json();
            setLoading(false);

            if (result.ok) {
                setSuccess(true);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    website: '',
                    message: '',
                });
            } else {
                setSuccess(false);
            }
        } catch (error) {
            console.error("Error submitting form: ", error);
            setLoading(false);
            setSuccess(false);
        }
    };

    return (
        <div className='max-w-[330px]'>
            {success === null &&
                <form onSubmit={handleSubmit}>
                    <input id='form_input' type="text" name="name" required
                           placeholder='Your Name'
                           className='opacity-0 translate-y-[50px] w-full h-[40px] pl-[12px] font-montserrat text-xs	mt-[16px] text-black'
                           value={formData.name} onChange={handleChange} />
                    <input id='form_input' type="email" name="email" required
                           placeholder='Your Email Address'
                           className='opacity-0 translate-y-[50px] w-full h-[40px] pl-[12px] font-montserrat text-xs	mt-[16px] text-black'
                           value={formData.email} onChange={handleChange} />
                    <input id='form_input' type="tel" name="phone"
                           placeholder='Your Phone Number'
                           className='opacity-0 translate-y-[50px] w-full h-[40px] pl-[12px] font-montserrat text-xs	mt-[16px] text-black'
                           value={formData.phone} onChange={handleChange} />
                    <input id='form_input' type="url" name="website"
                           placeholder='Your Web Site (optional)'
                           className='opacity-0 translate-y-[50px] w-full h-[40px] pl-[12px] font-montserrat text-xs	mt-[16px] text-black'
                           value={formData.website} onChange={handleChange} />
                    <textarea id='form_input' name="message" rows="4" required
                              placeholder='Type your message here...'
                              className='opacity-0 translate-y-[50px] resize-none w-full h-[100px] pl-[12px] pt-[12px] font-montserrat text-xs	mt-[16px] text-black'
                              value={formData.message} onChange={handleChange}/>
                    <button id='form_input' type="submit" className='opacity-0 translate-y-[50px] w-full mt-[20px] h-[40px] bg-gold text-black rounded-[20px]' disabled={loading}>
                        {loading ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            }
            {success === true && <p className='text-green-500 mt-[16px]'>Message sent successfully!</p>}
            {success === false && <p className='text-red-500 mt-[16px]'>Failed to send message. Please try again later.</p>}
        </div>
    );
}

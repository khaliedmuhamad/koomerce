import React, { useState } from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Link from '../../Links/link';
export default function Follow() {
    const init = [
        {
            name: "facebook",
            link: "https://www.facebook.com/profile.php?id=100008333795144",
            icon: <FaFacebookF />,
            colors: "#1877f2"
        },
        {
            name: 'twitter',
            link: "https://twitter.com/khaledM25324847",
            icon: <FaTwitter />,
            colors: '#1da1f2'
        },
        {
            naem: "instagram",
            link: "https://www.instagram.com/khaled_mumo/",
            icon: <FaInstagram />,
            colors: "#c32aa3"
        },
        {
            name: "linkedIn",
            link: "https://www.linkedin.com/in/khaled-mohamed-0758781aa/",
            icon: <FaLinkedinIn />,
            colors: "#0a66c2"
        },
        {
            name: "github",
            link: "https://github.com/khaliedmuhamad",
            icon: <FaGithub />,
            colors: 'black'
        }
    ]
    const [socials] = useState(init);

    return (
        <div className='follow'>
            <h4 className='h4'>Follow Us</h4>
            <p className='display-5'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
            <div className='social'>
                <ul className='list-unstyled'>
                    {socials.map((social , c) => <li className='d-inline mx-2 h4'  key={c} >
                        <Link href={social.link} text={social.icon} class='' target='_blank' style={{ color: social.colors }} />
                    </li>)}
                </ul>
            </div>

        </div>
    )
}

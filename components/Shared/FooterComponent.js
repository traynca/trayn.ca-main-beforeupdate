import Link from 'next/link';
import React from 'react';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"
import SocialButtonsContainer from 'react-social-media-buttons';

const FooterComponent = () => {
    return (
        <>
            <footer className="">
                <div className="custom-container px-5 py-7 bg-dark">
                    <div className="row g-0">
                        <div className="col-md-3 col-6">
                            <Link href="/" passHref>
                                <h1 className="mb-5 font-bold text-white">trayn.ca</h1>
                            </Link>
                            <p className="font-mono text-white">
                                69 lurline avenue, <br />
                                Victoria British Columbia
                            </p>
                            <p className='mb-0 text-white'><FaEnvelope /> <span className="ps-3">sales@trayn.ca</span> </p>
                            <p className='text-white mb-4'><FaPhoneAlt /> <span className="ps-3">+1 (236) 882-5700</span> </p>
                            <SocialButtonsContainer
                                links={['https://www.facebook.com/', 'https://www.linkedin.com/', 'https://twitter.com']}
                                buttonStyle={{ margin: '0px 10px', backgroundColor: '#fff', borderRadius: '50%' }}
                                iconStyle={{ color: '#333' }}
                                openNewTab={true}
                            />
                        </div>
                        <div className="col-md-3 col-6">
                            <h3 className=" mt-2 font- text-white">Services</h3>
                            <ul className='footer-links'>
                                <li>
                                    <Link href="/" passHref>UI/UX Design</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Web Development</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Mobile APP</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>DevOps</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Cloud Migration</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <h3 className=" mt-2 font- text-white">Expertise</h3>
                            <ul className='footer-links'>
                                <li>
                                    <Link href="/" passHref>DevOps</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Cloud Migration</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Legacy Modernization</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Agile Software Development</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Dedicated Development Center</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-6">
                            <h3 className=" mt-2 font- text-white">Quick Links</h3>
                            <ul className='footer-links'>
                                <li>
                                    <Link href="/" passHref>Services</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Industries</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Portfolio</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>About</Link>
                                </li>
                                <li>
                                    <Link href="/" passHref>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="py-4 text-center text-white font-14 mt-4">
                        <p className="mb-0 spaced-text">
                            Copyright &copy; 2022 | www.trayn.ca
                        </p>
                    </div>
                </div>
            </footer>

        </>
    );
};

export default FooterComponent;
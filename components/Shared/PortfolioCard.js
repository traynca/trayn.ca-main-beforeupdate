import React from 'react';
import Link from 'next/link';
import { BsArrowRight } from "react-icons/bs"

const PortfolioCard = ({success, info, danger, c1, c2, c3, c4, c5}) => {
    return (
        <>
           {success?
            <div className="portfolio-card shadow-success bg-light">
            <img src="/images/home/portfolio-2.svg" alt="" className="ml-short img-fluid" />
            <div className="px-4 pb-4 bg-light">
                <p className=" text-center mb-3 mt-4 text-success font-mono">STRATEGIC CUSTOMER INSIGHT</p>
                <h3 className="font-bold">
                    Company
                </h3>
                <p>
                    Strategic research partner for acquisition teams in EMEA, USA, South America, and APAC
                </p>
                <Link href="/">
                    <div className="text-link text-success d-flex align-items-center font-mono">
                        <p className="mb-0 me-4">
                            Our Web Development Services
                        </p>
                        <span className="font-22">
                            <BsArrowRight />
                        </span>
                    </div>
                </Link>
            </div>
        </div>: info ?
        <div className="portfolio-card shadow-info bg-light">
                <img src="/images/home/portfolio-info.svg" alt="" className="ml-short img-fluid" />
                <div className="px-4 pb-4 bg-light">
                    <p className=" text-center mb-3 mt-4 text-info font-mono">STRATEGIC CUSTOMER INSIGHT</p>
                    <h3 className="font-bold">
                        Company
                    </h3>
                    <p>
                        Strategic research partner for acquisition teams in EMEA, USA, South America, and APAC
                    </p>
                    <Link href="/">
                        <div className="text-link text-info d-flex align-items-center font-mono">
                            <p className="mb-0 me-4">
                                Our DevOps Approach
                            </p>
                            <span className="font-22">
                                <BsArrowRight />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>:
            danger ? 
            <div className="portfolio-card shadow-danger bg-light">
                <img src="/images/home/portfolio-danger.svg" alt="" className="ml-short img-fluid" />
                <div className="px-4 pb-4 bg-light">
                    <p className=" text-center mb-3 mt-4 text-danger font-mono">STRATEGIC CUSTOMER INSIGHT</p>
                    <h3 className="font-bold">
                        Company
                    </h3>
                    <p>
                        Strategic research partner for acquisition teams in EMEA, USA, South America, and APAC
                    </p>
                    <Link href="/">
                        <div className="text-link text-danger d-flex align-items-center font-mono">
                            <p className="mb-0 me-4">
                                Dedicated Development Center
                            </p>
                            <span className="font-22">
                                <BsArrowRight />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>: c1 ?
            <div className="portfolio-card shadow-info bg-light">
                    <img src="/images/home/boom.svg" alt="" className="ml-short img-fluid" />
                    <div className="px-4 pb-4 bg-light">
                    <p className=" text-center mb-3 mt-4 text-info font-mono">STRATEGIC CUSTOMER INSIGHT</p>
                        <h5 className="font-bold">
                        Boom Buying and Selling Platform: Revolutionizing Online Commerce
                        </h5>
                        <p>
                        Experience the future of online shopping with the Boom Buying and Selling Platform. Our user-centric design empowers buyers and sellers, providing a smooth, intuitive interface, enhanced security features, and a vibrant marketplace. Join us and discover a new era of seamless transactions and endless possibilities! 
                        </p>
                        <Link href="/">
                            <div className="text-link text-info d-flex align-items-center font-mono">
                                <p className="mb-0 me-4">
                                    Our DevOps Approach
                                </p>
                                <span className="font-22">
                                    <BsArrowRight />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>: c2 ?
            <div className="portfolio-card shadow-info bg-light">
                    <img src="/images/home/ecom.svg" alt="" className="ml-short img-fluid" />
                    <div className="px-4 pb-4 bg-light">
                        <p className=" text-center mb-3 mt-4 text-info font-mono">STRATEGIC CUSTOMER INSIGHT</p>
                        <h5 className="font-bold">
                        EcomGenius: Empowering Ecommerce with Smart Descriptions
                        </h5>
                        <p>
                        the ultimate admin panel for e-commerce businesses, revolutionizing product descriptions. Unlock the power of AI-generated descriptions to streamline your workflow, improve consistency, and captivate customers. Enhance your efficiency and elevate your online store with intelligent description generation capabilities.      
                        </p>
                        <Link href="/">
                            <div className="text-link text-info d-flex align-items-center font-mono">
                                <p className="mb-0 me-4">
                                    Our DevOps Approach
                                </p>
                                <span className="font-22">
                                    <BsArrowRight />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>: c3 ?
            <div className="portfolio-card shadow-info bg-light">
                    <img src="/images/home/iamgenius.svg" alt="" className="ml-short img-fluid" />
                    <div className="px-4 pb-4 bg-light">
                        <p className=" text-center mb-3 mt-4 text-info font-mono">STRATEGIC CUSTOMER INSIGHT</p>
                        <h5 className="font-bold">
                        IAMGenius: Empowering Ecommerce with Smart Descriptions
                        </h5>
                        <p>
                        Introducing IMGenius, the ultimate mobile app for ecommerce. Our cutting-edge platform leverages AI to generate compelling product descriptions, captivating customers and boosting sales. Say goodbye to writer's block and hello to effortless, persuasive copywriting. Join IAMGenius and unleash the power of smart descriptions for your online store!
                        </p>
                        <Link href="/">
                            <div className="text-link text-info d-flex align-items-center font-mono">
                                <p className="mb-0 me-4">
                                    Our DevOps Approach
                                </p>
                                <span className="font-22">
                                    <BsArrowRight />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>: c4 ?
            <div className="portfolio-card shadow-info bg-light">
                    <img src="/images/home/wild.svg" alt="" className="ml-short img-fluid" />
                    <div className="px-4 pb-4 bg-light">
                        <p className=" text-center mb-3 mt-4 text-info font-mono">STRATEGIC CUSTOMER INSIGHT</p>
                        <h3 className="font-bold">
                            Embark on a Thrilling Nat Geo Wildlife Adventure
                        </h3>
                        <p>
                        WildWorld, where you can embark on a captivating journey of exploration into the wonders of nature. Immerse yourself in the untamed beauty of wildlife, uncovering hidden treasures and fascinating creatures from around the globe. Join us on this extraordinary adventure as we bring the Nat Geo wildlife experience to your fingertips.
                        </p>
                        <Link href="/">
                            <div className="text-link text-info d-flex align-items-center font-mono">
                                <p className="mb-0 me-4">
                                    Our DevOps Approach
                                </p>
                                <span className="font-22">
                                    <BsArrowRight />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            :
            <div className="portfolio-card shadow-primary bg-light">
                <img src="/images/home/portfolio-1.svg" alt="" className="ml-short img-fluid" />
                <div className="px-4 pb-4 bg-light">
                    <p className=" text-center mb-3 mt-4 text-primary font-mono">STRATEGIC CUSTOMER INSIGHT</p>
                    <h3 className="font-bold">
                        Company
                    </h3>
                    <p>
                        Strategic research partner for acquisition teams in EMEA, USA, South America, and APAC
                    </p>
                    <Link href="/">
                        <div className="text-link text-primary d-flex align-items-center font-mono">
                            <p className="mb-0 me-4">
                                Our DevOps Approach
                            </p>
                            <span className="font-22">
                                <BsArrowRight />
                            </span>
                        </div>
                    </Link>
                </div>
            </div>}
        </>
    );
};

export default PortfolioCard;
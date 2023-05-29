import React from 'react';
import HomeTechStacks from '../components/HomePage/HomeTechStacks';
import HomeWhatWeOffer from '../components/HomePage/HomeWhatWeOffer';
import BackgroundGrid from '../components/Shared/BackgroundGrid';
import NavbarComponent from '../components/Shared/NavbarComponent';
import { BsArrowRight } from "react-icons/bs"
import Link from 'next/link';
import FooterComponent from '../components/Shared/FooterComponent';
import PortfolioCard from '../components/Shared/PortfolioCard';

const HomePage = () => {
    return (
        <>
            <NavbarComponent />
            <BackgroundGrid page="home" />
            <section className="hero py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-short">
                            <div className="hero-text mt-6">
                                <p className="font-upper font-mono text-primary">Imagine.implement.elevate</p>
                                <h1 className="font-bold py-4 mlm-4 font-60 text-white">
                                    <span className="text-primary">Innovative</span> <span className="text-primary"></span>solutions, Unparalleled <span className="text-primary">security</span>.
                                </h1>
                                <p className="text-white font-mono font-18">
                                    Accelerating your success with cutting-edge technology and insightful strategy.
                                    Innovative technology and expert strategy, driving sustainable growth for your business. <br />
                                </p>
                                <p className='text-white font-mono font-18'>
                                Uncover the depth and breadth of our skills and expertise!

                                </p>
                            </div>
                            <div className="tech-stacks-block">
                                &nbsp;
                            </div>
                            <HomeWhatWeOffer />
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-5">
                            <img src="/clips/lineart-dev.svg" alt="" className="img-fluid" />
                        </div>
                    </div>


                </div>
                <div className='tech-stacks-container'>
                    <HomeTechStacks />
                </div>
            </section>
            {/* <section className="mt-8">
                <div className="container our-purpose bg-primary">
                    <div className="row p-0 g-0 ">
                        <div className="col-md-5 text-white">
                            <h2 className='mb-4'>
                                Lorem ipsum dolor sit amet  architecto numquam.
                            </h2>
                            <p className="font-mono">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati facere accusamus, laudantium facilis dignissimos alias placeat odit nulla fugit, vel consectetur.</p>
                            <Link href="/">
                                <div className="text-link d-flex align-items-center font-mono">
                                    <p className="mb-0 me-4">
                                        Our DevOps Approach
                                    </p>
                                    <span className="font-22">
                                        <BsArrowRight />
                                    </span>
                                </div>
                            </Link>
                        </div>
                        <div className="col-md-7 side-image">
                            <img src="/images/home/devOps-loop.png" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section> */}

            <section className="global-reach mt-7 py-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-6 mt-5">
                            <p className="font-mono  mb-5">
                                Trusted by world-class businesses–
                            </p>
                            <h2 className="font-bold mb-4 text-white">
                                Bringing our Expertise to a<br /><span className="text-primary">Global Scale</span>: <br /> Experience Across Industries and Sectors
                            </h2>
                            <p className='text-white'>Explore our experience as a startup delivering value through digital transformation across industries. See how we've helped businesses increase efficiency and improve their bottom line in various sectors. View our portfolio to see our past accomplishments.</p>
                        </div>
                        <div className="col-md-6 mt-7">
                            <div className="row p-0 g-0 mt-7">
                                <div className="col-md-6 px-2">
                                    <PortfolioCard c1 />
                                </div>
                                <div className="col-md-6 px-2">
                                    <PortfolioCard c2 />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard c3 />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard c4 />
                        </div>
                        {/* <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            
                        </div> */}

                    </div>
                </div>


            </section>
            <FooterComponent />

        </>
    );
};

export default HomePage;
import React from 'react';
import BackgroundGrid from '../../components/Shared/BackgroundGrid';
import FooterComponent from '../../components/Shared/FooterComponent';
import NavbarComponent from '../../components/Shared/NavbarComponent';
import PortfolioCard from '../../components/Shared/PortfolioCard';

const ServicePageTemplate = () => {
    return (
        <>
            <NavbarComponent />
            <BackgroundGrid page="service" />
            <section className="hero py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 ml-short">
                            <div className="hero-text mt-5">
                                <p className="font-upper font-mono text-primary">
                                    USER INTERFACE & USER EXPERIENCE DESIGN
                                </p>
                                <h1 className="font-bold py-4 mlm-4 font-60 text-white">
                                    <span className="text-primary"> Transforming Interaction: </span>
                                    Crafting Exceptional UI/UX Experiences
                                </h1>
                                <p className="text-white font-mono font-22">
                                    Crafting unique user experiences that drive user engagement and loyalty.
                                </p>

                                <p className="text-white font-mono font-22">
                                    Designing intuitive interfaces and seamless experiences that engage and delight users. Our UI/UX design process is centered around user research, testing, and validation to ensure that the solutions we deliver align with the specific needs and goals of our clients.
                                </p>
                            </div>

                        </div>
                        <div className="col-md-1"></div>


                    </div>


                </div>
            </section>
            <section className='what-we-do'>
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6  ml-short">
                            <div className=" pe-md-5 sticky-top mt-5 mb-7">
                                <p className="font-upper font-mono text-primary">
                                    WHAT WE DO
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                    Designing <span className="text-primary">user-centric</span> solutions that drive conversion and business growth
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="px-5">
                                <img src="/clips/uiux-art.svg" alt="" className="img-fluid mt-8" />
                            </div>

                            <div className="mt-7 text-white row">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Trusted UI/UX Solutions
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    A quick pitch: At our company, we deliver innovative, user-centric solutions that drive engagement and business growth. We build trust with our clients through results-driven design approach.
                                </div>
                            </div>

                            <div className="mt-5 text-white row">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Designing for Results
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    How do we do it: We research, validate and test our solutions to ensure they meet the unique needs of our clients. Our team stays ahead of the industry trends and utilizes the latest technologies to drive results.
                                </div>
                            </div>
                            <div className="mt-5 text-white row mb-10">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Leading the way
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    Why choose us: We are experts in our field and stay ahead of industry trends. Our research-driven approach and commitment to delivering results sets us apart and makes us the right choice for your UI/UX needs.
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <section className="portfolio mt-6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="hero- pe-md-5 sticky-top mt-5">
                                <p className="font-upper font-mono text-primary">
                                    PORTFOLIO
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                    Experience Design Excellence: <br />
                                    A Look to Our <span className="text-primary">UI/UX Portfolio</span>
                                </h1>
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterComponent />
        </>
    );
};

export default ServicePageTemplate;
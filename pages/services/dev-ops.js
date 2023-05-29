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
                        <div className="col-md-8 ml-short">
                            <div className="hero-text mt-5">
                                <p className="font-upper font-mono text-info">
                                    USER INTERFACE & USER EXPERIENCE DESIGN
                                </p>
                                <h1 className="font-bold py-4 mlm-4 font-60 text-white">
                                    <span className="text-info">Accelerating Development: </span> Streamlining Operations with DevOps
                                </h1>
                                <p className="text-white font-mono font-18">
                                    Automating processes to increase efficiency and speed of delivery
                                                                </p>

                                <p className="text-white font-mono font-18">
                                    Achieving optimal performance and scalability with a focus on automation, monitoring, and continuous improvement. Our DevOps approach aligns development and operations teams to deliver software faster and more reliably.
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
                                <p className="font-upper font-mono text-info">
                                    What we do -
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                Transforming Development: Empowering Teams with <span className="text-info">DevOps</span>
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="px-5">
                                <img src="/clips/devops.svg" alt="" className="img-fluid mt-8" />
                            </div>

                            <div className="mt-7 text-white row">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                    Efficiency and Scalability
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                A quick pitch: Our DevOps services increase efficiency and speed of delivery while ensuring scalability. We help businesses transform their software development process with automation, monitoring, and continuous improvement.
                                                                </div>
                            </div>

                            <div className="mt-5 text-white row">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                    Streamlined Development
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                How do we do it: We implement a continuous integration and continuous delivery (CI/CD) pipeline to improve development and deployment process. Our team automates processes and guides you through the necessary transformation to achieve optimal performance and scalability.
                                                                </div>
                            </div>
                            <div className="mt-5 text-white row mb-10">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Expertise you can count on
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                Why choose us: Our team of experts has extensive experience in DevOps, they understand the complexities and nuances of software development and operations. We have the expertise you need to streamline your development process and empower your teams to deliver software faster and more reliably.
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
                                <p className="font-upper font-mono text-info">
                                    Portfolio
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                    Streamlining Operations: <br /> A Showcase of Our <span className="text-info">DevOps</span> Projects.
                                </h1>
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard info />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard info />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard info />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard info />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard info />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard info />
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
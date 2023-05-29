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
                                <p className="font-upper font-mono text-success">
                                    legacy modernization
                                </p>
                                <h1 className="font-bold py-4 mlm-4 font-60 text-white">
                                    Unleashing Potential: <span className="text-success">Transforming</span> Legacy Systems
                                </h1>
                                <p className="text-white font-mono font-22">
                                    Helping businesses to leverage new technologies and stay competitive in today's digital landscape.
                                </p>
                                <p className="text-white font-mono font-22">
                                    With the ever-evolving digital landscape, businesses are facing the challenge of keeping their legacy systems updated and aligned with the latest technologies. We understand the complexities of legacy modernization and we are dedicated to providing services that can help businesses to leverage new technologies and stay competitive, while maintaining legacy systems' integrity, performance, security and scalability.
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
                                <p className="font-upper font-mono text-success">
                                    What we do -
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                    Driving Digital Transformation: Upgrading Legacy Systems
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="px-5">
                                <img src="/clips/web-dev.svg" alt="" className="img-fluid mt-8" />
                            </div>

                            <div className="mt-7 text-white row">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Modernizing legacy systems
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    A quick pitch: Our legacy modernization services help businesses to improve performance, security, and scalability of their legacy systems, and to leverage new technologies to stay competitive in today's digital landscape.
                                </div>
                            </div>

                            <div className="mt-6 text-white row">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                    Leveraging new technologies
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                How do we do it: We understand the complexities of legacy modernization, We analyze your current systems, and recommend solutions that help you to modernize your legacy systems and leverage new technologies, while maintaining performance, security and scalability.
                                </div>
                            </div>
                            <div className="mt-6 text-white row mb-10">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                    Expertise you can count on
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                Why choose us: Our team of experts has extensive experience in legacy modernization, they understand the complexities of legacy systems and the benefits of modernizing them to stay competitive in today's digital landscape. We have the expertise you need to transform your legacy systems and drive digital transformation.
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
                                <p className="font-upper font-mono text-success">
                                    Portfolio
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                Elevating Your Business: Migrating to the <span className="text-success">Cloud</span>
                                </h1>
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard success />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard success />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard success />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard success />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard success />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard success />
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
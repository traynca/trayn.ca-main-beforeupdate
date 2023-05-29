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
                                <p className="font-upper font-mono text-danger">
                                    Dedicated Development Center
                                </p>
                                <h1 className="font-bold py-4 mlm-4 font-60 text-white">
                                    Partnering for Success: <br />
                                    Achieving Your Goals with a <span className="text-danger">Dedicated Center</span>
                                </h1>
                                <p className="text-white font-mono font-18">
                                    Providing an experienced and dedicated team for your software development needs.
                                </p>
                                <p className="text-white font-mono font-18">
                                    Leveraging our expertise and experience in software development to provide you with a dedicated team that aligns with your specific goals and needs. Our dedicated development center approach enables you to scale your development and achieve your business objectives in a cost-effective and efficient manner.
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
                                <p className="font-upper font-mono text-danger">
                                    What we do -
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                    Flexible engagement models to fit your specific requirements.
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
                                        Flexible Engagement
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    A quick pitch: Our dedicated development center service provides an experienced and dedicated team for your software development needs, with flexible engagement models to fit your specific requirements. We build teams to fit your specific business needs and goals.
                                </div>
                            </div>

                            <div className="mt-6 text-white row">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Scaling Development
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    How do we do it: We leverage our expertise and experience in software development to provide you with a dedicated team that aligns with your specific goals and needs. Our dedicated development center approach enables you to scale your development and achieve your business objectives in a cost-effective and efficient manner.
                                </div>
                            </div>
                            <div className="mt-6 text-white row mb-10">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Partnering for Success
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    Why choose us: Our team of experts has extensive experience in software development, we understand the complexities and nuances of building teams and scaling development. We partner with you to understand your specific needs and goals and provide a tailored solution that empowers your business.
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
                                <p className="font-upper font-mono text-danger">
                                    portfolio -
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                    Optimizing Development: <br />
                                    A Sampling of Our <span className="text-danger">Dedicated Development Center</span> Portfolio
                                </h1>
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard danger />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard danger />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard danger />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard danger />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard danger />
                                </div>
                                <div className="col-md-6 mt-5 px-2">
                                    <PortfolioCard danger />
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
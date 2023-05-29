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
                        <div className="col-md-10 ml-short">
                            <div className="hero-text mt-5">
                                <p className="font-upper font-mono text-success">
                                    Web & Mobile App Development
                                </p>
                                <h1 className="font-bold py-4 mlm-4 font-60 text-white">
                                    Building for the Future: <br />
                                    Developing <span className="text-success">Cutting-Edge</span> Web and Mobile Solutions
                                </h1>
                                <p className="text-white font-mono font-22">
                                    Creating custom web and mobile application that align with your business needs.
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
                                <p className="font-upper font-mono text-success">
                                    What we do -
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                    Empowering your business:
                                    <br /> Creating <span className="text-success">Exceptional </span>Web & Mobile Experiences.
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
                                        Customized Solutions
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    A quick pitch: Our web and mobile development services offer customized solutions that align with your business needs and tailored to your target audience. We help businesses build the future with cutting-edge web and mobile experiences.
                                </div>
                            </div>

                            <div className="mt-6 text-white row">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Latest Technologies
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    How do we do it: Our web and mobile development team utilizes the latest technologies and frameworks to ensure optimal performance, scalability, and security. We develop effective web and mobile solutions that drive user engagement and business growth.
                                </div>
                            </div>
                            <div className="mt-6 text-white row mb-10">
                                <div className="col-md-8">
                                    <h2 className="font-bold">
                                        Expertise you can count on
                                    </h2>
                                </div>
                                <div className="col-md-10">
                                    Why choose us: Our team of experts has extensive experience in web and mobile development, we understand the complexities and nuances of creating exceptional web and mobile experiences. Our approach is research driven, we are dedicated to delivering solutions that drive results for your business.
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
                                    Portfolio - 
                                </p>
                                <h1 className="font-bold pb-4 mlm-4 font-40 text-white">
                                Building for the <span className='text-success'>Future:</span> <br /> A Selection of Our Web and Mobile Development Projects
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
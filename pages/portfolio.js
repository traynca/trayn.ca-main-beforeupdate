import React from 'react';
import BackgroundGrid from '../components/Shared/BackgroundGrid';
import FooterComponent from '../components/Shared/FooterComponent';
import NavbarComponent from '../components/Shared/NavbarComponent';
import PortfolioCard from '../components/Shared/PortfolioCard';

const PortfolioPage = () => {
    return (
        <>
            <NavbarComponent />
            <BackgroundGrid page="portfolio" />
            <section className="global-reach  py-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-md-4 mt-5">
                            <p className="font-mono  mb-5">
                                Trusted by world-class businesses–
                            </p>
                            <h2 className="font-bold mb-4 text-white">
                                <span className="text-info">Global reach</span> across industries & sectors
                            </h2>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum architecto qui placeat commodi, perferendis fuga dicta, ratione quam cum, libero accusamus.</p>
                            <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing libero accusamus.</p>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6 mt-7">
                            <div className="row p-0 g-0 mt-7">
                                <div className="col-md-6 px-2">
                                    <PortfolioCard info />
                                </div>
                                <div className="col-md-6 px-2">
                                    <PortfolioCard success />
                                </div>

                            </div>
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard primary />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard danger />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard success />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard info />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard danger />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard success />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard info />
                        </div>
                        <div className="col-md-3 mt-5 px-2">
                            <PortfolioCard primary />
                        </div>

                    </div>
                </div>


            </section>
            <FooterComponent />
        </>
    );
};

export default PortfolioPage;
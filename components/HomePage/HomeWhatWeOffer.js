import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from "react-icons/bs"

const HomeWhatWeOffer = () => {
    return (
        <>
            <div className="row g-0 p-0 text-white">
                <div className="col-md-12">
                    <p className='font-mono'>Your interest is all that matters to us.</p>
                    <div className="">
                        <h4 className="font-bold pt-4">
                            Explore the diverse range of skills and expertise we offer! <br />
                            Leverage our broad spectrum of skills and expertise for your next venture!
                        </h4>
                        <Link href="/services/web-development" passHref>
                            <a className="text-link link-primary mt-3 d-inline-block">
                                All the services we provide
                            </a>
                        </Link>
                    </div>
                    <div className="mt-5">
                        <h4 className="font-bold pt-5">
                            Discover the industries we have a deep understanding of and are dedicated to serve. <br />
                            See how we excel in catering to the industries we specialize in.
                        </h4>
                        <Link href="/" passHref>
                            <a className="text-link link-success mt-3 d-inline-block">
                                All the industries we cater
                            </a>
                        </Link>
                    </div>
                    <div className="mt-5">
                        <h4 className="font-bold pt-5">
                            Take a look at our past projects and see the value we bring. <br />
                            See the results we've delivered with our portfolio of previous works
                        </h4>
                        <Link href="/" passHref>
                            <a className="text-link link-info mt-3 d-inline-block">
                                Our previous works
                            </a>
                        </Link>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-bold pt-5">
                            Check the wide variety of expertise we are having!
                        </h2>
                        <Link href="/" passHref>
                            <a className="text-link link-dark mt-3 d-inline-block">
                                All the services we provide
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="row p-0 g-0 d-flex mt-6">
                <div className="col-6 ">
                    <Link href="/services/web-development">
                        <button className="btn btn-lg btn-primary">
                            All Our Services <BsArrowRight />
                        </button>
                    </Link>
                </div>
                <div className="col-6 ">
                    <Link href="/services/web-development">
                        <button className="btn btn-lg btn-success">
                            Our Portfolio <BsArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default HomeWhatWeOffer;
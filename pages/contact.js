import React from 'react';
import BackgroundGrid from '../components/Shared/BackgroundGrid';
import FooterComponent from '../components/Shared/FooterComponent';
import NavbarComponent from '../components/Shared/NavbarComponent';

const contact = () => {
    return (
        <>
            <NavbarComponent />
            <BackgroundGrid page="contact" />
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 ml-short">
                            <div className="hero-text mt-6">
                                <p className="font-upper font-mono text-success">
                                    Reach out to us
                                </p>
                                <h1 className="font-bold py-4 mlm-4 font-60 text-white">
                                    Drop your <span className="text-success">IDEA</span>
                                </h1>
                                <p className="text-white font-=">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis doloribus temporibus maxime deleniti laborum.
                                </p>
                            </div>

                        </div>
                        <div className="col-md-6 bg-light-success p-5">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white">
                                        Your Name
                                    </label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white">
                                        Email
                                    </label>
                                    <input type="email" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white">
                                        Region
                                    </label>
                                    <input type="text" className="form-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label text-white">
                                        Message
                                    </label>
                                    <textarea rows="5" type="text" className="form-control" id="name" ></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-success">Submit</button>
                            </form>
                        </div>

                    </div>


                </div>

            </section>

            <FooterComponent />
        </>
    );
};

export default contact;
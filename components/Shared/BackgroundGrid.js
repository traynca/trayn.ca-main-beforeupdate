import React from 'react';

const BackgroundGrid = ({page}) => {
    return (
        <>
            <section className={`grid-bg relative ${page}`}>
                <div className="grid-bg-container">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-3 line one">&nbsp; </div>
                            <div className="col-3 line two">&nbsp; </div>
                            <div className="col-3 line three">&nbsp; </div>
                            <div className="col-3 line br-five four">&nbsp; </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BackgroundGrid;
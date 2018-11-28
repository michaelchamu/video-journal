import React from 'react';
const News = () => {
    return (
        <div>
            <div
                className="col-xs-12"
                style={{ height: '50%', overflow: 'scroll' }}
            >
                <center>
                    <h1>News Articles</h1>
                </center>

                <hr style={{ color: 'black' }} />

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <a href="#">
                            <img
                                src="images/1.jpg"
                                className="img-responsive img-box img-thumbnail"
                            />
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <h4>
                            <a href="#">
                                5 of Bali’s Spanking New Haunts - WanderLuxe
                                Magazine
                            </a>
                            - 18/12/2018
                        </h4>
                        <p>
                            Naturally, we know where Bali's newest restaurants
                            are and what to order, so give that private chef a
                            rest and check out these spanking new haunts.
                        </p>
                        <small>By: Donovan Maasz</small>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    );
};
export { News };

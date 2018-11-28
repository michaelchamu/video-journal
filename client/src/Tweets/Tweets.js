import React from 'react';
const Tweets = () => {
    return (
        <div>
            <div style={{ height: '50%', overflow: 'scroll' }}>
                <a
                    className="twitter-timeline"
                    href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
                >
                    Tweets by TwitterDev
                </a>
            </div>
        </div>
    );
};
export { Tweets };

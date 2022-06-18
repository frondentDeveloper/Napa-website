import React from 'react';

const Jop = (props) => {
    return (
        <div className="find-freelans h-100">
            <div className="pattern2">
                <img src="./images/white-ell1.svg" alt="pattern"/>
                <img src="./images/white-ell2.svg" alt="pattern"/>
                <img src="./images/white-ell3.svg" alt="pattern"/>
                <img src="./images/white-ell4.svg" alt="pattern"/>
                <img src="./images/white-ell5.svg" alt="pattern"/>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12" style={{marginBottom: "120px"}}></div>
                    <div className="col-6">
                        {props.children}
                    </div>
                    <div className="col-6 d-flex justify-content-end">
                        <img src="/images/freelans.svg" alt="Error" style={{marginBottom: "23%"}} width="80%"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jop;
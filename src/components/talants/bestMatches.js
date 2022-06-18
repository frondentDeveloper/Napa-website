import React from 'react';
import Jops from "../postJop/Jops";
import {useLocation} from "react-router";
import Talants from "./talants";

function BestMatchesTalants(props) {
    const history = useLocation();
    return (
        <Talants history={history.pathname}>
            <div className="bestMatches">
                <div className="d-flex justify-content-between align-items-center">

                    <div className="circle_jop">
                        <img src="/images/yurak.png" alt="Error"/>
                    </div>
                </div>
                <p>

                </p>
                <div className="d-flex">

                </div>
                <div className="d-flex mt-5">
                    <div><img src="/images/location_jop.png" alt="Error"/></div>

                </div>
            </div>
        </Talants>
    );
}

export default BestMatchesTalants;
import React from 'react';
import './Badge.css'

import getTodaysDateUtil from './DateTimeUtils'

function Badge() {
    const name = "Spring Gemini";
    const handle = "Never give up";
    const img = "https://halo-gemini.oss-cn-hangzhou.aliyuncs.com/blog/time-watch.jpg";

    // const dateTime = getTodaysDate();
    return (
        <React.Fragment>
            <div className="badge">
                <img alt={'the img of the user'} src={img} />
                <div>
                    <h4>{name}</h4>
                    <p>{handle}</p>
                    <h5>Retrive from func: Today is {getTodaysDateUtil()}</h5>
                </div>
            </div>
        </React.Fragment>
    );
}

export default function App() {
    return <Badge />;
}

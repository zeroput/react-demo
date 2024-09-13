// 46
import * as React from "react";

export default function Clock() {
    const [time, setTime] = React.useState(new Date());

    // when use effect, it need two params,
    // 1 is the ()=>{}
    // 2 is the side effcet []
    React.useEffect(() => {
        const getAnId = window.setInterval(() => {
            setTime(new Date());
        }, 1000);
        return ()=>{
            window.clearInterval(getAnId);
        }
    }, []);

    if (time === null) return null;

    return (
        <section>
            <h1>Current Time, show me the clock</h1>
            <p>{time.toLocaleTimeString()}</p>
        </section>
    );
}

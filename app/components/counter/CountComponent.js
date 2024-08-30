"use client";
import CountUp from "react-countup";

const CountComponent = ({endNumber}) => {
    return (
        <CountUp enableScrollSpy scrollSpyOnce end={endNumber} suffix="+"/>
    );
};

export default CountComponent;
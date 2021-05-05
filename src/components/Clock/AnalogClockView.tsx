import React from "react";
import {ClockViewProps} from "./Clock";
import s from "./AnalogClockView.module.scss";

export const AnalogClockView = (props: ClockViewProps) => {



    const secondsStyle = {
        transform: `rotate(${props.data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${props.data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${props.data.getHours() * 30}deg)`
    };


    return <div className={s.clock}>
        <div className={s.analogClock}>{}
            <div className={`${s.dial} ${s.seconds}`} style={secondsStyle}/>
            <div className={`${s.dial} ${s.minutes}`} style={minutesStyle}/>
            <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
        </div>
        </div>

}
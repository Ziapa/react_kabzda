import React from "react";
import {ClockViewProps} from "./Clock";

export const DigitalClockView = (props: ClockViewProps) => {

    const getTwoNum = (num: number) => num < 10 ? "0" + num : num

    const minutes = getTwoNum(props.data.getMinutes())
    const seconds = getTwoNum(props.data.getSeconds())
    const hours = getTwoNum(props.data.getHours())

    return <div>
        {hours}:{minutes}:{seconds}
    </div>

}
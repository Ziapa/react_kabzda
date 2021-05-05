import React, {useEffect, useState} from "react";
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";


type ClockPropsType = {
    mode: "digital" | "analog"
}

export type ClockViewProps = {
    data: Date
}

export const Clock = (props: ClockPropsType) => {

    const [data, setData] = useState(new Date())

    useEffect(() => {

       const setIntervalTick =  setInterval(() => {
           console.log("TICK")
            setData(new Date())
        }, 1000)

        return () => {

            clearInterval(setIntervalTick)
        }

    },[]);

    let view

    switch (props.mode) {
        case "analog":
            return view = <AnalogClockView data={data}/>
        case "digital":
        default:
            return view = <DigitalClockView data={data}/>
    }



    return  {view}


}




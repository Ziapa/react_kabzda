import React, {useEffect, useState} from "react";

const getTwoNum = (num: number) => num < 10 ? "0" + num : num

export const Clock = (props: any) => {

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

    const minutes = getTwoNum(data.getMinutes())
    const seconds = getTwoNum(data.getSeconds())
    const hours = getTwoNum(data.getHours())

    return <div>
        {hours}:{minutes}:{seconds}
    </div>
}
import React, {useEffect, useState} from 'react';
import {Meta, Story} from "@storybook/react/types-6-0";

export default {
    title: "UseEffect/setInterval"
} as Meta;

export const SetInterval: Story<any> = () => {


    // const [hour, setHour] = useState<number>(0)
    // const [minute, setMinute] = useState<number>(0)
    // const [second, setSecond] = useState<number>(0)


    //
    // const timer = ( second:number , minute: number) => {
    //     if (second === 5) {
    //         setMinute(minute + 1)
    //         setSecond(second = 0)
    //     } else {
    //         setSecond(second + 1)
    //     }
    //
    // }

    let time = new Date()

    let seconds = time.getSeconds()
    let minutes = time.getMinutes()
    let hours = time.getHours()


    useEffect(() => {

        setInterval(() => {


        }, 1000)

    },);


    return <>
        {hours}:{minutes}:{seconds}
    </>

}

import React, {useEffect, useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

export default {
    title: "UseEffect/setInterval"
} as Meta;

export const SetInterval: Story<any> = () => {


    const [hour, setHour] = useState<number>(0)
    const [minute, setMinute] = useState<number>(0)
    const [second, setSecond] = useState<number>(0)

    const timer = () => {
        // return setSecond + 89056950550
    }


    useEffect(() => {
        console.log("useEffect")
        setInterval(() => {
timer()
        }, 1000)

    }, []);


    return <>
        {hour}:{minute}:{second}
    </>

}

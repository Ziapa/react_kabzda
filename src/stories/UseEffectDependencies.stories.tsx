import React, {useEffect, useState} from 'react';
import {Meta, Story} from '@storybook/react/types-6-0';

export default {
    title: "UseEffect/Dependencies"
} as Meta;

export const Dependencies: Story<any> = () => {


    const [counter, setCounter] = useState<number>(1)
    const [fake, setFake] = useState<number>(0)

    const changes = (state: number) => state + 1

    useEffect(() => {
        return () => {
            console.log("useEffect every render")
            document.title = counter.toString()
        };
    });

    useEffect(() => {
        return () => {
            console.log("useEffect first render")
            document.title = counter.toString()
        };
    }, []);

    useEffect(() => {
        return () => {
            console.log("useEffect render when counter change")
            document.title = counter.toString()
        };
    }, [counter]);


    return <>
        <button onClick={() => setCounter(changes)}>Counter +</button>
        <button onClick={() => setFake(changes)}>Fake +</button>
        Counter: {counter}
        Fake: {fake}
    </>

}

// когда добавляем функцию в хук useState то записывается значение один раз и после оно будет сохранено в initialState
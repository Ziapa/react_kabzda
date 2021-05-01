import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';

export default {
    title: "React.memo demo/UseStateDemo"
} as Meta;

export const Example1: Story<any> = () => {

    const [counter, setCounter] = useState<number>(0)

    const changes = (state: number) => state + 1


    return <>
        <button onClick={() => setCounter(changes)}>+</button>
        {counter}
    </>

}

// когда добавляем функцию в хук useState то записывается значение один раз и после оно будет сохранено в initialState
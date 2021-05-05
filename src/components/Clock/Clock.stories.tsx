import React from 'react';
import {Clock} from "./Clock"
import  {Meta, Story } from "@storybook/react"
export default {
    title: "UseEffect/Clock"
} as Meta;

export const ExampleAnalogClock: Story<any> = () => {
    return  <Clock mode={"analog"}/>
}


export const ExampleDigitalClock: Story<any> = () => {
    return <Clock  mode={"digital"}/>
}

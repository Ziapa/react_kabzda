import React from 'react';
import {Meta, Story} from "@storybook/react/types-6-0";
import {Clock} from "./Clock";

export default {
    title: "UseEffect/Clock"
} as Meta;

export const ExampleClock: Story<any> = () => {
    return <Clock/>
}

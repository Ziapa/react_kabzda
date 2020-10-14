import React, {useState} from "react";

import {Story, Meta} from '@storybook/react/types-6-0';

import {Accordion, AccordionPropsType,} from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Accordion',
    component: Accordion
} as Meta;

export const collapsed: Story<AccordionPropsType> = () => <Accordion onClick={action("clicked")} collapsed={true} title={"collapsed"}/>;
export const onCollapsed: Story<AccordionPropsType> = () => <Accordion onClick={action("clicked")} collapsed={false} title={"onCollapsed"}/>;
export const ChangeCollapsed: Story<AccordionPropsType> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion onClick={() => setCollapsed(!collapsed)} collapsed={collapsed} title={"ChangeCollapsed"}/>
};




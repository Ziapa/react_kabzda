import React, {useState} from "react";

import {Story, Meta} from '@storybook/react/types-6-0';

import {UncontrolledAccordion, AccordionPropsType,} from './UncontrolledAcordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/UncontrolledAccordion',
    component: UncontrolledAccordion
} as Meta;

export const collapsed: Story<AccordionPropsType> = () => <UncontrolledAccordion onClick={action("clicked")} collapsed={true} title={"collapsed"}/>;
export const onCollapsed: Story<AccordionPropsType> = () => <UncontrolledAccordion onClick={action("clicked")} collapsed={false} title={"onCollapsed"}/>;
export const ChangeCollapsed: Story<AccordionPropsType> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <UncontrolledAccordion onClick={() => setCollapsed(!collapsed)} collapsed={collapsed} title={"ChangeCollapsed"}/>
};




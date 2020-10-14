import React, {useState} from "react";

import {Story, Meta} from '@storybook/react/types-6-0';

import {UncontrolledAccordion, AccordionPropsType,} from './UncontrolledAcordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/UncontrolledAccordion',
    component: UncontrolledAccordion
} as Meta;

export const collapsed: Story<AccordionPropsType> = () => <UncontrolledAccordion collapsed={true} title={"onCollapsed"}/>;
export const onCollapsed: Story<AccordionPropsType> = () => <UncontrolledAccordion  collapsed={false} title={"collapsed"}/>;





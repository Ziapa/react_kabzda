import React from "react";

import {Meta, Story} from '@storybook/react/types-6-0';

import {AccordionPropsType, UncontrolledAccordion,} from './UncontrolledAcordion';

export default {
    title: 'Example/UncontrolledAccordion',
    component: UncontrolledAccordion
} as Meta;

export const collapsed: Story<AccordionPropsType> = () => <UncontrolledAccordion collapsed={true} title={"onCollapsed"}/>;
export const onCollapsed: Story<AccordionPropsType> = () => <UncontrolledAccordion  collapsed={false} title={"collapsed"}/>;





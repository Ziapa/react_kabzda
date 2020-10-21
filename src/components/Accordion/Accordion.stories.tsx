import React, {useState} from "react";

import {Story, Meta} from '@storybook/react/types-6-0';

import {Accordion, AccordionPropsType,} from './Accordion';
import {action} from "@storybook/addon-actions";

export default {
    title: 'Example/Accordion',
    component: Accordion
} as Meta;

export const collapsed: Story<AccordionPropsType> = () => <Accordion onChange={action("clicked")} collapsed={true}
                                                                     title={"collapsed"}
                                                                     items=
                                                                         {[{title: "SmiT", value: 1},
                                                                             {title: "Shana", value: 2},
                                                                             {title: "Braun", value: 3}]}
                                                                     onClick={action("TEST")}/>;
export const onCollapsed: Story<AccordionPropsType> = () => <Accordion onChange={action("clicked")} collapsed={false}
                                                                       title={"onCollapsed"}
                                                                       items={[
                                                                           {title: "SmiT", value: 1},
                                                                           {title: "Shana", value: 2},
                                                                           {title: "Braun", value: 3}]}
                                                                       onClick={action("TEST")}/>;


export const ChangeCollapsed: Story<AccordionPropsType> = () => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion onChange={() => setCollapsed(!collapsed)} collapsed={collapsed} title={"ChangeCollapsed"}
                      items={[{title: "SmiT", value: 1}, {title: "Shana", value: 2}, {title: "Braun", value: 3}]}
                      onClick={id => {
                          alert(`user with ID ${id} be happy`)
                      }}/>
};


export const ChangeValueTitle: Story<AccordionPropsType> = () => {
let state = {
    title: "State"
}
const changeTittle = (value:string) => setTitleValue(value)


const [titleValue, setTitleValue] = React.useState(state.title)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return <Accordion onChange={() => setCollapsed(!collapsed)}
                      collapsed={collapsed}
                      onClick={id => {
                          alert(`user with ID ${id} be happy`)
                      }}
                      items={[{title: "SmiT", value: 1}, {title: "Shana", value: 2}, {title: "Braun", value: 3}]}
                      title={titleValue}
                      changeTittle={changeTittle}
    />
}




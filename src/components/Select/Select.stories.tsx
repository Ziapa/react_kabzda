import React, {useState} from "react";

import {Story, Meta} from '@storybook/react/types-6-0';


import {Select, SelectPropsType} from './Select';
import {action} from "@storybook/addon-actions";
import { v1 } from "uuid";


export default {
    title: 'Example/Select',
    component: Select
} as Meta;


export const SelectChangeValue: Story<SelectPropsType> = () => {

    const [selectValue, setSelectValue] = useState<string>("none")
    const [collapsed,setCollapsed] = useState<boolean>(false)
    return <Select collapsed={collapsed}
                   selectValue={selectValue}
                   changeSelectValue={(value: string) => setSelectValue(value)}
                   onChange={() => {setCollapsed(!collapsed)}}
                   items={[{name: "SmiT", value: v1()}, {name: "Shana", value: v1()}, {name: "Braun", value: v1()}]}/>
}
export const onCollapseSelect: Story<SelectPropsType> = () => {


    return <Select collapsed={true}
                   selectValue={"none"}
                   changeSelectValue={action("setSelectValue")}
                   onChange={action("setCollapsed(!collapsed)")}
                   items={[{name: "SmiT", value: v1()}, {name: "Shana", value: v1()}, {name: "Braun", value: v1()}]}/>
}
export const offCollapseSelect: Story<SelectPropsType> = () => {


    return <Select collapsed={false}
                   selectValue={"none"}
                   changeSelectValue={action("setSelectValue")}
                   onChange={action("setCollapsed(!collapsed)")}
                   items={[{name: "SmiT", value: v1()}, {name: "Shana", value: v1()}, {name: "Braun", value: v1()}]}/>
}

export const selectedNone: Story<SelectPropsType> = () => {


    return <Select collapsed={false}
                   selectValue={"none"}
                   changeSelectValue={action("setSelectValue")}
                   onChange={action("setCollapsed(!collapsed)")}
                   items={[{name: "SmiT", value: v1()}, {name: "Shana", value: v1()}, {name: "Braun", value: v1()}]}/>
}

export const selectedSmit: Story<SelectPropsType> = () => {


    return <Select collapsed={false}
                   selectValue={"SmiT"}
                   changeSelectValue={action("setSelectValue")}
                   onChange={action("setCollapsed(!collapsed)")}
                   items={[{name: "SmiT", value: v1()}, {name: "Shana", value: v1()}, {name: "Braun", value: v1()}]}/>
}

export const selectedShana: Story<SelectPropsType> = () => {


    return <Select collapsed={false}
                   selectValue={"Shana"}
                   changeSelectValue={action("setSelectValue")}
                   onChange={action("setCollapsed(!collapsed)")}
                   items={[{name: "SmiT", value: v1()}, {name: "Shana", value: v1()}, {name: "Braun", value: v1()}]}/>
}

export const selectedBraun: Story<SelectPropsType> = () => {


    return <Select collapsed={false}
                   selectValue={"Braun"}
                   changeSelectValue={action("setSelectValue")}
                   onChange={action("setCollapsed(!collapsed)")}
                   items={[{name: "SmiT", value: v1()}, {name: "Shana", value: v1()}, {name: "Braun", value: v1()}]}/>
}


import React, {ChangeEvent, useRef, useState} from 'react';

import {Story, Meta} from '@storybook/react/types-6-0';

// import {Input} from './Input';


export default {
    title: 'Example/Input',
    // component: Input
} as Meta;

export const UncontrolledInput: Story = () => <input/>;

export const WithFixedInput: Story = () => <input value={"IT-INCUBATOR.by"}/>;

export const TrackValueOfControlledValue: Story = () => {
    const [value, setValue] = useState("")
    return <div>
        <input value={value} onChange={e => setValue(e.currentTarget.value)}/>
        <div> {value} </div>
    </div>;
}

export const InputValueInDivOnClick: Story = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)
    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value}
    </>;
}

export const ControlledStateInput: Story = () => {
    const [value, setValue] = useState("IT")
    return <input value={value} onChange={(e) => setValue(e.currentTarget.value)}/>
};

export const ControlledStateChecked: Story = () => {
    const [value, setValue] = useState(false)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.checked)
    return <input type="checkbox" checked={value}  onChange={onChange}/>
};

export const ControlledStateSelected: Story = () => {
    const [value, setValue] = useState("")
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => setValue(e.currentTarget.value)
    return <select value={value} onChange={onChange}>
        <option value="">None</option>
        <option value="1">Smolensk</option>
        <option value="2">Moscow</option>
        <option value="3">Minsk</option>
    </select>
};




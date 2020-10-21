import React, {ChangeEvent, KeyboardEvent} from "react";
import {action} from "@storybook/addon-actions";

type ItemType = {
    title: string
    value: any

}

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
    changeTittle?: (value: string) => void
}

type AccordionTitleType = {
    title: string
    onChange: () => void
    changeTittle?: (value: string) => void
}


export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle
                changeTittle={props.changeTittle}
                title={props.title}
                onChange={props.onChange}/>
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


function AccordionTitle(props: AccordionTitleType) {

    const [changeTitle, setChangeTitle] = React.useState<boolean>(false)
    const textChangeTitle = (e: ChangeEvent<HTMLInputElement>) => props.changeTittle(e.currentTarget.value)
    const onBlurEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setChangeTitle(!changeTitle)
        }
    }

    return (<div>
            {changeTitle ? <div>
                    <input
                        autoFocus={true}
                        value={props.title}
                        onChange={textChangeTitle}
                        onBlur={() => {
                            setChangeTitle(!changeTitle)
                        }} type="text"
                        onKeyPress={onBlurEnter}
                    />
                </div>
                : <h3 onDoubleClick={() => {
                    setChangeTitle(!changeTitle)
                }} onClick={props.onChange}>{props.title}</h3>}
        </div>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, index) => <li onClick={(value) => {
                props.onClick(el.value)
            }} key={index}>{el.title}</li>)}
        </ul>
    )
}


export default Accordion;
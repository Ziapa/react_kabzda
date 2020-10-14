import React from "react";

type ItemType = {
    title:string
    value:any

}

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onChange: () => void
    items: ItemType[]
    onClick: (value:any) => void
}

type AccordionTitleType = {
    title: string
    onChange: () => void
}


export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}
                            onChange={props.onChange}/>
            {props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}




function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

export type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value:any) => void
}

function AccordionBody(props:AccordionBodyPropsType) {
    return (
        <ul>
            {props.items.map((el, index) => <li onClick={(value) => {props.onClick(el.value)}} key={index}>{el.title}</li>)}
        </ul>
    )
}


export default Accordion;
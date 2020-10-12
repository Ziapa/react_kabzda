import React from "react";

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: () => void
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}


export function UncontrolledAccordion(props: AccordionPropsType) {

    return (
        <div>
            <AccordionTitle title={props.title}
            onClick={props.onClick}/>
            { props.collapsed && <AccordionBody/>}
        </div>
    )
}




function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default UncontrolledAccordion;
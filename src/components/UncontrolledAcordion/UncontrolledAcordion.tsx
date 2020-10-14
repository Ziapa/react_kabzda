import React from "react";

export type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

type AccordionTitleType = {
    title: string
}


export function UncontrolledAccordion(props: AccordionPropsType) {



    return (
        <div >
            <AccordionTitle title={props.title}/>
            { props.collapsed && <AccordionBody/>}
        </div>
    )
}




function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3>{props.title}</h3>
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
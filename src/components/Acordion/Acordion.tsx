import React, {useState} from "react";

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
}

type AccordionTitleType = {
    title: string
}


function Accordion(props: AccordionPropsType) {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div onClick={() => {setCollapsed(!collapsed)}}>
            <AccordionTitle title={props.title}/>
            { collapsed && <AccordionBody/>}
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


export default Accordion;
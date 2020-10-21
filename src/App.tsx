import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import UncontrolledAccordion from "./components/UncontrolledAcordion/UncontrolledAcordion";
import {UncontrolledRating} from './components/UncontrolRaiting/UncontrolRaiting';
import {Rating, RatingValueType} from './components/Raiting/Raiting';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import {OnOff} from './components/OnOff/OnOff';
import {Select} from './components/Select/Select';
import {v1} from "uuid";

type PageTitleType = {
    title: string
}


function App() {
// Accordion
    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)

// Rating
    const [collapsed, setCollapsed] = useState<boolean>(false)

// OnOff
    const [onOff, setOnOff] = useState<boolean>(false)
// Select
    const [collapsedSelect, setCollapsedSelect] = useState<boolean>(false)
    const collapsedSelectValue = () => setCollapsedSelect(!collapsedSelect)

    const [selectValue, setSelectValue] = useState("SmiT")
    const changeSelectValue = (value: string) => setSelectValue(value)


    return (
        <div className={"app"}>
            <PageTitle title={"123"}/>
            <UncontrolledAccordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={collapsed} onChange={() => setCollapsed(!collapsed)}
                       items={[{title: "SmiT", value: v1()}, {title: "Shana", value: v1()}, {
                           title: "Braun",
                           value: v1()
                       }]}
                       onClick={id => {
                           alert(`user with ID ${id} be happy`)
                       }}
            />
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff OnOff={true}/>
            <OnOff OnOff={onOff} onClick={setOnOff}/>
            <Select collapsed={collapsedSelect}
                    selectValue={selectValue}
                    changeSelectValue={changeSelectValue}
                    onChange={collapsedSelectValue}
                    items={[{title: "SmiT", value: v1()}, {title: "Shana", value: v1()}, {
                        title: "Braun",
                        value: v1()
                    }]}/>
        </div>
    )
}

function PageTitle(props: PageTitleType) {
    return <h1 >{props.title}</h1>
}


export default App;

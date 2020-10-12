import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Acordion/Acordion";
import {Rating} from "./components/Raiting/Raiting";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledRating, RatingValueType} from './components/UncontrolledRaiting/UncontrolRaiting';
import UncontrolledAccordion from './components/UncontrolledAcordion/UncontrolledAcordion';
import {OnOff} from "./components/UncontrolledOnOff/OnOff";

type PageTitleType = {
    title: string
}


function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(1)
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [onOff, setOnOff] = useState<boolean>(false)

    return (
        <div className={"app"}>
            <PageTitle title={"123"}/>
            <Accordion title={"Menu"} collapsed={true}/>
            <UncontrolledAccordion title={"Users"} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
            <Rating/>
            <UncontrolledRating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff OnOff={true}/>
            <OnOff OnOff={onOff} onClick={setOnOff}/>
        </div>
    )
}

function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}


export default App;

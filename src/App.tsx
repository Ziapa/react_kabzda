import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import UncontrolledAccordion from "./components/UncontrolledAcordion/UncontrolledAcordion";
import { UncontrolledRating } from './components/UncontrolRaiting/UncontrolRaiting';
import { Rating, RatingValueType } from './components/Raiting/Raiting';
import { UncontrolledOnOff } from './components/UncontrolledOnOff/UncontrolledOnOff';
import { OnOff } from './components/OnOff/OnOff';

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
            <UncontrolledAccordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={collapsed} onClick={() => setCollapsed(!collapsed)}/>
            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff OnOff={true}/>
            <OnOff OnOff={onOff} onClick={setOnOff}/>
        </div>
    )
}

function PageTitle(props: PageTitleType) {
    return <h1>{props.title}</h1>
}


export default App;

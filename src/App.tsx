import React from 'react';
import './App.css';
import Accordion from "./components/Acordion/Acordion";
import {Rating} from "./components/Raiting/Raiting";
import {OnOff} from "./components/OnOff/OnOff";

type PageTitleType = {
    title: string
}

function App() {
    return (
        <div>
            <PageTitle title={"123"}/>
            <Accordion title={"Menu"} collapsed={true}/>
            <Accordion title={"Users"} collapsed={false}/>
            <Rating />
            <OnOff OnOff={true}/>
        </div>
    )
}

function PageTitle (props: PageTitleType) {
    return <h1>{props.title}</h1>
}




export default App;

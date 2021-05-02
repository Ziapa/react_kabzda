import {Meta, Story} from "@storybook/react/types-6-0";
import {Select, SelectPropsType} from "../components/Select/Select";
import React, {ChangeEvent, useState} from "react";
import {v1} from "uuid";

export default {
    title: "React.memo demo/SelectReactMemo"
} as Meta

let state = {
    button: [
        {name: "none", value: v1()},
        {name: "population", value: v1()},
        {name: "title", value: v1()},
        {name: "country", value: v1()},
    ],
    buttonColor:
        {
            colorCity: "red",
            colorFilter: "blue",
            colorFind: "golden",
        }
    ,
    city: [
        {name: "none", value: v1()},
        {name: "Smolensk", value: v1(), country: "Russia", population: 327000},
        {name: "Moscow", value: v1(), country: "Russia", population: 2456000},
        {name: "Saint Petersburg", value: v1(), country: "Russia", population: 15237000},
        {name: "Minsk", value: v1(), country: "Belarus", population: 1870000},
        {name: "Gomel", value: v1(), country: "Belarus", population: 254000},
        {name: "Rogachev", value: v1(), country: "Belarus", population: 184000},
        {name: "Kiev", value: v1(), country: "Ukraine", population: 1184000},
        {name: "Zaporogie", value: v1(), country: "Ukraine", population: 84000},
        {name: "Dnepr", value: v1(), country: "Ukraine", population: 64000}
    ]
}


export const SelectMemo: Story<SelectPropsType> = () => {

    const [stateCity, setStateCity] = useState({
        button: [
            {name: "none", value: v1()},
            {name: "population", value: v1()},
            {name: "title", value: v1()},
            {name: "country", value: v1()},
        ],
        buttonColor:
            {
                colorCity: "red",
                colorFilter: "blue",
                colorFind: "golden",
            }
        ,
        city: [
            {name: "none", value: v1()},
            {name: "Smolensk", value: v1(), country: "Russia", population: 327000},
            {name: "Moscow", value: v1(), country: "Russia", population: 2456000},
            {name: "Saint Petersburg", value: v1(), country: "Russia", population: 15237000},
            {name: "Minsk", value: v1(), country: "Belarus", population: 1870000},
            {name: "Gomel", value: v1(), country: "Belarus", population: 254000},
            {name: "Rogachev", value: v1(), country: "Belarus", population: 184000},
            {name: "Kiev", value: v1(), country: "Ukraine", population: 1184000},
            {name: "Zaporogie", value: v1(), country: "Ukraine", population: 84000},
            {name: "Dnepr", value: v1(), country: "Ukraine", population: 64000}
        ]
    })

    const [selectValueCity, setSelectValueCity] = useState<string>("none")
    const [selectValueButton, setSelectValueButton] = useState<string>("none")
    const [selectValueButton1, setSelectValueButton1] = useState<string>("none")
    const [valueInput, setValueInput] = useState("")
    const [valueInput1, setValueInput1] = useState<string>("")

    let filterCity = (value: string | number, keyFilter: string) => {
        debugger
        if (keyFilter === "country") {
            const filter = stateCity.city.filter(c => value === c.country)
            setStateCity({...state, city: filter})
        }
        if (keyFilter === "name") {
            const filter = stateCity.city.filter(c => value === c.name)
            setStateCity({...state, city: filter})
        }
        if (keyFilter === "population") {
            const filter = stateCity.city.filter(c => value === c.population)
            setStateCity({...state, city: filter})
        }
    }

    const newArray = (value: string) => {

            const newStateCity = stateCity.city.filter(c => c.name.toLowerCase().indexOf(value) > -1)
            setStateCity({...stateCity, city: newStateCity})


    }

    let changeValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.currentTarget.value)
    }
    let changeValueInput1 = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput1(e.currentTarget.value)
        newArray(e.currentTarget.value)
    }
    const resetState = () => {
        setValueInput1("")
        setStateCity({...state})
    }

    const resetStateOnKeyPress = (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            resetState()
        }
    }

    return <div>


        <div style={{display: "block"}}>
            {stateCity.city.map((c, i) => <div key={i}>{c.name}</div>
            )}
        </div>
        <div style={{display: "flex"}}>

            <Select
                color={state.buttonColor.colorCity}
                selectValue={selectValueCity}
                changeSelectValue={(value: string) => setSelectValueCity(value)}
                items={stateCity.city}/>
            <label htmlFor={"test"}> Фильтрация по: </label>
            <Select
                color={state.buttonColor.colorFilter}
                selectValue={selectValueButton}
                changeSelectValue={(value: string) => setSelectValueButton(value)}
                items={state.button}/>
            <input type="text" value={valueInput} onChange={changeValueInput}/>
            <button onClick={() => {
                filterCity(valueInput, selectValueButton)
            }}>
                Фильтр
            </button>
        </div>

        <label htmlFor="поиск">Поиск по: </label>
        <Select
            color={state.buttonColor.colorFilter}
            selectValue={selectValueButton1}
            changeSelectValue={(value: string) => setSelectValueButton1(value)}
            items={state.button}/>
        <input type="text" value={valueInput1} onKeyPress={() => resetStateOnKeyPress}
               onChange={changeValueInput1}/>
        <button onClick={() => {
            newArray(valueInput1)
        }}>test
        </button>
        <button onClick={() => resetState()}>сброс</button>

    </div>
}
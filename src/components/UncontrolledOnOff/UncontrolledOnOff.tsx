import React from "react"


type OnOffType = {
    OnOff: boolean
    onClick:(value:boolean) => void
}

export const UncontrolledOnOff = (props: OnOffType) => {

    const onStyle = {
        width: "25px",
        height: "25px",
        backgroundColor: props.OnOff ? "green" : "white",
        border: "1px solid black",
        display: "inline-block"
    }
    const offStyle = {
        width: "25px",
        height: "25px",
        backgroundColor: props.OnOff ? "white" :"red",
        border: "1px solid black",
        display: "inline-block"
    }
    const circleStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: props.OnOff ? "green" : "red",
        border: "1px solid black",
        display: "inline-block"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {props.onClick(true)}}>On</div>
            <div style={offStyle} onClick={() => {props.onClick(false)}}>Off</div>
            <div style={circleStyle}></div>
        </div>
    )

}
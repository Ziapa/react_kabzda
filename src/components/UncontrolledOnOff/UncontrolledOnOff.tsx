import React, {useState} from "react"


type OnOffType = {
    OnOff: boolean
}

export const UncontrolledOnOff = (props: OnOffType) => {

    const [OnOff, SetOnOff] = useState(true)

    const onStyle = {
        width: "25px",
        height: "25px",
        backgroundColor: OnOff ? "green" : "white",
        border: "1px solid black",
        display: "inline-block"
    }
    const offStyle = {
        width: "25px",
        height: "25px",
        backgroundColor: OnOff ? "white" :"red",
        border: "1px solid black",
        display: "inline-block"
    }
    const circleStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: OnOff ? "green" : "red",
        border: "1px solid black",
        display: "inline-block"
    }

    return (
        <div>
            <div style={onStyle} onClick={() => {SetOnOff(true)}}>On</div>
            <div style={offStyle} onClick={() => {SetOnOff(false)}}>Off</div>
            <div style={circleStyle}></div>
        </div>
    )

}
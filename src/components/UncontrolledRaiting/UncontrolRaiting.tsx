import React from "react";

export type RatingValueType =  0 | 1  | 2 | 3 | 4 | 5

export type RatingPropsType = {
    value:RatingValueType
    onClick: (value:RatingValueType) => void
}

type StarType = {
    selected: boolean
    value: () => void
}

export function UncontrolledRating(props: RatingPropsType) {

    return (
        <div>
            <Star value={() => props.onClick(1)} selected={props.value > 0}/>
            <Star value={() => props.onClick(2)} selected={props.value > 1}/>
            <Star value={() => props.onClick(3)} selected={props.value > 2}/>
            <Star value={() => props.onClick(4)} selected={props.value > 3}/>
            <Star value={() => props.onClick(5)} selected={props.value > 4}/>
        </div>
    )
}





function Star(props: StarType) {
    return <span onClick={props.value}> {props.selected ? <b>star </b> : "star"}</span>

}
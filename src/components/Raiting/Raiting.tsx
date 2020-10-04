import React, {useState} from "react";

type RatingType = {

}

type StarType = {
    selected: boolean
    value: () => void
}

export function Rating(props: RatingType) {

    const [value, setValue] = useState(0)

    return (
        <div>
            <Star value={() => setValue(1)} selected={value > 0}/>
            <Star value={() => setValue(2)} selected={value > 1}/>
            <Star value={() => setValue(3)} selected={value > 2}/>
            <Star value={() => setValue(4)} selected={value > 3}/>
            <Star value={() => setValue(5)} selected={value > 4}/>
        </div>
    )

}


function Star(props: StarType) {

    if (props.selected === true) {
        return <span onClick={props.value}><b>star </b></span>
    } else  {
        return <span onClick={props.value}>star </span>
    }
}
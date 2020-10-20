import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.scss";

export type ItemType = {
    title: string
    value: any
}

export type SelectPropsType = {
    items: ItemType[]
    collapsed: boolean
    selectValue: string
    onChange: () => void
    changeSelectValue: (value: string) => void
}


export const Select = (props: SelectPropsType) => {


    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (e.key === "ArrowDown") {
                if (props.items[i].title === props.selectValue) {
                    if (props.items[i + 1]) {
                        props.changeSelectValue(props.items[i + 1].title)
                        break
                    }
                }
            }
            if (e.key === "ArrowUp") {
                if (props.items[i].title === props.selectValue) {
                    if (props.items[i - 1]) {
                        props.changeSelectValue(props.items[i - 1].title)
                        break
                    }
                }
            }
        }
    }

    return (


        <div>
            <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>

            <div tabIndex={0} onKeyUp={onKeyUp} onClick={props.onChange} className={s.relative}>
                {props.selectValue}

                <SelectBody
                    value={props.selectValue}
                    changeSelectValue={props.changeSelectValue}
                    items={props.items}
                    collapsed={props.collapsed}/>
            </div>
        </div>


    )
}

export type SelectBodyType = {
    value: string
    items: ItemType[]
    collapsed: boolean
    changeSelectValue: (value: string) => void
}

export const SelectBody = (props: SelectBodyType) => {


    const valueFind = (value: string) => {
        const setValue = props.items.find(i => i.value === value)
        setValue && props.changeSelectValue(setValue.title)
    }

    const [color, setColor] = useState<string>('')

    useEffect(() => {
        setColor(props.value)
    },[props.value])

    return (
        <div className={s.absolute}>

            {props.collapsed && props.items.map(i =>
                <div
                    style={{background: color === i.title ? 'red' : ''}}
                    onMouseEnter={() => setColor(i.title)}
                    onClick={() => {
                        valueFind(i.value)
                    }}
                    className={s.absolute_item}
                    key={i.value}>{i.title}</div>)}
        </div>
    )
}





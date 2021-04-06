import React, {useState, KeyboardEvent, useEffect} from "react";
import s from "./Select.module.scss";

export type ItemType = {
    name: string
    value: string
}

export type SelectPropsType = {
    items: ItemType[]
    color: string
    selectValue: string
    changeSelectValue: (value: string) => void
}


export const Select = (props: SelectPropsType) => {

    const [collapsed,setCollapsed] = useState<boolean>(false)
    const collapsedSelectValue = () => setCollapsed(!collapsed)

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        for (let i = 0; i < props.items.length; i++) {
            if (e.key === "ArrowDown") {
                if (props.items[i].name === props.selectValue) {
                    if (props.items[i + 1]) {
                        props.changeSelectValue(props.items[i + 1].name)
                        break
                    }
                }
            }
            if (e.key === "ArrowUp") {
                if (props.items[i].name === props.selectValue) {
                    if (props.items[i - 1]) {
                        props.changeSelectValue(props.items[i - 1].name)
                        break
                    }
                }
            }
        }
    }

    return (
        <div tabIndex={0} onKeyUp={onKeyUp} onClick={collapsedSelectValue} className={s.relative}>
            {props.selectValue}

            <SelectBody
                color={props.color}
                value={props.selectValue}
                changeSelectValue={props.changeSelectValue}
                items={props.items}
                collapsed={collapsed}/>
        </div>
    )
}

export type SelectBodyType = {
    value: string
    color: string
    items: ItemType[]
    collapsed: boolean
    changeSelectValue: (value: string) => void
}

export const SelectBody = (props: SelectBodyType) => {


    const valueFind = (value: string) => {
        const setValue = props.items.find(i => i.value === value)
        setValue && props.changeSelectValue(setValue.name)
    }

    const [color, setColor] = useState<string>("white")

    useEffect(() => {
        setColor(props.value)
    }, [props.value])

    return (
        <div className={s.absolute}>

            {props.collapsed && props.items.map(i =>
                <div
                    style={{background: color === i.name ? props.color : ''}}
                    onMouseMove={() => setColor(i.name)}
                    onClick={() => {
                        valueFind(i.value)
                    }}
                    className={s.absolute_item}
                    key={i.value}>{i.name}</div>)}

        </div>
    )
}





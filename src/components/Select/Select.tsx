import React from "react";
import s from "./Select.module.scss";

export type ItemType = {
    title: string
    value: any
   }

export type SelectPropsType = {
    items: ItemType[]
    collapsed: boolean
    onChange: () => void
    selectValue:string
    changeSelectValue: (value:string) => void
}





export const Select = (props: SelectPropsType) => {



    return (
        <div onClick={props.onChange} className={s.relative}>
            {props.selectValue}

            <SelectBody changeSelectValue={props.changeSelectValue} items={props.items} collapsed={props.collapsed}/>
        </div>
    )
}

export type SelectBodyType = {
    collapsed: boolean
    items: ItemType[]
    changeSelectValue:  (value:string) => void

}

export const SelectBody = (props: SelectBodyType) => {
    const onStyle = {
        display: props.collapsed ? "none" : "block"
    }

    return (
        <div style={onStyle} className={s.absolute}>
            {props.items.map(i => <div onClick={() => {props.changeSelectValue(i.title)}} className={s.absolute_item} key={i.value}>{i.title}</div>)}
            </div>
    )
}





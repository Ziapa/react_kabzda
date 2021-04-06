import {Meta, Story} from "@storybook/react/types-6-0";
import React, {ChangeEvent, useState} from "react";


export default {
    title: "React.memo demo/ReactMemo"
} as Meta

type CounterType = {
    count: number
}

type UsersType = {
    users: Array<string>
}

type ExampleType = CounterType & UsersType


const SecretCounter = (props: CounterType) => {

    console.log("Counter render")

    return <>
        <div>{props.count}</div>
    </>
}

const Counter = React.memo(SecretCounter)

const UsersSecret = (props: UsersType) => {

    console.log("Users render")

    return <div>{
        props.users.map((u, i) => <div key={i}> {u} </div>)
    }</div>
}

const Users = React.memo(UsersSecret)


export const Example: Story = () => {

    const [counter, setCounter] = useState<number>(0)
    const [users, setUsers] = useState<Array<string>>(["Ilia", "Neo", "Sofia"])
    const [iValue, setIValue] = useState<string>("")

    const changeIValue = (e: ChangeEvent<HTMLInputElement>) => {
        setIValue(e.currentTarget.value)
    }
    const addUsers = (iValue: string) => {
        setUsers([...users, iValue])
        setIValue("")
    }

    return <>
        <button onClick={()=> setCounter( counter + 1)}>+</button>
        <input value={iValue} onChange={changeIValue}/>
        <button onClick={() => addUsers(iValue)}>add users</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>


}



import React,{ useState } from "react"
import Button from "./Button"

const Greeting = () => {
    const [users, setUsers] = useState ([
        {id: 1, name:'jhon'},
        {id: 2, name:'steve'},
        {id: 3, name:'max'},
        {id: 4, name: 'webber'},
    ])
    const onAddUser = () => {
        users.push({id: 5, name:'alex'})
        setUsers([...users])
    }


    return (
        <>
            <h4>Greeting react</h4>
            {users.map((val, key) => {
                return(
                    <h4 key={key}>hello {val.name}</h4>
                )
            })}

            <Button onAddUser={onAddUser}>Add User</Button>
        </>
    )
}

export default Greeting
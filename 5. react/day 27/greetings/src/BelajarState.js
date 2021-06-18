import React, { useState } from 'react'

const BelajarState = () => {
    const [greeting, setGreeting] = useState('hello')
    const [nama, setNama] = useState('')

    const ubahNama = () =>{
        setGreeting(nama)
    }

    return (
        <>
        <h1>belajar state</h1>
        <h1>ini state : {greeting}</h1>
        <div>
            <label htmlfor='name'>nama</label>
            <input 
                type='text'
                onChange={e => setNama(e.target.value)} 
                value={nama}
            />
        </div>
        <br/>
        <button onClick={ubahNama}>ubah nama</button>
        </>
    )
}

export default BelajarState
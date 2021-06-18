// function Hallo(){
//     return(
//         <h1>hello component 1</h1>
//     )
// }

// const Hallo = () =>{
//     return (
//         <h1>hello component 2</h1>
//     )
// }
// export default Hallo

export default function Hallo(props) {
    return(
        <>
        <h1>hello component 3</h1>
        <h1>hello props {props.name}</h1>
        <h1>hello props {props.age}</h1>
        {props.children}
        </>
    )
}


// export default function Hallo({name, age}) {
//     return(
//         <>
//         <h1>hello component 3</h1>
//         <h1>hello props {name}</h1>
//         <h1>hello props {age}</h1>
        // {props.children}
//         </>
//     )
// }


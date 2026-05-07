const Name = (props) =>{

    let myName = "Manibharathi";

    let myRole = "AI Developer";

    console.log(props);

    return(
        <>

            {/* <h1>I am {myName}</h1>
            <h2>{myRole}</h2> */}

            <h1>I am {props.name}</h1>
            <h2>{props.role}</h2>

        </>
    );
}
export default Name;
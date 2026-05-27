import { useEffect } from "react";

const DataLoader = () => {

    

    const callDataLoader = () =>{
        alert("Hey, I am loading..");
    }


    useEffect(()=>{
        //alert("Hey, I am there...");
        callDataLoader();
    })

    return(
        <>
            <div>
                It's loading...
            </div>
        </>
    );

}
export default DataLoader;
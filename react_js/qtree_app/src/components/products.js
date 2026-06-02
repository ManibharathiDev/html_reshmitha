import { useEffect, useState } from "react";
import Menu from "./menu";

const Products = () =>{

    const[data,setData] = useState([]);
    const[loading,setLoading] = useState(true);

    const getProducts = () =>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())            
            .then(json=>{
                setData(json);
                setLoading(false);
            })
    }

    const display = () =>{
        if(loading){
            return(
                <>
                    <h1>Loading...</h1>
                </>
            );
        }
        else{
            return(
                <table width='100%' border='1'>
                <thead>
                    <th>Sl No.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Product</th>
                </thead>
                <tbody>
                        {
                        data.map((pro,index) => (
                            
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{pro.title}</td>
                                <td>{pro.description}</td>
                                <td>{pro.price}</td>
                                <td>{pro.category}</td>
                                <td><img src={pro.image} width='100'/></td>
                            </tr>

                 ))
                 }
                </tbody>
            </table>
            );
        }
    }

    useEffect(()=>{
            getProducts();
    },[]);

    // https://fakestoreapi.com/products

    return(
        <>
            <Menu/>
            <h1>Product Details</h1>

            {
                display()
            }
            
            
                 
            {/* <table width='100%' border='1'>
                <thead>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Product</th>
                </thead>
                <tbody>
                        {data.map((pro,index) => (

                            <tr>
                                <td>{pro.title}</td>
                                <td>{pro.description}</td>
                                <td>{pro.price}</td>
                                <td>{pro.category}</td>
                                <td><img src={pro.image} width='100'/></td>
                            </tr>

                 ))}
                </tbody>
            </table> */}
        </>
    );
}
export default Products;
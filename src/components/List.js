import axios from "axios";
import React, { Component } from "react";
import Content from "../layout/Content";
import 'bootstrap/dist/css/bootstrap.css'

export default class List extends Component {
    constructor(props) {
        super(props);
        this.state = {products: []};
    }

    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
            .then((res)=>{
                this.setState({products: res.data}) 
            })
            .catch((err)=>{throw err})
    }

    render(){
        const {products} = this.state        
        const display= () =>{
            return(
                <div className="container w-auto mt-3 shadow">
                    <h5 className="mt-3 animate__animated animate__fadeInBottomLeft text-start">Hello: admin@gmail.com!</h5>
                    <div className="border bg-info mt-3 animate__animated animate__fadeInUpBig">
                        <h1 className="text-light text-center m-2 ">Product Management</h1>
                    </div>
                    <div className="mt-2">
                        <a href="/products/add" style={{color: "blue"}} className="btn btn-info m-3 animate__animated animate__fadeInBottomLeft" rules="button">Add Product</a>
                        <a href="/" className="btn btn-success m-3 animate__animated animate__fadeInBottomRight" rules="button">Log out</a>
                    </div>
                    <table className="table table-bordered mt-2">
                        <thead className="table-bordered">
                            <tr className="text-white bg-secondary">
                                <th className="text-center">Id</th>
                                <th>Title</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Category</th>
                                <th>Image</th>
                                <th>Number</th>
                                <th className="text-center">Action</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {products.map((product) =>(
                                <tr key={product.id}>
                                    <td className="text-center">{product.id}</td>
                                    <td>{product.title}</td>
                                    <td style={{color:"red"}}>{product.price} $</td>
                                    <td>{product.description}</td>
                                    <td>{product.category}</td>
                                    <td>
                                        <div>
                                            <img className="img-icon" src={product.image} title={product.title} alt={product.title} />
                                        </div>
                                    </td>
                                    <td>{product.rating.count}</td>
                                    <td className="text-center">
                                        <a href={`products/edit/${product.id}`}><button className="btn btn-primary m-2"><i className="fas fa-edit"></i></button></a>
                                        <a href={`products/delete/${product.id}`}><button className="btn btn-danger m-2"><i className="fas fa-trash-alt"></i></button></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) 
        }

        return(
            <Content demo={display()} />
        )
    }
}
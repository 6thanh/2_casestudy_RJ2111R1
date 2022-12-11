import Home from "../control/Home";
import axios from "axios";
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {products: []};
}

componentDidMount(){
    axios.get('http://localhost:3000/products')
        .then((res)=>{
            this.setState({products: res.data}) 
        })
        .catch((err)=>{throw err})
}

render(){
    const {products} = this.state;
    let displayProduct = document.getElementById('displayProduct');


    const loadProduct = (products) => {
        displayProduct.innerHTML = '';
        // eslint-disable-next-line
        {products.map((product, index) =>(
            displayProduct.innerHTML += 
            `<tr key=${product.id}>
                <td class="text-center">${index+1}</td>
                <td>${product.title}</td>
                <td style="color: red">${product.price} $</td>
                <td>${product.description}</td>
                <td>${product.category}</td>
                <td>
                    <img class="img-icon" src='../web/imgs/${product.image}' title=${product.title} alt="${product.title}" >
                </td>
                <td>${product.number}</td>
                <td class="text-center">
                    <a href='products/edit/${product.id}'><button class="btn btn-primary m-2"><i class="fas fa-edit"></i></button></a>
                    <a href="products/delete/${product.id}"><button class="btn btn-danger m-2" ><i class="fas fa-trash-alt"></i></button></a>
                </td>
            </tr>`
        ))}
    }
    
    const changeCategory=(e)=>{
        let selectedValue = e.target.value;
        let selectedCategory = products.filter(product => product.category === selectedValue)
        selectedValue === 'all' ? loadProduct(products) : loadProduct(selectedCategory)
    }
    
    return(
      <Home>
        <div className="container w-auto p-3 shadow">
            <div className="border bg-info mt-3 animate__animated animate__fadeInUpBig">
                <h1 className="text-light text-center m-2 ">Product Management</h1>
            </div>
            <Toolbar>
                <Grid item>
                    <a rules="button" className="btn btn-success mt-2" href='products/add'>Add product</a>
                </Grid> 
            </Toolbar>
            <table className="table table-bordered mt-2">
                <thead className="table-bordered">
                    <tr className="text-white bg-secondary">
                        <th className="text-center">Num</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>
                            <select style={{backgroundColor:"inherit"}} onChange={(e)=>{changeCategory(e)}}>
                                <option defaultValue>--Choose Category--</option>
                                <option defaultValue value="all">All</option>
                                <option value="men's clothing">Men's clothing</option>
                                <option value="women's clothing">Women's clothing</option>
                                <option value="jewelery">Jewelery</option>
                                <option value="electronics">Electronics</option>
                            </select>
                        </th>
                        <th>Image</th>
                        <th>Storage</th>
                        <th className="text-center">Action</th>
                    </tr>                            
                </thead>
                <tbody id="displayProduct"></tbody>
            </table>
        </div>
      </Home>
    ) 
}
}
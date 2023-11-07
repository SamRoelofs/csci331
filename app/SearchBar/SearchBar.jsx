import { useState, useEffect } from "react"
import "./SearchBar.css"

export default function SearchBar() {
    const [filteredProducts, setFilteredProducts] = useState([])

    function fetchAPIData(){
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        // .then(result => console.log(result))
        .then(products => {
        //     const currentFilter = products.map[(product, index) => {
        //         return (
        //             <div>
        //                 <p>{product.title}</p>
        //                 <p>{product.price}</p>
        //                 <img src={product.image} alt={product.title} />
        //             </div>
        //         )
        //     }]
        //     setFilteredProducts(currentFilter)
        })
    }

    useEffect(fetchAPIData, [])

    return <div>
        <p>The Search Bar!</p>
        <div>{filteredProducts}</div>
    </div>
  }
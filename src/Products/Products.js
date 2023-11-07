import React from 'react'
import './products.css'

export default function Products(props) {
const{name,test}=props
    return (

        <div>
            <h2> Products {name} {test}</h2>
            <div className='card' >
                <img src={props.image} ></img>
                <h1>{props.title}</h1>
                <p className='price'>{props.price}</p>

                <p><button>add to card</button></p>
            </div>
        </div>
    )
 }

 Products.defaultProps ={
    image:"img/website_image_fastfood_1.jpg"
 }
import React, { useState } from 'react'
import './Cart.css'

const Cart = ({products, setProduct}) => {

    const [total,setTotal]=useState(0);

    function increse(id){
        let temProduct=products;
        temProduct.map((product)=>{
            if(product.id===id){
                product.quntity+=1;
                setTotal(total+product.price)
            }
            return product;
        })
        setProduct([...temProduct])
    }
    function decrese(id){
        let temProduct=products;
        temProduct.map((product)=>{
            if(product.id===id){
                product.quntity-=1;
                setTotal(total-product.price)
            }
            return product;
        })
        setProduct([...temProduct])
    }

    
  return (
    <div>
       
       {products.length<=0 && <p>Cart is empty</p>}
        {
           
            products.map((prod)=>{
                return(
                    <div  className='Cart'key={prod.id}>
                        <img src={prod.img} alt=''></img>
                        <div className='Details'>
                    <h4>{prod.name}</h4>
                    
                    <p>Price: {prod.price}</p>
                    <button>remove</button>
                    </div>
                    <div className='increseVal'>
                    <button onClick={()=>{increse(prod.id)}}>+</button>
                    <p>{prod.quntity}</p>
                    <button onClick={()=>{decrese(prod.id)}}>-</button>
                    </div>
                    </div>
                    
                );
            })
        }
        <div className='total'>
            <div>
                <p>
                    total:{total}
                </p>
            </div>
            <button onClick={()=>{
                setProduct([])
                setTotal(0)
            }}>Clear Cart</button>
        </div>

    </div>
  );
};

export default Cart
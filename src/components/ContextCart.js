import React from 'react'
import { products } from './products';
import { useContext } from 'react';
import { CartContext } from './Cart';

const ContextCart = () => {
    

    const {item, increment , decrement} = useContext(CartContext);
    const { id, title, description, thumbnail, price, quantity } = item;
  return (
    <>
      <div style={{backgroundColor:"#e0e0eb" , width:"1000px" , height:"450px",position:"absolute",right:"30%",left:"15%"}}>
         <div className="cart-items-container">
            <div style={{display:"flex" , alignItems: "top", justifyContent:"space-between" , margin:"50px"}} className="items-info">
                <div style={{display:"flex" , gap:"10px"}}>
                    <div >
                        <img style={{width:"200px"}} src={item.thumbnail} alt="image" />
                    </div>
                    <div className='title'>
                        <h2 >{item.title}</h2>
                        <p style={{color:"#0000e6"}}>Description</p>
                        <p>{item.description}</p>
                    </div>
                </div>
                <div style={{display:"flex" , flexDirection:"column", justifyContent:"space-between"}}    className="right-part">
                    <div style={{display:"flex", justifyContent:"space-around" , alignItems:"center" }}>
                        <div style={{display:"flex" , alignItems:"center",gap:"5px",paddingRight:"20px"}}>
                            <i className="fa-solid fa-minus" onClick={() => decrement(id)} ></i>
                            <input type="text" placeholder={quantity} />
                            <i className="fa-solid fa-plus" onClick={() => increment(id)}></i>
                        </div>
                        <div>
                            <h2>{item.price}₹</h2>
                        </div>
                    </div>
                    <div style={{marginRight:"60px" , color:"red"}}>Remove</div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h4 style={{marginLeft:"60px" , color:"#c2c2a3"}}>SUBTOTAL</h4>
                <h3 style={{marginRight:"60px"}}>{item.quantity*price}₹</h3>
            </div >
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h3 style={{marginLeft:"60px", color:"#c2c2a3"}}>SHIPPING</h3>
                <h3 style={{marginRight:"60px"}}>FREE</h3>
            </div >
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <h3 style={{marginLeft:"60px", color:"#c2c2a3"}}>TOTAL</h3>
                <h3 style={{marginRight:"60px"}}>{item.quantity*price+0}₹</h3>
            </div >
         </div>
      </div>
    </>
  )
}

export default ContextCart
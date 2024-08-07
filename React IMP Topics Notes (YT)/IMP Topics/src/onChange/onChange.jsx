import React, { useState } from 'react'
import './onChange.css'

const onChange = () => {
    const [name, setName] = useState("Give input here");
    const [quantity, setQuantity] = useState("Quantity");
    const [comment, setComment] = useState();
    const [shipping, setShipping] = useState();

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    };

  return (
    <div className='onChangeContainer'>
      <h2>User Name</h2>
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value);
        }}/>
        <p>{name}</p>

      <h2>User Number</h2>
        <input type="number" value ={quantity} onChange={handleQuantity} />
        <p>{quantity}</p> 

        < textarea value= {comment} placeholder="Enter delivery instructions" onChange={(e)=>{
          setComment(e.target.value); 
        }}/>
        <p>{comment}</p>
        

        <h2>shipping options</h2>
        <label>
          <input type="radio" value="Pick up" 
          checked={shipping === "Pick up"} 
          onChange={(e)=>{
          setShipping(e.target.value); 
          }}
          />Pick up
        </label>
        <label>
          <input type="radio" value="Delivery" 
          checked={shipping === "Delivery"} 
          onChange={(e)=>{
          setShipping(e.target.value); 
          }}
          />Delivery
        </label>
        <p>{shipping}</p>


    </div>
  )
}

export default onChange
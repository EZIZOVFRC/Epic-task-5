import React, { useContext } from 'react'
import MainContext from '../../context/context'

function Card({item}) {
  const {addToBasket}=useContext(MainContext)
  return (
    <div className='card'>
      <img src={item.image} alt="" />
      <h5>{item.title}</h5>
      <p>{item.desc}</p>
      <span>{item.price}</span>
      <button onClick={()=>{
        addToBasket(item)
      }}>Add Basket</button>
    </div>
  )
}

export default Card

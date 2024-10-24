import React from 'react'

export const NewCard = ({img, prec, title, ordered}) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{prec}so'm</p>
      <h4>{title}</h4>
      <p>{ordered}ta buyurtma</p>   
    </div>
  )
}


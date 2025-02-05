import React from 'react'

const Card = (props) => {
    let review=props.review;
     
  return (
    <div>
        <div>
            <img src={review.image} alt="" />
        </div>      
        <div>
            <p></p>
        </div>

        <div>
            <p></p>
        </div>
    </div>
  )
}
       
export default Card

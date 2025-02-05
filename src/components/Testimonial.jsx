import React from 'react'

const Testimonial = (props) => {
    let reviews=props.review;
  return (
    <div>
      <Card review={reviews[0]}/>
    </div>
  )
}

export default Testimonial

import React from 'react'
import { Review } from './Review'

const Reviews = () => {
  return (
    <div className='my-2'>
        <h3>Top Tickets Created</h3>
        <Review key={1}></Review>
        <Review key={2}></Review>
        <Review key={3}></Review>

        
        


    </div>
  )
}

export default Reviews
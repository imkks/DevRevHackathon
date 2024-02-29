import React from 'react'
import Form from './Form'
import Chart from './Chart'
import Reviews from './Reviews'

export const Dashboard = () => {
    let showDashboard=false;
  return (
    <div className=''>
      {/* <h1 className='text-center'>Echo Insights</h1> */}
      <figure class="text-center">
  <blockquote class="blockquote">
    <h3>CUSTOMERECHO INSIGHTS</h3>
  </blockquote>
  <figcaption class="blockquote-footer">
    <cite title="Source Title">By DEVREV & CodeCrusaders</cite>
  </figcaption>
</figure>

        <Form></Form>
        {showDashboard&&<>
      <Chart></Chart>
      <hr/>
      <Reviews></Reviews>
      </>}
    </div>

  )
}

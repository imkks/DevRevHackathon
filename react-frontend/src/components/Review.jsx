import React from 'react'

export const Review= () => {
  return (
    <div class="accordion" id="accordionExample1">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne">
        Review Summary
        <span className='badge rounded-pill m-2 text-bg-danger'>Bug</span>
        <span className='badge m-2 text-bg-primary'>Sad</span>
        <span className='badge m-2 text-bg-warning'>Geolocation</span>


      </button>
    </h2>
    <div id="collapseOne1" class="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  </div>
  )
}

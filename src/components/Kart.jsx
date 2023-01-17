import React from 'react'
import { useSelector } from 'react-redux'
import RenderProduct from './RenderProduct';

function Kart() {
  const kartItems = useSelector((state) => state.KartReducer);
  console.log("----------------------------")
  console.log(kartItems)
  return (<>
    <div class="container py-4 py-xl-5">
      <div class="row mb-5">
        <div class="col-md-8 col-xl-6 text-center mx-auto">
          <h2>Kart</h2>
          <p class="w-lg-50">{kartItems.length === 0 ? "No item in kart" : ""}</p>
        </div>
      </div>

      <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
        {kartItems.map((i) => <RenderProduct key={i} index={i} status={1} />)}
      </div>
    </div>
  </>

  )
}

export default Kart
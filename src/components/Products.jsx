import React from 'react'
import RenderProduct from './RenderProduct';
import { useSelector } from 'react-redux'

const prod = [1, 2, 3, 4, 5, 6, 7, 8,9,10,11,12,13,14,15];

export default function Products() {

  const kartItems = useSelector((state) => state.KartReducer);
  return (
    <>
      <div class="container py-4 py-xl-5">
        <div class="row mb-5">
          <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2>Products</h2>
            <p class="w-lg-50"></p>
          </div>
        </div>

        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          {prod.map((i) => <RenderProduct key={i} index={i} status={kartItems.filter((d) => d === i) > 0 ? 1 : 0} />)}
        </div>
      </div>
    </>
  )
}



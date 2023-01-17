import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToKart, removeFromKart } from '../action'



function RenderProduct({ index, status }) {

    const dispatch = useDispatch();


    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(1);
    const [kart, setKart] = useState(status);

    useEffect(() => {
        setLoading(1);
        
        console.log("executed " + index)

        fetch('https://dummyjson.com/products/' + index)
            .then(res => res.json())
            .then((data) => setItem(data));
        waiting();
        setLoading(0);

    }, [index, loading])

    if (loading === 1)
        return (
            <p>loading...</p>
        )
    return (
        <>

            <div class="col ">
                <div className='border' style={{borderRadius:"7px"}} ><img className="rounded img-fluid d-block w-100 fit-cover" style={{height:"200px"}} src={item.thumbnail} alt="Card cap" />
                    <div className="p-4">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <h4 style={{color:"red"}}>${item.price} <sub style={{color:"gray"}}><del>${item.price + 150}</del></sub></h4>
                        {kart === 0 ? <button type="button" className="btn btn-warning" onClick={() => { setKart(1); dispatch(addToKart(index)); }} >Add to kart</button> : <button type="button" className="btn btn-danger" onClick={() => { setKart(0); dispatch(removeFromKart(index)) }}>Remove</button>}
                    </div>
                </div>
            </div>

        </>
    )
}

export default RenderProduct;

async function waiting(){
    for(let i=0;i<100000000;i++){
        i++;
    }
    return 1;
}
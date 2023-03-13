import React, { useEffect } from 'react';
import { fetchData } from '../features/productSlice';
import { useSelector,useDispatch } from 'react-redux';




const ProductPage = () => {
    const productData = useSelector(state=>{
        return state.product
    })
    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchData())
        
    },[])
  return (
    <div>
      {
       console.log(productData.products)
      }
    </div>
  )
}

export default ProductPage

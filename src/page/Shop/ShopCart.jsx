import React from 'react'
import Container from '../../Components/Container'

const ShopCart = () => {
  return (
    <>
    <div className="">
    <Container>
    <h3 className=' text-[35px] font-bold mt-4'>CART</h3>

    <div className=" flex justify-between mt-12">
        <div className=" flex gap-2 border-b-2 w-full border-gray-900">
            <h4 className=' font-medium'>01</h4>
           <div className="">
             <h2 className=' text-[18px] font-medium'>SHOPPING BAG</h2>
            <h3 className=' text-[14px] font-normal text-[#767676]'>Manage Your Items List</h3>
           </div>
        </div>
        <div className=" flex gap-2 border-b w-full border-gray-400">
            <h4 className=' font-medium'>01</h4>
           <div className="">
             <h2 className=' text-[18px] font-medium'>SHOPPING BAG</h2>
            <h3 className=' text-[14px] font-normal text-[#767676]'>Manage Your Items List</h3>
           </div>
        </div>
        <div className=" flex gap-2 border-b w-full border-gray-400">
            <h4 className=' font-medium'>01</h4>
           <div className="">
             <h2 className=' text-[18px] font-medium'>SHOPPING BAG</h2>
            <h3 className=' text-[14px] font-normal text-[#767676]'>Manage Your Items List</h3>
           </div>
        </div>
    </div>

    <div className="">
    <div className="w-233 border">
    <div className="flex justify-between">
        <h3 className=' font-medium'>PRODUCT</h3>
       <div className="flex gap-24">
         <h3 className=' font-medium'>PRICE</h3>
        <h3 className=' font-medium'>QUANTITY</h3>
        <h3 className='mr-8 font-medium'>SUBTOTAL</h3>
       </div>
    </div>


    </div>

    </div>



    </Container>
    </div>
    
    </>
  )
}

export default ShopCart
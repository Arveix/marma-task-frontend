import { useState } from 'react'
import handbag from '../assets/images/product images/handbag.jpg'
import backpack from '../assets/images/product images/backpack.jpg'
import FavouriteOutline from '../assets/images/icons/favourite_outline.svg'
import FavouriteFilled from '../assets/images/icons/favourite_filled.svg'

function ProductCard({name, price, stock}) {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false); // incomplete

    return(
        <>
            <article className="flex flex-col max-w-xs mb-4 bg-white overflow-hidden">
                {/* Product image */}
                <img 
                    src={handbag} 
                    alt={name}
                    className='w-full object-cover'
                />

                {/* Product name and price */}
                <div className="mt-3 grid grid-cols-8 grid-rows-[auto_auto] items-center gap-x-2">
                    {/* <h3 className='text-lg font-bold col-span-7 col-start-1 col-end-8 row-start-1'>Product Name</h3> */}
                    <h3 className='text-lg font-bold col-span-7 col-start-1 col-end-8 row-start-1'>{name}</h3>
                    <p className='text-sm text-gray-400 col-span-8 col-start-1 col-end-9 row-start-2 md:col-span-7 mt-1'>
                       <a href='#' className='underline' onClick={() => setIsSignedIn(true)}>Create an account</a> to see pricing
                    </p>
                    {/* Wishlist icon */}
                    <button
                        aria-label='Add to wishlist'
                        className='col-start-8 col-end-9 row-start-1 md:row-span-2 justify-self-end'
                        onClick={() => {setIsWishlisted(!isWishlisted)}}
                    >
                        <img src={isWishlisted ? FavouriteFilled : FavouriteOutline} className='w-6 h-6' alt='Heart icon' title='Add to wishlist' />
                    </button>
                </div>
            </article>
        </>
    )
}

export default ProductCard
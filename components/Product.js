import Link from "next/link";
import { urlFor } from "../lib/modules";
import { HiOutlineShoppingCart, HiPlus } from 'react-icons/hi';

const Product = ({ href, name, price, type, image }) => {
    return ( 
        <>
            <Link 
              href={`products/${href}`}
              className=''
            >
              <div  
                className='border border-dark-blue-200 rounded-lg hover:border-dark-blue-400 ease-in-out duration-200 md:col-span-1'
              >
                <div className='bg-cover rounded-md h-60' style={{backgroundImage: `url(${urlFor(image).url()})`}} />
                <div className='px-2 mb-2 flex justify-between items-end'>
                  <div>
                    <p className='font-sans font-light'>{type}</p>
                    <h3 className='text-xl font-semibold'>{name}</h3>
                    <p className='text-lg'>${price}.00</p>
                  </div>
                  <button className="bg-dark-blue-900 text-white h-12 w-12 rounded-full hover:bg-dark-blue-800 flex justify-center align-bottom">
                    <HiOutlineShoppingCart className="h-8 w-8 my-2" />
                    {/* <HiPlus className="hidden h-8 w-8 ease-in-out duration-200 hover:inline-block" /> */}
                  </button>
                </div> 
              </div>
            </Link>
        </>
    );
}
 
export default Product;
import Image from "next/image";
import { urlFor } from "../lib/modules";

export default function Instagram({ items }){
  return (
    <div className="productsRow grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
      {items.map((item, index) => (
        <>
          <div
              className="relative h-72 w-full col-span-1 lg:col-span-1 row-span-1 first:lg:col-start-1 lg:first:col-span-2 lg:first:row-span-2 lg:first:h-full"
              key={index}
              // href={item.permalink}
              // target='_blank'
              // rel="noreferrer"
          >
              <div className="absolute w-full h-full overflow-hidden">
                  <Image
                      src={urlFor(item).url()}
                      alt={'image frm instagram'}
                      height={2000}
                      width={2000}
                      className='w-full h-full object-cover transition ease-in-out duration-300 hover:scale-110'
                  />
              </div>
          </div>
        </>
      ))}
    </div>
  )
}
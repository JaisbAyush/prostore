'use client'
import { cn } from "@/lib/utils";
import Image from "next/image"
import { useState } from "react"


const ProductImages = ({images} : {images : string[]})=>{
    const [current, setCurrent] = useState(0);
    return(
        <div>
            <Image 
                src={images[current]} 
                alt="Product images" 
                width={1000}
                height={1000}
            />
            <div className="flex">
                {
                    images.map((image, key)=>(
                        <div
                            key={key}
                            className={cn('border mr-2 hover:border-orange-600', current === key && 'border-orange-600')}
                        >
                            <Image 
                                src={image} 
                                alt="Mini product image" 
                                width={100} 
                                height={100} 
                                onClick={()=>setCurrent(key)}
                            />
                        </div>
                    ))
                }

            </div>
        </div>
    )
}
export default ProductImages
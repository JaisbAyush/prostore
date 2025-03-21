import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";

const ProductCard = ({product} : {product : Product})=>{

    return <Card className="w-full max-w-sm">
        <CardHeader className="p-0 items-center">
            <Link href={`/product/${product.slug}`}>
                <Image 
                    src={product.images[0]}
                    alt={product.name}
                    priority = {true}
                    height={300}
                    width={300}
                />
            </Link>
        </CardHeader>
        <CardContent >
            <p className="text-xs">{product.brand}</p>
            <Link href={`/product/${product.slug}`}>
                <p className="pt-2 text-sm font-medium">{product.name}</p>
            </Link>
            <div className="flex-between pt-2">
            <p>{product.rating} star</p>
            {
                product.stock >0 ? (
                    <ProductPrice value={Number(product.price)} />
                ) : (
                    <p className="text-destructive">Out of Stock</p>
                )
            }
            </div>
            
        </CardContent>

    </Card>

}

export default ProductCard


import ProductPrice from "@/components/shared/product/product-price"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getProductBySlug } from "@/lib/action/product_list"
import { notFound } from "next/navigation"
import ProductImages from "@/components/shared/product/product-images"
const ProductDetailPage = async(props : {
    params : Promise<{slug : string}>
})=>{
    const {slug} = await props.params
    const ProductDetail = await getProductBySlug(slug)
    if(!ProductDetail) notFound();
    return<>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {/* Image Div */}
            <div className="col-span-2">
                <ProductImages
                    images={ProductDetail.images}
                />
            </div>
            {/* Product Information */}
            <div className="col-span-2">
                <div className="flex flex-col gap-6">
                    <p>{ProductDetail.brand} {ProductDetail.category}</p>
                    <h2 className="h3-bold">{ProductDetail.name}</h2>
                    <p>{ProductDetail.rating} of {ProductDetail.numReviews} Reviews</p>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <ProductPrice
                        value = {Number(ProductDetail.price)}
                        className="w-24 rounded-full bg-green-100 text-green-700 px-6 py-2 mt-2"
                    />
                </div>
                <div className="mt-10">
                    <p className="font-semibold">Description</p>
                    <p>{ProductDetail.description}</p>
                </div>
            </div>
            {/*  Action Section*/}
            <div className="col-span-1">
                <Card>
                    <CardContent>
                        <div className="mb-4 flex justify-between">
                            <p>Price</p>
                            <p>{ProductDetail.price}</p>
                        </div>
                        <div className="mb-4 flex justify-between">
                            <p>Status</p>
                            <p>{ProductDetail.stock>0 ? <Badge variant='outline' className="p-1">In Stock</Badge> : <Badge variant='destructive'>Out Of Stock</Badge>}</p>
                        </div>
                        {
                            ProductDetail.stock > 0 && <Button  className="w-full cursor-pointer"><Plus/>Add To Cart</Button>
                        }

                    </CardContent>
                </Card>
            </div>



        </div>
    </>
}

export default ProductDetailPage
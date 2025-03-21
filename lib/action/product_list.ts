'use server'
import { prisma } from "@/db/prisma";
import { convertToJsObject } from "../utils";
import { PRODUCT_FETCH_LIMIT } from "../constant";

export const getProductList = async ()=>{
    const productData = await prisma.product.findMany({
        take : PRODUCT_FETCH_LIMIT,
        orderBy : {createdAt : 'desc'}
    })
    console.log(productData);
    return convertToJsObject(productData);
}

export const getProductBySlug = async (slug : string)=>{
    return prisma.product.findFirst({
        where : {slug}
    })
}
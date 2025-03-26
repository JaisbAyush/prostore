export const NEXT_APP_NAME = process.env.NEXT_APP || "Prostore"
export const NEXT_APP_DESCRIPTION = process.env.NEXT_APP_DESCRIPTION || "A Mordern Ecommerce built on next.js"
export const NEXT_SERVER_URL = process.env.NEXT_SERVER_URL || "http://localhost:3000"
export const PRODUCT_FETCH_LIMIT = Number(process.env.PRODUCT_FETCH_LIMIT) || 4
export const signInDefaultValues = {
    email : '',
    password : ''
}
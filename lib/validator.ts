import {z} from 'zod';
import { formatNumberWithDecimal } from './utils';
const priceValidator = z.
string().
refine(value=> /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
'Price must be exactly two decimal places');

export const insertProductSchema = z.object({
    name : z.string().min(2, 'Name should have atleast 2 characters'),
    slug : z.string().min(3, 'Slug should have atleast 3 characters'),
    category : z.string().min(3, 'Category should have atleast 3 characters'),
    images : z.array(z.string()).min(1, 'Product image should have 1 images'),
    stock : z.coerce.number(),
    brand : z.string().min(3, 'Brand should have atleast 3 characters'),
    isFeatured : z.boolean(),
    banner : z.string().nullable(),
    description : z.string().min(3, 'Description must have atleast 3 characters'),
    price : priceValidator

})

export const signInFormValidator = z.object({
    email : z.string().email('Email is Required'),
    password : z.string().min(6, 'Password is required and should be of minimum 6 characters')
})

export const signUpFormValidator = z.object({
    name : z.string().min(5,'Name is required and must be 5 characters'),
    email : z.string().email('Email is Required'),
    password : z.string().min(6, 'Password is required and should be of minimum 6 characters'),
    confirmPassword : z.string().min(6, 'Password is required and should be of minimum 6 characters')
}).refine((data)=>data.password === data.confirmPassword,{
    message : 'Password didnot match',
    path : ['confirmPasswird']
})


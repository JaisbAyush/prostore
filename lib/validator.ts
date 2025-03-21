import {z} from 'zod';
import { formatNumberWithDecimal } from './utils';
const priceValidator = z.
string().
refine(value=> /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
'Price must be exactly two decimal places');
const insertProductSchema = z.object({
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

export default insertProductSchema;
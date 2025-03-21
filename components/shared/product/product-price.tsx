import { cn } from "@/lib/utils";

const ProductPrice = ({value, className} : {value:Number, className?:string})=>{

    const stringValue = value.toFixed(2);
    const [integerValue, floatvalue] = stringValue.split(".")

    return (
        <p className={cn('text-2xl', className)}>
            <span className="text-sm align-super">$</span>
            {integerValue}
            <span className="text-sm align-super">{floatvalue}</span>

        </p>
    )
}

export default ProductPrice;
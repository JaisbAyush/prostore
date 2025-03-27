import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertToJsObject = <T>(value:T)=>{
  return JSON.parse(JSON.stringify(value));
}

export const formatNumberWithDecimal = (value : number)=>{
  const stringValue = value.toFixed(2);
  const [intvalue, decimal] = stringValue.split('.');
  return decimal ? `${intvalue}.${decimal.padEnd(2,'0')}` : `${intvalue}.00`
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const formatErrorResponse = (error : any)=>{
  console.log(error, error.name);
  if(error.name === 'ZodError'){
    const fieldErrors = Object.keys(error.errors).map((field)=>error.errors[field].message)
    return fieldErrors.join('. ');
  }else if(error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002'){
    const field = error?.meta?.target ? error?.meta?.target[0] : 'Field';
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exists`;
  }else{
    return typeof error.message === 'string' ? error.message : ''
  }

}

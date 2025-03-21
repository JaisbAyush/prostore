import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const convertToJsObject = <T>(value:T)=>{
  return JSON.parse(JSON.stringify(value));
}

export const formatNumberWithDecimal = (value : Number)=>{
  const stringValue = value.toFixed(2);
  const [intvalue, decimal] = stringValue.split('.');
  return decimal ? `${intvalue}.${decimal.padEnd(2,'0')}` : `${intvalue}.00`
}

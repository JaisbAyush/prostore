'use server';

import { signInFormValidator } from "../validator";
import { signIn, signOut } from "@/app/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export const signInWithCredentials = async (
    prevState : unknown,
    formData : FormData
)=>{

    try{
        const user = signInFormValidator.parse({
            email : formData.get('email'),
            password : formData.get('password')
        })
        await signIn('credentials', user)
        return {success : true, message : 'SignedIn Successfully'}
    }catch(err){
        console.log(err);
        if(isRedirectError(err)){
            throw err
        }
        return {success : false, message : 'Invalid Email or Password'}
    }
}

// Signout User
export const signOutUser = async ()=>{
    await signOut();
}
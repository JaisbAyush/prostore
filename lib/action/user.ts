'use server';

import { signInFormValidator, signUpFormValidator } from "../validator";
import { signIn, signOut } from "@/app/auth";
import { prisma } from "@/db/prisma";
import { hashSync } from "bcrypt-ts-edge";
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

export const signUpUser = async (
    prevState : unknown,
    formData : FormData
)=>{
   try {
    const user = signUpFormValidator.parse({
        name : formData.get('name'),
        email : formData.get('email'),
        password : formData.get('password'),
        confirmPassword : formData.get('confirmPassword')
    })
    console.log(user);
    const plainPassword = user.password;
    user.password = hashSync(user.password, 10)
    console.log(user);
    await prisma.user.create({
        data : {
            name : user.name,
            email : user.email,
            password : user.password
        }
    });
    await signIn('credentials', {
        email : user.email,
        password : plainPassword
    })
    return {success : true, message : 'User Signedup Successfully'}
   } catch (error) {
        if(isRedirectError(error))
            throw error

        return {success : false, message : 'something went wrong'}
   }
}
import { prisma } from '@/db/prisma';
import { compareSync } from 'bcrypt-ts-edge';
import NextAuth,  { NextAuthConfig } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import {PrismaAdapter} from '@auth/prisma-adapter';
export const config = {
    adapter : PrismaAdapter(prisma),
    providers : [
        CredentialsProvider({
            name : 'Login',
            credentials : {
                email : {type:'email', placeholder: 'Enter Email'},
                password : {type: 'password', placeholder: 'Enter Password'}
            },
            async authorize(credentials){
                console.log('credentials:', credentials)
                if(credentials === null) return null

                // Find user that matches the email
                const user = await prisma.user.findFirst({
                        where : {
                            email : credentials.email as string
                        }
                })

                // check user exists
                if(user && user.password){

                    // match the password entered with hash pwd saved
                    const isMatch = compareSync(credentials.password as string, user.password)
                    if(isMatch)
                        return {
                            id : user.id,
                            name : user.name,
                            email : user.email,
                            role : user.role
                        }
                }
                return null
                
            }
        })
    ],
    callbacks : {
        async session({session, token, user, trigger} : any){
            // set user ID because id doesn't go by default
            session.user.id = token.sub;

            // Check if something updates
            if(trigger === 'update'){
                session.user.name = user.name;
            }
            return session;
        }
    },
    pages : {
        signIn : '/sign-in',
        error : '/sign-in'
    },
    session : {
        strategy: "jwt",

        // Seconds - How long until an idle session expires and is no longer valid.
        maxAge: 30 * 24 * 60 * 60, // 30 days
    }

} satisfies NextAuthConfig

export const {handlers, auth, signIn, signOut} = NextAuth(config)
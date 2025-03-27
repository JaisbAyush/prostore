import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NEXT_APP_NAME } from "@/lib/constant"
import Image from "next/image"
import Link from "next/link"
import SignUpForm from "./sign-up-form"
import { auth } from "@/app/auth"
import { redirect } from "next/navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'SignUp'
  };

const SignUpPage = async(props : {
    searchParams :  Promise<{
        callbackUrl : string
    }>
})=>{
    const session = await auth()
    const {callbackUrl} = await props.searchParams;
    if(session)
        redirect(callbackUrl || '/')

    return <div className="w-full max-w-md mx-auto">
        <Card >
        <CardHeader className="space-y-4">
            <Link href='/' className="flex-center">
                <Image
                    className="item-center"
                    src='/images/logo.svg'
                    alt={`${NEXT_APP_NAME} image`}
                    width={100}
                    height={100}
                    priority
                />
            </Link>
            <CardTitle className="text-center font-md">SignUp Form</CardTitle>
            <CardDescription className="text-center font-sm text-muted-foreground">Create account here...</CardDescription>
        </CardHeader>
        <CardContent>
            <SignUpForm />
        </CardContent>
    </Card>
    </div>
}

export default SignUpPage
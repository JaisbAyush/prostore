import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { NEXT_APP_NAME } from "@/lib/constant"
import Image from "next/image"
import Link from "next/link"
import SignInFormTemplate from "./signinform"
import { Metadata } from "next"
import { auth } from "@/app/auth"
import { redirect } from "next/navigation"


export const metadata: Metadata = {
    title: 'SignIn'
  };

const SignInPage = async (props : {
    searchParams : Promise<{
        callbackUrl : string
    }>
})=>{
    const {callbackUrl} = await props.searchParams;
    const session = await auth();
    if(session){
        redirect(callbackUrl || '/')
    }
    return <div className="w-full max-w-md mx-auto">
        <Card>
            <CardHeader className="space-y-4">
                <Link className="flex-center" href='/'>
                    <Image
                        src='/images/logo.svg'
                        width={100}
                        height={100}
                        alt={`${NEXT_APP_NAME} logo`}
                        priority = {true}
                    />
                </Link>
                <CardTitle className="text-center">SignIn Form</CardTitle>
                <CardDescription className="text-center">SignIn to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-x-4">
                {/* Form content here */}
                <SignInFormTemplate />
            </CardContent>
        </Card>

    </div>
}

export default SignInPage
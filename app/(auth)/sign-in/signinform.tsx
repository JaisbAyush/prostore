'use client';

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signInWithCredentials } from "@/lib/action/user"
import { signInDefaultValues } from "@/lib/constant"
import Link from "next/link"
import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { useSearchParams } from "next/navigation";

const SignInFormTemplate = ()=>{
    const [data, action] = useActionState(signInWithCredentials, {
        success : false,
        message : ''
    })
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callback') || '/';
    const SignInButton = ()=>{
        const {pending} = useFormStatus();
        return <Button className="w-full" variant='default'>{
            pending ? 'Sign In....' : 'Sign In'
        }</Button>
    }
    return <form action={action}>
        <div className="space-y-6">
            <input type="hidden" className="hidden" value={callbackUrl} />
            <div>
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    defaultValue={signInDefaultValues.email}

                />
            </div>
            <div>
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="password"
                    defaultValue={signInDefaultValues.password}

                />
            </div>
            <div>
                <SignInButton />
            </div>
            {
                data && !data.success && <p className="text-destructive">{data.message}</p>
            }
            <div className="text-sm text-center text-muted-foreground">
                Don&apos;t have an account {' '}
                <Link href='sign-up' target="_self" className="text-blue-700 link">Sign up</Link> 
            </div>
        </div>
       

    </form>
}

export default SignInFormTemplate
'use client';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signUpDefaultValues } from "@/lib/constant"
import { signUpUser } from "@/lib/action/user";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { useSearchParams } from "next/navigation";


const SignUpForm = ()=>{
    const searchParams = useSearchParams();
    const [data, action] = useActionState(signUpUser, {
        success : false,
        message : ''
    })
    const callbackUrl = searchParams.get('callback') || '/';
    const SignUpButtonState = ()=>{
        
        const {pending} = useFormStatus();
        return <Button 
                    variant='default'
                    className="w-full cursor-pointer"
                >
                    {pending ? 'Submitting....' : 'Sign Up'}
                </Button>
    }

    return <form action={action}>
         <input type="hidden" className="hidden" value={callbackUrl} />
        <div className="space-y-6">
            <div className="space-y-2 mb-6">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    defaultValue={signUpDefaultValues.name}

                />
            </div>
            <div className="space-y-2 mb-6">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="text"
                    name="email"
                    autoComplete="email"
                    required
                    defaultValue={signUpDefaultValues.email}

                />
            </div>
            <div className="space-y-2 mb-6">
                <Label htmlFor="password">password</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="password"
                    required
                    defaultValue={signUpDefaultValues.password}

                />
            </div>
            <div className="space-y-2 mb-6">
                <Label htmlFor="confirm Password">Confirm Password</Label>
                <Input
                    id="confirm Password"
                    type="password"
                    name="confirmPassword"
                    autoComplete="confirmPassword"
                    required
                    defaultValue={signUpDefaultValues.confirmPassword}

                />
            </div>
            <div>
                <SignUpButtonState />
            </div>
            {
                data && !data.success && <div className="text-destructive">{data.message}</div>
            }
            <div className="text-center text-sm text-muted-foreground">
                Already have an account? {' '}
                <Link className="text-blue-700" href='/sign-in'>Sign In</Link>
            </div>
        </div>
    </form>
}

export default SignUpForm
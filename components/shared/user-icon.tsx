import { auth } from "@/app/auth"
import { Button } from "../ui/button";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuLabel, DropdownMenuContent } from "../ui/dropdown-menu";
import { signOutUser } from "@/lib/action/user";
const UserIconComponent = async ()=>{
    const session = await auth();
    const firstInitial = session?.user?.name?.charAt(0);
    if(!session){
        return (
            <Button asChild >
                <Link href='/sign-in' >
                    <UserIcon/> Sign in
                </Link>
            </Button>
        )
    }

    return <div>
        <DropdownMenu >
                <DropdownMenuTrigger asChild>
                    <div className="flex item-center">
                        <Button variant='ghost' className="bg-gray-200 rounded-full w-8 h-8">{firstInitial}</Button>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col">
                            <div className="text-sm font-medium leading-none">
                                {session?.user?.name}
                            </div>
                            <div className="text-sm text-muted-foreground leading-none">
                                {session?.user?.email}
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="p-0">
                        <form action={signOutUser} className="w-full">
                            <Button 
                                variant='ghost'
                                className="w-full py-4 px-2 h-4 justify-start"
                            >Sign Out</Button>
                        </form>
                    </DropdownMenuItem>
                </DropdownMenuContent>
           
    </DropdownMenu>
    </div>
}
export default UserIconComponent
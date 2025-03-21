'use client'
import { 
    DropdownMenu,  
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuLabel,
    DropdownMenuCheckboxItem
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {useTheme} from 'next-themes'
import { SunIcon, MoonIcon, SunMoonIcon} from 'lucide-react'
import { useState, useEffect } from "react";

const ModeToggle = ()=>{
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true)
    },[])

    if(!mounted)
        return null

    return <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={"ghost"}>
                    {
                        theme === 'system' ? <SunMoonIcon/> : theme === 'dark' ? <MoonIcon/> : <SunIcon/>
                    }
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Appearences</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuCheckboxItem checked={ theme === 'system'} onClick={()=>setTheme('system')}>
                    System
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={ theme === 'dark'} onClick={()=>setTheme('dark')}>
                    dark
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem checked={ theme === 'light'} onClick={()=>setTheme('light')}>
                    Light
                </DropdownMenuCheckboxItem>
            </DropdownMenuContent>

    </DropdownMenu>
}

export default ModeToggle;
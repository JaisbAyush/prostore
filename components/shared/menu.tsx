import { Button } from '@/components/ui/button';
import ModeToggle from './mode-toggle';
import { ShoppingCart, EllipsisVerticalIcon} from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '../ui/sheet';
import UserIconComponent from './user-icon';

const SheetMenu = ()=>{
    return(
        <div className='flex justify-content-end'>
            <nav  className='hidden md:flex flex-end'>
                <ModeToggle />
                <Button asChild variant='ghost'>
                    <Link href='/cart' >
                        <ShoppingCart/> Cart
                    </Link>
                </Button>
                <UserIconComponent/>
            </nav>
            <nav className='md:hidden'>
                <Sheet>
                    <SheetTrigger className='align-middle'>
                        <EllipsisVerticalIcon />
                    </SheetTrigger>
                    <SheetContent className='flex flex-col items-start'>
                        <SheetTitle>Menu</SheetTitle>
                        <ModeToggle/>
                        <Button asChild variant='ghost'>
                            <Link href='/cart' >
                                <ShoppingCart/> Cart
                            </Link>
                        </Button>
                       <UserIconComponent/>
                    <SheetDescription/>
                    </SheetContent>
                </Sheet>

            </nav>
        </div>
    )
}
export default SheetMenu
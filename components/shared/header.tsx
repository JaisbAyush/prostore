import Image from 'next/image';
import Link from 'next/link';
import { NEXT_APP_NAME } from '@/lib/constant';
import SheetMenu from './menu';


const Header = ()=>{
    return <header className="w-full border-b">
        <div className="wrapper flex-between">
            <div className="flex-start">
                <Link href="/" className='flex-start'>
                    <Image 
                        src='/images/logo.svg' 
                        alt={`${NEXT_APP_NAME}`}
                        height={48}
                        width={48}
                        priority={true}
                    />
                    <span className="hidden lg:block font-bold text-2xl ml-3">
                        {NEXT_APP_NAME}
                    </span>
                </Link>
            </div>
            <SheetMenu />
        </div>
    </header>
}

export default Header;
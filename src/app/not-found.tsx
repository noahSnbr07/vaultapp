import Wrapper from '@/components/custom/wrapper'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {

    return (
        <Wrapper
            className='lg:flex-row gap-16 justify-center'
            sidebarHidden
            headerContent={<h1 className='text-2xl font-bold text-center w-full opacity-50'>404</h1>}>
            <h2 className='lg:text-9xl text-5xl font-bold opacity-50'> 404 </h2>
            <div className='lg:h-[300px] lg:w-1 w-[300] h-2 bg-accent rounded-full'></div>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl font-bold'> Not Found </p>
                    <p> The Page you are looking for could not be found </p>
                </div>
                <div className='flex gap-2'>
                    <Link
                        href={"/"}>
                        <Button>
                            Home
                        </Button>
                    </Link>
                    <Link
                        href={"/contact"}>
                        <Button variant={"secondary"}>
                            Contact
                        </Button>
                    </Link>
                </div>
            </div>
        </Wrapper>
    )
}
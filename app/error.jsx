'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

export default function Error({ error, reset }) {
    const router = useRouter();

    useEffect(() => {
        console.error(error)
    }, [error])

    const pathname = usePathname();

    const resetTemp = () => {
        router.refresh();
        reset();
    }

    return(
        <section className="page w-full flex min-h-screen justify-center">
            <div className="w-full h-[90vh] min-h-fit flex flex-col items-center
             justify-center gap-[50px] max-w-[1500px] px-2 md:px-6 2xl:px-12 text-center">
                <h2>We're expriencing errors on our side.<br/> Sorry about that!</h2>
                <a href={pathname}>
                    <button
                        className='w-[150px] h-[50px] border-[1px] border-[#333333] rounded-[25px]'
                        onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => resetTemp()
                        }
                    >
                        Try again
                    </button>
                </a>
            </div>
        </section>
    )
}
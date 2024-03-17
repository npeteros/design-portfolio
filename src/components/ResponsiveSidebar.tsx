'use client';

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ResponsiveSidebar() {

    const pathname = usePathname();

    console.log(pathname);
    

    return (
        <div className="fixed bottom-0 w-screen">
            <div className="w-full bg-[#202B3B] py-3">
                <div className="w-full flex justify-center gap-12">
                    <Link
                        href='/home'
                        className={clsx(
                            "p-3",
                            {
                                "bg-[#20207F] rounded-full": pathname === '/home'
                            }
                        )}
                    >
                        <svg width="28" height="28" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H3l9-9 9 9h-2"></path>
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7"></path>
                            <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"></path>
                        </svg>
                    </Link>
                    <Link
                        href='/about'
                        className={clsx(
                            "p-3",
                            {
                                "bg-[#20207F] rounded-full": pathname === '/about'
                            }
                        )}
                    >
                        <svg width="28" height="28" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
                            <path d="M12 8h.01"></path>
                            <path d="M11 12h1v4h1"></path>
                        </svg>
                    </Link>
                    <Link
                        href='/studies'
                        className={clsx(
                            "p-3",
                            {
                                "bg-[#20207F] rounded-full": pathname.includes('/studies')
                            }
                        )}
                    >
                        <svg width="28" height="28" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 4v18M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1v0Z"></path>
                            <path d="M13 8h2"></path>
                            <path d="M13 12h2"></path>
                        </svg>
                    </Link>
                    <Link
                        href='/members'
                        className={clsx(
                            "p-3",
                            {
                                "bg-[#20207F] rounded-full": pathname === '/members'
                            }
                        )}
                    >
                        <svg width="28" height="28" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path>
                            <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
                            <path d="M16 3.133a4 4 0 0 1 0 7.75"></path>
                            <path d="M21 20.998v-2a4 4 0 0 0-3-3.85"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div >
    )
}
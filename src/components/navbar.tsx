'use client'
import clsx from "clsx";
import { GhIcon } from "./svgs";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const pathname = usePathname()
    
    return (
        <>
            <main className="">
                <header
                    className={clsx(
                        "fixed z-40 top-0 md:relatives bg-[var(--bg-primary)]/90 backdrop-blur-sm pb-3 w-full pt-[20px] px-[32px] md:py-[30px] lg:px-[80px] transition-colors duration-300"
                    )}
                >
                    <nav className="flex items-center justify-between">
                        <Link href="/">
                            <div
                                className={`before:content-[''] font-clashbold font-semibold text-[18px] md:text-[25px] lg:hover:before:bg-[#4C686F]s active:scale-[0.86] transition-all duration-100 before:absolute before:h-1 before:-bottom-1 before:transition-all before:duration-300 ${pathname === '/' ? "text-[var(--text-primary)] hover:before:w-full" : "text-[var(--text-primary)] hover:before:w-full"} relative`}
                            >
                                StanCodes<span>!</span>
                                <span>⚡</span>
                            </div>
                        </Link>
                        <div className="flex items-center gap-4">
                            <ThemeToggle />
                            <div className="text-[var(--text-secondary)] group group-hover:text-[var(--text-primary)] transition-all duration-300">
                                <Link
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/Mr-Stanley"
                                    className="group-hover:text-[var(--text-primary)] transition-colors duration-300"
                                >
                                    <span className="flex items-center gap-[8px] md:gap-[10px]">
                                        <GhIcon className="opacity-60 w-[26px] h-[26px] md:w-[32px] md:h-[32px] transition-opacity duration-300 group-hover:opacity-100" />
                                        <p className="font-clash text-[15px] md:text-[18px] font-medium group-hover:text-[var(--text-primary)] transition-colors duration-300">
                                            github
                                        </p>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </header>
            </main>
        </>
    );
};

export default Navbar;

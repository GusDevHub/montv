import { SearchIcon, Settings } from "lucide-react";
import Link from "next/link";

const NavigationDesktop = () => {
    return (
        <nav className="hidden md:flex items-center justify-between gap-8 text-nowrap text-opacity-75 w-full max-w-xl mx-auto">
            <Link href="#"><SearchIcon size={16} /></Link>
            <Link href="#" className="relative hover:cursor-default">Home  <span className="absolute border-teal-600 border-b-teal-600 border-[1px] w-full left-0 -bottom-2"></span></Link>
            <Link href="#">Movies</Link>
            <Link href="#">TV Shows</Link>
            <Link href="#">Sports</Link>
            <Link href="#">Kids</Link>
            <Link href="#">Hayu</Link>
            <Link href="#">TV Guide</Link>
            <Link href="#"><Settings size={16} /></Link>
        </nav>
    );
}

export default NavigationDesktop;
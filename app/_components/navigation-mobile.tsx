import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const NavigationMobile = () => {
    return (
        <nav className="flex flex-col items-start w-full space-y-3">
            <Link href="#" className="w-full border border-white/15 px-3 py-2 rounded-full"><span className="flex items-center justify-start gap-3 w-fit"><SearchIcon size={16} /> Search</span></Link>
            <Button asChild className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600" variant={"ghost"}><Link href="#" className="relative">Home <span className="absolute border-teal-600 border-b-teal-600 border-[.5px] w-[88%] left-2 bottom-0"></span></Link></Button>
            <Button asChild className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600" variant={"ghost"}><Link href="#">Movies</Link></Button>
            <Button asChild className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600" variant={"ghost"}><Link href="#">TV Shows</Link></Button>
            <Button asChild className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600" variant={"ghost"}><Link href="#">Sports</Link></Button>
            <Button asChild className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600" variant={"ghost"}><Link href="#">Kids</Link></Button>
            <Button asChild className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600" variant={"ghost"}><Link href="#">Hayu</Link></Button>
            <Button asChild className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600" variant={"ghost"}><Link href="#">TV Guide</Link></Button>
            <Button asChild className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600" variant={"ghost"}><Link href="#">Settings</Link></Button>
        </nav>
    );
}

export default NavigationMobile;
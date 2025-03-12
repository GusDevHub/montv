import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { SheetClose } from "./ui/sheet";

const NavigationMobile = () => {
  return (
    <nav className="flex flex-col items-start w-full space-y-3">
      <Link
        href="#"
        className="w-full border border-white/15 px-3 py-2 rounded-full"
      >
        <span className="flex items-center justify-start gap-3 w-fit">
          <SearchIcon size={16} /> Search
        </span>
      </Link>
      <SheetClose
        asChild
        className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600"
      >
        <Link href="#" className="relative">
          Home{" "}
          <span className="absolute border-teal-600 border-b-teal-600 border-[.5px] w-[88%] left-2 bottom-0"></span>
        </Link>
      </SheetClose>
      <SheetClose
        asChild
        className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600"
      >
        <Link href="#">Movies</Link>
      </SheetClose>
      <SheetClose
        asChild
        className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600"
      >
        <Link href="#">TV Shows</Link>
      </SheetClose>
      <SheetClose
        asChild
        className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600"
      >
        <Link href="#">Sports</Link>
      </SheetClose>
      <SheetClose
        asChild
        className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600"
      >
        <Link href="#">Kids</Link>
      </SheetClose>
      <SheetClose
        asChild
        className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600"
      >
        <Link href="#">Hayu</Link>
      </SheetClose>
      <SheetClose
        asChild
        className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600"
      >
        <Link href="#">TV Guide</Link>
      </SheetClose>
      <SheetClose
        asChild
        className="text-left font-bold p-0 pl-2 hover:bg-transparent hover:text-teal-600"
      >
        <Link href="#">Settings</Link>
      </SheetClose>
    </nav>
  );
};

export default NavigationMobile;

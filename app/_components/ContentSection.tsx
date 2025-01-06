import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from 'lucide-react';

interface ContentItem {
    viewallText?: string;
    sectionName: string;
    categoryImage: string;
    bannerImage: string;
    title: string;
    description: string;
    classification: string;
    classAge: string;
    duration: string;
    year: string;
    genre: string;
    altText: string;
}

interface ContentSectionProps {
    viewallText: string;
    sectionName: string;
    data: ContentItem[];
    selectedIndex: number;
    setSelectedIndex: (index: number) => void;
    showViewAllAtStart?: boolean;
    showViewAllAtEnd?: boolean;
}

const getAnimationDelay = (index: number) => `animate__delay-${index + .9}s`;

export default function ContentSection({
    viewallText,
    sectionName,
    data,
    selectedIndex,
    setSelectedIndex,
    showViewAllAtStart = false,
    showViewAllAtEnd = true,
}: ContentSectionProps) {
    return (
        <div className="flex items-center justify-between gap-4 md:gap-2 my-3 md:my-4 pr-3 md:pr-12">
            {showViewAllAtStart && (
                <Link href="#" className="min-w-[155px] md:min-w-[155px] max-w-[155px] md:max-w-[155px] h-[94px] md:h-[146px] relative rounded-lg bg-cyan-950/25 p-3 border-transparent border-[2px] hover:border-teal-800 transition-transform transform hover:scale-110 focus:scale-110 hover:z-20 hover:ml-2">
                    <span className="text-sm text-muted/60">{viewallText}</span>
                    <p className="text-sm/6 md:text-base/6 opacity-90">{sectionName}</p>
                    <p className="absolute bottom-1 right-1 text-5xl opacity-45">...</p>
                </Link>
            )}
            {data.map((item, index) => (
                <Link
                    href="#"
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`min-w-[167px] md:min-w-64 max-w-48 md:max-w-80 relative z-10 hover:z-20 rounded-lg border-transparent border-[2px] 
                            transition-all transform focus:outline-none focus:border-teal-800 hover:border-teal-800 
                            hover:scale-110 focus-visible:ring-2 focus-visible:ring-teal-700 
                            ${selectedIndex === index ? "border-teal-800 scale-110" : ""}`}
                >
                    <div className={`absolute bottom-0 left-0 px-3 py-1 bg-gradient-to-t from-[#000]/75 via-[#001211]/65 to-[transparent] bg-[length:100%_100%] w-full rounded-b-lg z-20  animate__animated animate__fadeIn ${getAnimationDelay(index)}`}>
                        <Image
                            src={item.categoryImage}
                            alt="category"
                            width={100}
                            height={75}
                            className="max-w-14 md:max-w-24"
                        />
                        <p className="w-full truncate mt-1 text-xs md:text-base">{item.title}</p>
                    </div>
                    <Image
                        src={item.bannerImage}
                        alt={item.altText}
                        width={220}
                        height={75}
                        className="min-w-[167px] md:min-w-64 max-w-28 md:max-w-80 rounded-lg"
                    />
                </Link>
            ))}
            {showViewAllAtEnd && (
                <Link href="#" className="hover:z-20 focus:z-20">
                    <div className="min-w-[167px] md:min-w-64 max-w-28 md:max-w-80 rounded-lg bg-cyan-950/25 py-4 md:py-7 border-transparent border-[2px] hover:border-teal-800 transition-transform transform hover:scale-110 focus:scale-110 hover:z-20 text-center text-base md:text-xl">
                        <p className="w-8 h-8 md:w-12 md:h-12 block mx-auto bg-teal-700 rounded-full mb-1 md:mb-2">
                            <ChevronRight className="w-8 h-8 md:w-12 md:h-12 ml-[2px]" />
                        </p>
                        View all
                    </div>
                </Link>
            )}
        </div>
    );
}